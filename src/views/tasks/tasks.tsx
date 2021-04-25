import React from "react";
import List from "./list";
import {TaskContext} from "./../../context/taskContext/taskStore"
import Button from "./../../components/button";
import {taskType} from "./../../utils/types";
import "./tasks.css"; 

const Tasks: React.FC = () => {
    const {data} = React.useContext(TaskContext);
    const [startTasks, setStartTasks] = React.useState<taskType[]>([]);
    const [inProgressTasks, setInProgressTasks] = React.useState<taskType[]>([]);
    const [completedTasks, setCompletedTasks] = React.useState<taskType[]>([]);


    React.useEffect(() => {
        (() => {
            const {tasks} = data
            const startData = tasks.filter(task => task.status === "start");
            const progressData = tasks.filter(task => task.status === "inProgress");
            const comepletedData = tasks.filter(task => task.status === "completed");

            console.log(startTasks);
            console.log(inProgressTasks);
            console.log(completedTasks);

            setStartTasks(startData);
            setInProgressTasks(progressData);
            setCompletedTasks(comepletedData);
        })();
    },[]);


    console.log(startTasks);
    console.log(inProgressTasks);
    console.log(completedTasks);

    return (
        <div className="wrapper">
            <div className="title-bar">
                <h1>My Tasks</h1>
                <Button title="add task"/>
            </div>

            <main>
                <div className="tasks-list-wrapper">
                    <List title="To do" data={startTasks}/> 
                    <List title="In progress..." data={inProgressTasks}/>
                    <List title="Completed" data={completedTasks}/>
                </div>
                {/* <Add/> */}
            </main>
        </div>
    )
};

export default Tasks;