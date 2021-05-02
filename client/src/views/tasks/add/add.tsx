import React from "react";
import Input from "./../../../components/forms/input";
import Select from "./../../../components/forms/select";
import Button from "./../../../components/button";
import {taskType, contextType} from "./../../../utils/types";
import {TaskContext} from "./../../../context/taskContext/taskStore";
import {useParams, useHistory} from "react-router-dom";
import "./add.css";

const categoryValues = ["start", "inProgress", "completed"];
const tagsValues = ["designer", "developer", "QA", "devOps"];
 
const Add: React.FC = () => {
    let { id } = useParams() as any; 
    const history = useHistory() as any;
    const {tasks} = React.useContext<contextType>(TaskContext);

    const {handleTaskData, deleteTask} = React.useContext<contextType>(TaskContext);
    const [formState, setFormState] = React.useState<taskType>({
        id: null,
        title: "",
        description: "",
        tags: "",
        createDate: null,
        status: "" 
    });
    const [error, setError] = React.useState<boolean>(false);


    React.useEffect(() => {
        if(id) {
            console.log(id);
            console.log(tasks);
            // const updatedTasks = tasks.filter(task => task.id === id);
            // console.log(updatedTasks);
            // setFormState({...updatedTasks[0]});
        }
    },[])


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
         if(handleTaskData) {
              const isSuccess = handleTaskData(formState);
              if(isSuccess) {
                history.push("/task"); 
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
                <div className="button-group"></div>
            </header>

            <main>
                <div className="form-modal" tabIndex={1}> 
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
            </main>

        </>
      
    )
};

export default Add;

