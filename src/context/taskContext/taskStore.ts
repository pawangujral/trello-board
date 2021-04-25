import React from "react";

export const TASKS_DEFAULT_STATE = {
    data: {
        tasks: [
            {
                id: 1,
                title: "Fix issue",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                dueDate: new Date(),
                tags: "designer",
                status: "start"
            },
            {
                id: 2,
                title: "Fix issue",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                dueDate: new Date(),
                tags: "designer",
                status: "inProgress"
            },
            {
                id: 4,
                title: "Fix issue",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                dueDate: new Date(),
                tags: "designer",
                status: "inProgress"
            },
            {
                id: 3,
                title: "Fix issue",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                dueDate: new Date(),
                tags: "designer",
                status: "completed"
            }
        ]
    }
};

export const TaskContext = React.createContext(TASKS_DEFAULT_STATE);