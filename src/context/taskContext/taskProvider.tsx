import React from "react";
import { TaskContext, TASKS_DEFAULT_STATE } from "./taskStore";
import {taskType, contextType} from "./../../utils/types";
import {getStorageType, setStorageType, removeStorageType} from "./../../utils/storeHelper";

interface providerProps {
    children: React.ReactNode;
}

export const TaskProvider: React.FC<providerProps> = ({ children }: providerProps) => {
    const [state, setState] = React.useState(TASKS_DEFAULT_STATE);

    React.useEffect(() => {
        if(getStorageType("local", "trello-board-data")) {
            const localData: { tasks: taskType[]} | string | boolean | null = getStorageType("local", "trello-board-data");
            // setState(localData);
            // @ts-ignore
            setState(JSON.parse(localData));
        }  
    },[]);

    const handleLocalStorage = (type: "save" | "delete") => {
        switch(type) {
            case "save" :
                if(state.tasks.length) {
                    setStorageType("local", "trello-board-data", JSON.stringify(state));
                } else {
                    console.log("No task found to save");
                }
            break;
            case "delete" :
                removeStorageType("local", "trello-board-data");
                setState({tasks: []});
            break;
            default:
                    break;
        }


        
        return true;
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

    const methods = {
        handleLocalStorage,
        handleTaskData,
        deleteTask
    }

    return <TaskContext.Provider value={{ ...state, ...methods } as contextType}>{children}</TaskContext.Provider>
}