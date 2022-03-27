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
import { columnsFromBacked, onDragEnd } from '../../../utils/dashboardHelpers';
import { IItem } from '../../../types/Dashboard';
import { TaskCardTagType } from '../../../types/taskCardTypes';
import { getCurrentTheme } from '../../../assets/theme';

export const TaskBoard = () => {
  const [columns, setColumns] = useState(columnsFromBacked);
  const { mode } = useColorMode();
  const theme = React.useMemo(() => createTheme(getCurrentTheme(mode)), [mode]);

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
                              priority={2}
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
