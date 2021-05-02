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
    deleteTask?: (id: number) => boolean,
    handleTaskData?: (data: taskType) => boolean,
    handleLocalStorage?: (type: string) => boolean 
}

export type toastType = {
    message: string;
    variant?: "default" | "success" | "warning" | "error";
}

export type  toastTypeContext =  {
    toasts: toastType[];
    addToast?: (toast: toastType)  => void;
}