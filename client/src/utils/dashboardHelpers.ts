import { IDashboard, IOnDragEnd, ITask } from '../types/Dashboard';
import _ from 'lodash';

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

export const generateColumns = (board: IDashboard) => ({
  '1': {
    name: 'Unassigned',
    items: getTasksForColumn(1, board),
  },
  '2': {
    name: 'Todo',
    items: getTasksForColumn(2, board),
  },
  '3': {
    name: 'Requested',
    items: getTasksForColumn(3, board),
  },
  '4': {
    name: 'In Progress',
    items: getTasksForColumn(4, board),
  },
  '5': {
    name: 'Done',
    items: getTasksForColumn(5, board),
  },
  '6': {
    name: 'Old',
    items: getTasksForColumn(6, board),
  },
});

export const clearItemTask = ({ element, changedProp }: { element: ITask[]; changedProp?: string }) =>
  element?.map((el: ITask, index: any) => {
    const { title, description, users, tags, ...rest } = el;
    if (changedProp) {
      rest.position = index;
    }
    return rest;
  });
