import React from "react";
import List from "./list";
// import Add from "./add";
import Button from "./../../components/button";
import "./tasks.css";

const Tasks: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="title-bar">
                <h1>My Tasks</h1>
                <Button title="add task"/>
            </div>

            <main>
                <div className="tasks-list-wrapper">
                    <List title="To do"/> 
                    <List title="In progress..."/>
                    <List title="Completed"/>
                </div>
                {/* <Add/> */}
            </main>
        </div>
    )
};

export default Tasks;