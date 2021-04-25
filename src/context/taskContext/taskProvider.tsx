import React from "react";
import {TaskContext, TASKS_DEFAULT_STATE} from "./taskStore";

interface providerProps {
    children: React.ReactNode
}

export const TaskProvider: React.FC<providerProps> = ({children}: providerProps) => {
    const [state, setState] = React.useState(TASKS_DEFAULT_STATE);

    // methods
    const fetch = () => {
        return "data fetching from localStorage";
    }

    const addTask = () => {
        return "Add task";
    }

    const updateTask = (id:number) => {
        return "update task";
    }

    const deleteTask = (id:number) => {
        return "delete task";
    }

    const saveState = () => {
        return "Save data to localstorage";
    }

    const methods = {
        fetch,
        addTask,
        updateTask,
        deleteTask
    }

    return <TaskContext.Provider value={{...state, ...methods}}>{children}</TaskContext.Provider>
} 