import React from "react";
import Input from "./../../../components/forms/input";
import Select from "./../../../components/forms/select";
import Button from "./../../../components/button";
import {taskType} from "./../../../utils/types";
import {TaskContext} from "./../../../context/taskContext/taskStore";
import "./add.css";

const categoryValues = ["start", "inProgress", "completed"];
const tagsValues = ["designer", "developer", "QA", "devOps"];

interface addProps {
    handleModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
    preFill: taskType;
}

const Add: React.FC<addProps> = ({handleModal, preFill}: addProps) => {
    const context = React.useContext(TaskContext);
    const [formState, setFormState] = React.useState<taskType>(preFill);
    const [error, setError] = React.useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(context);
        // Check if any of field is empty
        for(let [key, value] of Object.entries(formState)) {
            // console.log(key, value);
            if(value === "") {
                setError(true);
                return false;
            }
        }
        setError(false);
        // addTask(formState);
    }

    const handleChange = (event: React.ChangeEvent<{ value: unknown, name: string }>) => {
        const {name, value} = event.target;
        setFormState(prevState => ({...prevState, [name]:value }))
    }

    return (
        <div className="form-modal">
            <h2>What you've in mind today?</h2>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="title" placeholder="Title" label="title" value={formState.title} onChange={handleChange}/>
                <Input type="text" name="description" placeholder="Description" label="description" value={formState.description}  onChange={handleChange}/>
                <Select label="Tags" name="tags" options={tagsValues} value={formState.tags}  onChange={handleChange}/>
                {/* <Input type="date" name="dueDate" label="due date" value={formState.dueDate}  onChange={handleChange}/> */}
                <Select label="category" name="status" options={categoryValues}  value={formState.status}  onChange={handleChange}/>
                {error && <p className="error">* All fields are required</p>}
                <div className="form-actions">
                    <Button title="Save"/>
                    <Button title="Close" handleClick={handleModal}/>
                </div>
               
            </form>
        </div>
    )
};

export default Add;

