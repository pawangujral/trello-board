import React from "react";
import Input from "./../../../components/forms/input";
import Select from "./../../../components/forms/select";
import Button from "./../../../components/button";
import {taskType, contextType} from "./../../../utils/types";
import {TaskContext} from "./../../../context/taskContext/taskStore";
import {useParams, useHistory} from "react-router-dom";
import useNotification from "./../../../hooks/useNotification";
import { FiTrash2, FiSave } from "react-icons/fi";
import {Link} from "react-router-dom";
import "./add.css";

const defaultState = {
    id: null,
    title: "",
    description: "",
    createDate: null,
    tags: "",
    status: ""
}

const categoryValues = ["start", "inProgress", "completed"];
const tagsValues = ["designer", "developer", "QA", "devOps"];
 
const Add: React.FC = () => {
    let { id } = useParams() as any; 
    const history = useHistory() as any;
    const {addToast} = useNotification();
    const {tasks} = React.useContext<contextType>(TaskContext);
    const {handleTaskData, deleteTask} = React.useContext<contextType>(TaskContext);
    const [formState, setFormState] = React.useState<taskType>(defaultState);


    React.useEffect(() => {
        if(id) { 
            if(tasks.length) { 
                const updatedTasks = tasks.filter(task => task.id !== id); 
                updatedTasks.length && setFormState({...updatedTasks[0]});
            }
        }
    },[tasks, id])


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Check if any of field is empty
        for(let [key, value] of Object.entries(formState)) {
            if(value === "") {
                addToast && addToast({message: "* All fields are required", variant: "warning"});
                return false;
            }
        }
         if(handleTaskData) {
              const isSuccess = handleTaskData(formState);
              if(isSuccess) {
                history.push("/task"); 
                addToast && addToast({message: "New task added", variant: "success"});
              } 
         }

       
    }

    const handleChange = (event: React.ChangeEvent<{ value: unknown, name: string }>) => {
        const {name, value} = event.target;
        setFormState(prevState => ({...prevState, [name]:value }));
    }

    const handleDelete = () => {
        if(formState.id) {
            deleteTask && deleteTask(formState.id); 
            history.push("/task");
        }   
    }

    return (
        <>
            <header>
                <div>
                    <h1>What you've in mind today?</h1> 
                </div>
                <div className="button-group">
                    <Link to="/task">Back to tasks</Link>
                </div>
            </header>

            <main>
                <div className="form-modal" tabIndex={1}> 
                    <form onSubmit={handleSubmit}>
                        <Input type="text" name="title" placeholder="Title" label="title*" value={formState.title} onChange={handleChange}/>
                        <Input type="text" name="description" placeholder="Description" label="description*" value={formState.description}  onChange={handleChange}/>
                        <Select label="Tags*" name="tags" options={tagsValues} value={formState.tags}  onChange={handleChange}/>
                        <Select label="category*" name="status" options={categoryValues}  value={formState.status}  onChange={handleChange}/>
                        <div className="form-actions">
                            <Button type="submit"><FiSave/> Save</Button>
                            {formState.id && <Button variant="text" handleClick={handleDelete}><FiTrash2/> Delete</Button>}         
                        </div>
                    
                    </form>
                </div>
            </main>

        </>
      
    )
};

export default Add;

