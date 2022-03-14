export type TaskCardTagType = {
  name?: string;
  color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
  type: 'tag' | 'filledTag';
};

export type TaskCardPropsType = {
  title: string;
  priority: number;
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
  text: string;
};
