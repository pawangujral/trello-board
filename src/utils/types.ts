export type taskType = {
    id: number | null;
    title: string;
    description: string;
    dueDate: Date | null;
    tags: string;
    status: string;
}

type dataType = {
    data: taskType[]
}

export type contextType = {
    addTask: Function,
    data: dataType,
    deleteTask: Function,
    fetch: Function,
    saveState: Function,
    updateTask: Function,
}