import React from "react";
import {taskType} from "./../../utils/types";
import moment from "moment";
import Button from "./../button";
import "./card.css";

interface cardProps {
    data: taskType[];
}

const Card: React.FC<cardProps> = ({data}: cardProps) => {
    return (
        <>
             {
                 data.map(tasks => {
                    return (
                        <div className="card" key={tasks.id} data-id={tasks.id}>
                           <p className="card-header">
                               <span className="card-tags">{tasks.tags}</span>
                               <Button title="Edit" variant="text"/>
                            </p>
                           <h3>{tasks.title}</h3>
                           <p>{tasks.description}</p>
                           <p className="card-date">Due: <span>{moment(tasks.dueDate).startOf('day').fromNow()}</span></p>
                       </div>
                    )
                })
             }
        </>
    )
};

export default Card;