import { Box, createTheme, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DroppableProvided, DroppableStateSnapshot, DropResult } from 'react-beautiful-dnd';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { IDashboard, ITask, ITaskBoard } from '../../../types/Dashboard/dashboardTypes';
import { clearItemTask, generateColumns, manualMoveToBoard, onDragEnd } from '../../../utils/dashboardHelpers';

import { v4 as uuidv4 } from 'uuid';
import { dashboardApi } from '../../../api/dashboard';
import { getCurrentTheme } from '../../../assets/theme';
import { useColorMode } from '../../../context/ColorModeContext';
import { useToast } from '../../../hooks/useToast';
import { Loading } from '../../../pages/Loading/Loading';
import { NappSnackbar } from '../../UI/NappSnackbar/NappSnackbar';
import { NappUserPicker } from '../../UI/NappUserPicker/NappUserPicker';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';
import { FilterOptions } from '../FilterOptions/FilterOptions';
import DraggableItem from './DraggableItem/DraggableItem';

export const TaskBoard: React.FC<ITaskBoard> = ({ board }) => {
  const { mode } = useColorMode();
  const queryClient = useQueryClient();
  const [columns, setColumns] = useState(generateColumns(board));
  const [staticData, setStaticData] = useState<any>([]);
  const [dashboardData, setDashboardData] = useState<any>([]);
  const [changedDashboard, setChangedDashboard] = useState<any>([]);
  const [taskSize, setTaskSize] = useState<'small' | 'medium' | 'large'>('large');
  const [colored, setColored] = useState(true);
  const [dashboardChanged, setDashboardChanged] = useState<boolean>(false);
  const [personFilterClicked, setPersonFilterClicked] = useState(false);
  const [selectedUser, setSelectedUser] = useState('All Users');
  const { successToast, errorToast } = useToast();
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
        setDashboardData(fetched);
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

  if (status === 'error') {
    return <div>Error</div>;
  }

  const handleUsersPickerClose = () => {
    setPersonFilterClicked(false);
  };

  const handleUsersPickerOpen = () => {
    setPersonFilterClicked(true);
  };

  const handleUserListItemSelected = (user: string) => {
    setSelectedUser(user);
    setPersonFilterClicked(false);
  };

  const handleMoveClicked = (taskId: string, boardName: string) => {
    const newColumns: any = manualMoveToBoard(taskId, boardName, columns);
    if (newColumns.error === null) {
      setColumns(newColumns.columns);
    } else {
      errorToast(newColumns.error);
    }
  };

  return (
    <>
      {dashboardData && (
        <NappUserPicker
          users={dashboardData.users}
          open={personFilterClicked}
          handleClose={handleUsersPickerClose}
          setSelectedUser={handleUserListItemSelected}
          theme={mode}
        />
      )}
      {staticData?.length > 0 && (
        <NappSnackbar
          mode={mode}
          handleClose={handleCloseSnack}
          handleSave={handleSaveSnack}
          open={dashboardChanged}
          setOpen={setDashboardChanged}
        />
      )}
      <DashboardHeader title={board.title} boardId={board._id} description={board.description} />
      <FilterOptions
        handlePersonClicked={handleUsersPickerOpen}
        selectedUser={selectedUser}
        setTaskSize={setTaskSize}
        taskSize={taskSize}
        colored={colored}
        setColored={setColored}
      />
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
                      {column.items!.map((item: ITask, index: number) => (
                        <DraggableItem
                          key={item.id}
                          item={item}
                          index={index}
                          itemSize={taskSize}
                          colored={colored}
                          onMoveClick={handleMoveClicked}
                          from={column.name}
                        />
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
