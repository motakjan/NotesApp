import { DropResult } from 'react-beautiful-dnd';

export interface IItem {
  id: string;
  text?: string;
  title: string;
  tags: Array<{
    name: string;
    color: string;
    type: string;
  }>;
}

export interface IColumns {
  [key: string]: {
    name: string;
    items: Array<IItem>;
  };
}

export interface ITask {
  id: string;
  position: number;
  column: number;
}

export interface IDashboard {
  title: string;
  description: string;
  users: any[];
  tasks: ITask[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface ITaskBoard {
  board: IDashboard;
}

export interface ITaskBoardTabsWrapper {
  boards?: IDashboard[];
}

export interface IOnDragEnd {
  (result: DropResult, columns: IColumns, setColumns: (columns: IColumns) => void): void;
}
