export type TaskCardTagType = {
  tagType: string;
  tagText: string;
};

export type TaskCardPropsType = {
  title?: string;
  type: 'appointment' | 'task' | 'meeting' | 'note' | 'other';
  tags: TaskCardTagType[];
  text?: string;
  id: string;
  updatedAt?: string;
};

export type CardActionPropsType = {
  showActions: boolean;
  checked: boolean;
};

export type CardActionsAreaType = {
  title?: string;
  tags?: TaskCardTagType[];
  handleClick: () => void;
  text?: string;
  updatedAt?: string;
};
