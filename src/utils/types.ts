export type taskType = {
    id: number | null;
    title: string;
    description: string;
    createDate: Date | null;
    tags: string;
    status: string; 
}

export type contextType = {
    tasks: taskType[],
    deleteTask: (id: number) => boolean,
    handleTaskData: (data: taskType) => boolean,
    handleLocalStorage: (type: string) => void 
}