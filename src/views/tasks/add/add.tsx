import React from "react";
import Input from "./../../../components/forms/input";
import Select from "./../../../components/forms/select";
import Button from "./../../../components/button";
import "./add.css";

const categoryValues = ["start", "in-progress", "completed"];
const tagsValues = ["designer", "developer", "QA", "devOps"];

const Add: React.FC = () => {
    return (
        <div className="form-modal">
            <h2>What you've in mind today?</h2>
            <form>
                <Input type="text" placeholder="Title" label="title"/>
                <Input type="text" placeholder="Description" label="description"/>
                <Select label="Tags" options={tagsValues}/>
                <Input type="date" label="due date"/>
                <Select label="category" options={categoryValues}/>
                <div className="form-actions">
                    <Button title="Save"/>
                    <Button title="Close"/>
                </div>
               
            </form>
        </div>
    )
};

export default Add;

