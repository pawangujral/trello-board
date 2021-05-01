import React from "react";
import { TaskContext, TASKS_DEFAULT_STATE } from "./taskStore";
import {taskType, contextType} from "./../../utils/types";
import {LOCAL_STORAGE_KEY} from "./../../utils/constants";
import {getStorageType, setStorageType, removeStorageType} from "./../../utils/storeHelper";

interface providerProps {
    children: React.ReactNode;
}

export const TaskProvider: React.FC<providerProps> = ({ children }: providerProps) => {
    const [state, setState] = React.useState<contextType>(TASKS_DEFAULT_STATE);

    React.useEffect(() => {
        if(getStorageType("local", LOCAL_STORAGE_KEY)) {
            const localData: { tasks: taskType[]} | string | boolean | null = getStorageType("local", LOCAL_STORAGE_KEY);
            localData && setState(JSON.parse(localData));
        }  
    },[]);

    const handleLocalStorage = (type: string) => {
        switch(type) {
            case "save" :
                setStorageType("local", LOCAL_STORAGE_KEY, JSON.stringify(state));
                return true;
            case "delete" :
                removeStorageType("local", LOCAL_STORAGE_KEY);
                setState({tasks: []});
                return true;
            break;
            default:
                return false;
        } 
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
            data.id = Math.floor((Math.random() * 1000) + 1);
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

    const methods = {
        handleLocalStorage,
        handleTaskData,
        deleteTask
    }

    return <TaskContext.Provider value={{ ...state, ...methods }}>{children}</TaskContext.Provider>
}