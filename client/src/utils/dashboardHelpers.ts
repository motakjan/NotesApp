import _ from 'lodash';
import { IColumns, IDashboard, IOnDragEnd, ITask } from '../types/Dashboard/dashboardTypes';

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
    destItems[destination.index].column = parseFloat(destination.droppableId);
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
    copiedItems[0].position = destination.index;
    const removed = copiedItems.splice(source.index, 1)[0];
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

const getTasksForColumn = (id: number, board: IDashboard) => {
  const singleColumn = board.tasks.filter(el => el.column === id);
  return _.orderBy(singleColumn, ['position'], ['asc']);
};

export const COLUMN_NAMES = ['Unassigned', 'Todo', 'Requested', 'In Progress', 'Done', 'Finished'];

export const generateColumns = (board: IDashboard) => ({
  '1': {
    name: COLUMN_NAMES[0],
    items: getTasksForColumn(1, board),
  },
  '2': {
    name: COLUMN_NAMES[1],
    items: getTasksForColumn(2, board),
  },
  '3': {
    name: COLUMN_NAMES[2],
    items: getTasksForColumn(3, board),
  },
  '4': {
    name: COLUMN_NAMES[3],
    items: getTasksForColumn(4, board),
  },
  '5': {
    name: COLUMN_NAMES[4],
    items: getTasksForColumn(5, board),
  },
  '6': {
    name: COLUMN_NAMES[5],
    items: getTasksForColumn(6, board),
  },
});

export const clearItemTask = ({ element, changedProp }: { element: ITask[]; changedProp?: string }) =>
  element?.map((el: ITask, index: number) => {
    const { title, description, users, tags, ...rest } = el;
    if (changedProp) {
      rest.position = index;
    }
    return rest;
  });

export const manualMoveToBoard = (taskId: string, boardName: string, columns: any) => {
  let correctMove = true;
  _.forEach(columns, (column, id) => {
    const hasItem = column.items.find((item: any) => item.id === taskId);
    if (column.name === boardName && hasItem) {
      correctMove = false;
    }
  });

  if (!correctMove) return { columns, error: 'Incorrect Move Operation' };
  const allTasks = _.flatten(_.map(columns, (column, _id) => [...column.items]));
  const movedTask = allTasks.filter(task => task.id === taskId)[0];
  const result = {};
  _.forEach(columns, (column, id) => {
    const columnTasks = [...column!.items];
    const filteredItems = columnTasks.filter((item: any) => item.id !== taskId);
    if (column.name === boardName) {
      const newItems = [...column.items, { ...movedTask, id: taskId, position: column.items.length, column: +id }];
      result[id] = { name: column.name, items: newItems };
    } else {
      result[id] = { name: column.name, items: filteredItems };
    }
  });

  return { columns: result, error: null };
};
