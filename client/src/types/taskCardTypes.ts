export type TaskCardTagType = {
  name?: string;
  color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
  type: 'tag' | 'filledTag';
};

export type TaskCardPropsType = {
  title: string;
  type: 'appointment' | 'task' | 'meeting' | 'note' | 'other';
  tags: TaskCardTagType[];
  text?: string;
};

export type CardActionPropsType = {
  showActions: boolean;
  checked: boolean;
};

export type CardActionsAreaType = {
  title: string;
  tags: TaskCardTagType[];
  handleClick: () => void;
  text: string | undefined;
};
