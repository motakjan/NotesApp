import { IDashboard, IOnDragEnd } from '../types/Dashboard';
import { v4 as uuidv4 } from 'uuid';

export const onDragEnd: IOnDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

export const getBGColor = (mode: string, darkColor: string, lightColor: string) =>
  mode === 'dark' ? darkColor : lightColor;

const itemsFromBackend = [
  {
    id: uuidv4(),
    title: 'First Task',
    tags: [
      {
        name: 'Testing',
        color: 'info',
        type: 'tag',
      },
      {
        name: 'Testing',
        color: 'warning',
        type: 'filledTag',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Second Task',
    tags: [],
  },
  {
    id: uuidv4(),
    title: 'Third Task',
    tags: [
      {
        name: 'Working',
        color: 'error',
        type: 'tag',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Third Task',
    tags: [
      {
        name: 'Working',
        color: 'error',
        type: 'tag',
      },
    ],
  },

  {
    id: uuidv4(),
    title: 'Third Task',
    tags: [
      {
        name: 'Working',
        color: 'error',
        type: 'tag',
      },
    ],
  },

  {
    id: uuidv4(),
    title: 'Third Task',
    tags: [
      {
        name: 'Working',
        color: 'error',
        type: 'tag',
      },
    ],
  },

  {
    id: uuidv4(),
    title: 'Third Task',
    tags: [
      {
        name: 'Working',
        color: 'error',
        type: 'tag',
      },
    ],
  },
];

const getTasksForColumn = (id: number, board: IDashboard) => board.tasks.filter(el => el.column === id);

export const generateColumns = (board: IDashboard) => ({
  [uuidv4()]: {
    name: 'Unassigned',
    items: getTasksForColumn(1, board),
  },
  [uuidv4()]: {
    name: 'Todo',
    items: getTasksForColumn(2, board),
  },
  [uuidv4()]: {
    name: 'Requested',
    items: getTasksForColumn(3, board),
  },
  [uuidv4()]: {
    name: 'In Progress',
    items: getTasksForColumn(4, board),
  },
  [uuidv4()]: {
    name: 'Done',
    items: getTasksForColumn(5, board),
  },
  [uuidv4()]: {
    name: 'Old',
    items: getTasksForColumn(6, board),
  },
});
