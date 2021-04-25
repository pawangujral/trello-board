import React from "react";
import {taskType} from "./../../utils/types";
import moment from "moment";
import Button from "./../button";
import "./card.css";

interface cardProps {
    data: taskType[];
    handleEdit:  (event: React.MouseEvent<HTMLButtonElement>, data: any) => void;
}

const Card: React.FC<cardProps> = ({data, handleEdit}: cardProps) => {
    return (
        <>
             {
                 data.map(tasks => {
                    return (
                        <div className="card" key={tasks.id} data-id={tasks.id}>
                           <p className="card-header">
                               <span className="card-tags">{tasks.tags}</span>
                               <Button title="Edit" variant="text" handleClick={e => handleEdit(e,tasks)}/>
                            </p>
                           <h3>{tasks.title}</h3>
                           <p>{tasks.description}</p>
                           <p className="card-date">Created on: <span>{moment(tasks.createDate).startOf('hour').fromNow()}</span></p>
                       </div>
                    )
                })
             }
        </>
    )
};

export default Card;