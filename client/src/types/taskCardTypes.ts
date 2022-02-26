export type TaskCardTagType = {
    name?: string,
    color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined,
    type: 'tag' | 'filledTag',
}

export type TaskCardPropsType = {
    title: string,
    priority: number,
    tags: TaskCardTagType[],
    from: string,
    to: string,
}

export type CardActionPropsType = {
    showActions: boolean;
}

export type CardActionsAreaType = {
    title: string,
    tags: TaskCardTagType[],
    setShowActions: (arg0: any) => void,
    from: string,
    to: string,
}
