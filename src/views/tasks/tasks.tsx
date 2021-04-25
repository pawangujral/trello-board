import React from "react";
import List from "./list";

const Tasks: React.FC = () => {
    return (
        <div>
            <div className="titleBar">
                <h1>My Tasks</h1>
                <button>add task</button>
            </div>

            <main>
                <div>
                    <List/> 
                    <List/>
                    <List/>
                </div>
            </main>
        </div>
    )
};

export default Tasks;