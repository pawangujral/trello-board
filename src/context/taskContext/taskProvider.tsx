import React from "react";
import { TaskContext, TASKS_DEFAULT_STATE } from "./taskStore";
import {taskType} from "./../../utils/types";

interface providerProps {
    children: React.ReactNode;
}

export const TaskProvider: React.FC<providerProps> = ({ children }: providerProps) => {
    const [state, setState] = React.useState(TASKS_DEFAULT_STATE);

    // methods
    const fetch = () => {
        return "data fetching from localStorage";
    }

    const handleTaskData = (data: taskType) => {
        if (typeof data !== 'object' || !Object.entries(data).length) {
            return false;
        }

        const { tasks } = state;
        // check if task already exist
        const isTaskExist = tasks.filter(task => task.id === data.id);

        if (isTaskExist.length) {
            const updatedTasks = tasks.map(item => {
                if (item.id === data.id) {
                    return data;
                } else {
                    return item;
                }
            });

            setState({ tasks: [...updatedTasks] });
        } else {
            // Increment Task ID for new Task & add current Time
            data.id = tasks.length + 1;
            data.createDate = new Date();
            setState({ tasks: [...tasks, data]});
        }

        return true;
    }

    const deleteTask = (id: number) => {
        if(typeof id !== "number") {
            return false;
        }

        const { tasks } = state;
        const updatedTasks = tasks.filter(task => task.id !== id);
        setState({ tasks: [...updatedTasks]});
        return true;
    }

    const saveState = () => {
        return "Save data to localstorage";
    }

    const methods = {
        fetch,
        handleTaskData,
        deleteTask,
        saveState
    }

    return <TaskContext.Provider value={{ ...state, ...methods }}>{children}</TaskContext.Provider>
}