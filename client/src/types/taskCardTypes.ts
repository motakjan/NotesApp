export type TaskCardTagType = {
  tagType: string;
  tagText: string;
};

export type TaskCardPropsType = {
  title?: string;
  type: 'appointment' | 'task' | 'meeting' | 'note' | 'default';
  tags: TaskCardTagType[];
  text?: string;
  id: string;
  updatedAt?: string;
  size?: 'small' | 'medium' | 'large';
  colored: boolean;
};

export type CardActionPropsType = {
  taskId: string;
  showActions: boolean;
  checked: boolean;
};

export type CardActionsAreaType = {
  title?: string;
  tags?: TaskCardTagType[];
  handleClick: () => void;
  text?: string;
  updatedAt?: string;
  size?: 'small' | 'medium' | 'large';
};
