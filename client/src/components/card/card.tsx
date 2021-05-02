import React from "react";
import {taskType} from "./../../utils/types";
import moment from "moment";
import Button from "./../button";
import {Link} from "react-router-dom";
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
                               <span className={`card-tags ${tasks.tags}`}>{tasks.tags}</span>
                               <Link to={`/task/edit/${tasks.id}`}>Edit</Link>
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