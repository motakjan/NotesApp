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

export interface IOnDragEnd {
  (result: DropResult, columns: IColumns, setColumns: (columns: IColumns) => void): void;
}
