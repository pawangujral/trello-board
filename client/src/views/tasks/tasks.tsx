import React from "react";
import List from "./list";
import {TaskContext} from "./../../context/taskContext/taskStore";
import Button from "./../../components/button";
import {taskType, contextType} from "./../../utils/types";
import {Link} from "react-router-dom";
import "./tasks.css"; 

const defaultState = {
    id: null,
    title: "",
    description: "",
    createDate: null,
    tags: "",
    status: ""
}

const taskDataDefaultState = {
    start: [],
    inProgress: [],
    completed: []
}

type taskDataType = {
    start: taskType[],
    inProgress: taskType[],
    completed: taskType[]
}

const Tasks: React.FC = () => {
    const {tasks, handleLocalStorage} = React.useContext<contextType>(TaskContext);
    const [taskData, setTaskData] = React.useState<taskDataType>(taskDataDefaultState); 

    React.useEffect(() => {
        (() => { 
            // divide each category for respective state
            const startData = tasks.filter(task => task.status === "start");
            const progressData = tasks.filter(task => task.status === "inProgress");
            const comepletedData = tasks.filter(task => task.status === "completed");

            setTaskData({start: [...startData], inProgress: [...progressData], completed: [...comepletedData]}); 
        })();
    },[tasks]); 
 
    // save to local storage fn
    const handleLocalState = (type: string) => {
        if(handleLocalStorage) {
            const isSuccess = handleLocalStorage(type); 

            if(isSuccess) {
                // TODO : add toast message
            }
        } 
    }  

    return (
        <>
            <header className="title-bar">
                <div>
                    <h1>My Tasks</h1>
                    <Link to="/task/add" className="link">Add </Link> 
                </div>
                <div className="button-group">
                    <Button title="save your board" handleClick={e => handleLocalState("save")}/>
                    <Button title="Clear your board" variant="text" handleClick={e => handleLocalState("delete")}/>
                </div>
            </header>

            <main>
                <div className="tasks-list-wrapper">
                    <List title="To do" data={taskData.start}/> 
                    <List title="In progress..." data={taskData.inProgress}/>
                    <List title="Completed" data={taskData.completed}/>
                </div> 
            </main> 
        </>
    )
};

export default Tasks;