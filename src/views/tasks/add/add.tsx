import React from "react";
import Input from "./../../../components/forms/input";
import Select from "./../../../components/forms/select";
import Button from "./../../../components/button";
import {taskType, contextType} from "./../../../utils/types";
import {TaskContext} from "./../../../context/taskContext/taskStore";
import "./add.css";

const categoryValues = ["start", "inProgress", "completed"];
const tagsValues = ["designer", "developer", "QA", "devOps"];

interface addProps {
    handleModal: (open: boolean) => void;
    preFill: taskType;
}

const Add: React.FC<addProps> = ({handleModal, preFill}: addProps) => {
    const {handleTaskData, deleteTask} = React.useContext<contextType>(TaskContext);
    const [formState, setFormState] = React.useState<taskType>(preFill);
    const [error, setError] = React.useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Check if any of field is empty
        for(let [key, value] of Object.entries(formState)) {
            if(value === "") {
                setError(true);
                return false;
            }
        }
        setError(false);
        handleTaskData && handleTaskData(formState);
        handleModal(false);
    }

    const handleChange = (event: React.ChangeEvent<{ value: unknown, name: string }>) => {
        const {name, value} = event.target;
        setFormState(prevState => ({...prevState, [name]:value }))
    }

    const handleDelete = () => {
        if(formState.id) {
            deleteTask && deleteTask(formState.id);
            handleModal(false);
        }   
    }

    return (
        <div className="form-modal">
            <div className="form-header">
                <h2>What you've in mind today?</h2>
                <Button title="X" variant="icon" handleClick={e => handleModal(false)}/>
            </div>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="title" placeholder="Title" label="title*" value={formState.title} onChange={handleChange}/>
                <Input type="text" name="description" placeholder="Description" label="description*" value={formState.description}  onChange={handleChange}/>
                <Select label="Tags*" name="tags" options={tagsValues} value={formState.tags}  onChange={handleChange}/>
                <Select label="category*" name="status" options={categoryValues}  value={formState.status}  onChange={handleChange}/>
                {error && <p className="error">* All fields are required</p>}
                <div className="form-actions">
                    <Button title="Save" type="submit"/>
                    {formState.id && <Button title="Delete" variant="text" handleClick={handleDelete}/>}         
                </div>
               
            </form>
        </div>
    )
};

export default Add;

