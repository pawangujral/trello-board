import React from 'react';
import {cntxtType} from './../../utils/types';

export const TASKS_DEFAULT_STATE: cntxtType = {
  tasks: [],
};

export const TaskContext = React.createContext(TASKS_DEFAULT_STATE);
