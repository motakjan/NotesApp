import { ITask } from './Dashboard/dashboardTypes';

export type TaskCardTagType = {
  tagType: string;
  tagText: string;
};

export type TaskCardPropsType = {
  title?: string;
  type: 'appointment' | 'task' | 'meeting' | 'note' | 'default';
  tags: TaskCardTagType[];
  item: ITask;
  text?: string;
  id: string;
  updatedAt?: string;
  size?: 'small' | 'medium' | 'large';
  colored: boolean;
  onMoveClick: (taskId: string, boardName: string) => void;
  from: string;
};

export type CardActionPropsType = {
  taskId: string;
  showActions: boolean;
  checked: boolean;
  onMoveClick: (taskId: string, boardName: string) => void;
  from: string;
  item: ITask;
};

export type CardActionsAreaType = {
  title?: string;
  tags?: TaskCardTagType[];
  handleClick: () => void;
  text?: string;
  updatedAt?: string;
  size?: 'small' | 'medium' | 'large';
};
