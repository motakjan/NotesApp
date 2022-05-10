import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
} from 'react-beautiful-dnd';
import { Box, createTheme, Typography } from '@mui/material';
import { useColorMode } from '../../../context/ColorModeContext';
import { clearItemTask, generateColumns, onDragEnd } from '../../../utils/dashboardHelpers';
import { IDashboard, ITask, ITaskBoard } from '../../../types/Dashboard/dashboardTypes';
import { getCurrentTheme } from '../../../assets/theme';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { dashboardApi } from '../../../api/dashboard';
import { Loading } from '../../../pages/Loading/Loading';
import { NappSnackbar } from '../../UI/NappSnackbar/NappSnackbar';
import { TaskCard } from '../TaskCard/TaskCard';
import { TaskCardTagType } from '../../../types/taskCardTypes';
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '../../../hooks/useToast';

export const TaskBoard: React.FC<ITaskBoard> = ({ board }) => {
  const { mode } = useColorMode();
  const queryClient = useQueryClient();
  const [columns, setColumns] = useState(generateColumns(board));
  const [staticData, setStaticData] = useState<any>([]);
  const [changedDashboard, setChangedDashboard] = useState<any>([]);
  const [dashboardChanged, setDashboardChanged] = useState<boolean>(false);
  const { successToast } = useToast();
  const theme = React.useMemo(() => createTheme(getCurrentTheme(mode)), [mode]);
  const { status } = useQuery<IDashboard, Error>(
    [`dashboard-${board._id}`, { id: board?._id }],
    () => dashboardApi.getDashboardData(board._id),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: (fetched: IDashboard) => {
        setColumns(generateColumns(fetched));
        setStaticData(clearItemTask({ element: fetched.tasks }));
      },
    }
  );
  const { mutate } = useMutation(`update-dashboard-${board._id}`, dashboardApi.putDashboardData, {
    onSuccess: () => {
      setDashboardChanged(false);
      queryClient.invalidateQueries(`dashboard-${board._id}`);
      successToast('Dashboard layout saved');
    },
  });

  useEffect(() => {
    const columnsItems = Object.keys(columns).map(key => columns[key].items);
    const clearedColumnsData = columnsItems.flatMap(el => clearItemTask({ element: el, changedProp: 'position' }));
    setChangedDashboard(clearedColumnsData);
    setDashboardChanged(JSON.stringify(clearedColumnsData) !== JSON.stringify(staticData));
  }, [columns, staticData]);

  const handleSaveSnack = () => {
    mutate({ data: changedDashboard, id: board._id });
  };
  const handleCloseSnack = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    queryClient.invalidateQueries(`dashboard-${board._id}`);
    setDashboardChanged(false);
  };

  if (status === 'loading') {
    return <Loading status={status} />;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }

  return (
    <>
      {staticData?.length > 0 && (
        <NappSnackbar
          mode={mode}
          handleClose={handleCloseSnack}
          handleSave={handleSaveSnack}
          open={dashboardChanged}
          setOpen={setDashboardChanged}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          minHeight: '65vh',
          minWidth: '100rem',
          pt: 2,
        }}
      >
        <DragDropContext onDragEnd={(result: DropResult) => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([id, column]) => (
            <Box
              key={`${uuidv4()}-column`}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                minWidth: '16.66666%',
              }}
            >
              <Box
                sx={{
                  m: '8px',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: 'small',
                    borderTopRightRadius: '4px',
                    borderTopLeftRadius: '4px',
                    background: theme.palette.primary.light,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                  }}
                >
                  {column.name}
                </Typography>
                <Droppable droppableId={id} key={id}>
                  {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                    <Box
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      sx={{
                        height: '100%',
                        minWidth: '100%',
                        p: '10px',
                        backgroundColor: snapshot.isDraggingOver
                          ? theme.palette.custom.dashboardDrag
                          : theme.palette.background.paper,
                      }}
                    >
                      {column.items.map((item: ITask, index: number) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                          {(provided: DraggableProvided, _snapshot: DraggableStateSnapshot) => (
                            <Box
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              sx={{
                                userSelect: 'none',
                                margin: '0 0 8px 0',
                                width: '100%',
                                minHeight: '50px',
                                textColor: 'white',
                                ...provided.draggableProps.style,
                              }}
                            >
                              <TaskCard
                                title={item.title}
                                text={item.description}
                                tags={item.tags as Array<TaskCardTagType>}
                                id={item.id}
                                updatedAt={item.updatedAt}
                                type={item.type}
                              />
                            </Box>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Box>
            </Box>
          ))}
        </DragDropContext>
      </Box>
    </>
  );
};
