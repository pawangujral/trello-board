import React from "react";
import {taskType} from "./../../utils/types";

export const TASKS_DEFAULT_STATE : {tasks: taskType[]}= {
    tasks: []
};

export const TaskContext = React.createContext(TASKS_DEFAULT_STATE);