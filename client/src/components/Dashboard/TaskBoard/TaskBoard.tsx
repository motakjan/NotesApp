import React, { useState } from 'react';
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
import { v4 as uuidv4 } from 'uuid';
import { Box, createTheme, Typography } from '@mui/material';
import { TaskCard } from '../TaskCard/TaskCard';
import { useColorMode } from '../../../context/ColorModeContext';
import { generateColumns, onDragEnd } from '../../../utils/dashboardHelpers';
import { IDashboard, IItem, ITaskBoard } from '../../../types/Dashboard';
import { TaskCardTagType } from '../../../types/taskCardTypes';
import { getCurrentTheme } from '../../../assets/theme';
import { useQuery } from 'react-query';
import { dashboardApi } from '../../../api/dashboard';

export const TaskBoard: React.FC<ITaskBoard> = ({ board }) => {
  const [columns, setColumns] = useState(generateColumns(board));
  const { mode } = useColorMode();
  const theme = React.useMemo(() => createTheme(getCurrentTheme(mode)), [mode]);
  const { data, status } = useQuery<IDashboard, Error>(
    [`dashboard-${board._id}`, { id: board?._id }],
    () => dashboardApi.getDashboardData(board._id),
    { retry: 1, onSuccess: (fetched: any) => setColumns(generateColumns(fetched)) }
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }

  return (
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
                    {column.items.map((item: IItem, index: number) => (
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
                              text={item.text}
                              tags={item.tags as Array<TaskCardTagType>}
                              type="meeting"
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
  );
};
