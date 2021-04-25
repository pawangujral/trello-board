import React from "react";
import "./card.css";

const Card: React.FC = () => {
    return (
        <div className="card">
            <p className="card-tags"><span>Tags</span></p>
            <h3>title</h3>
            <p>Description</p>
            <p className="card-date">Due: <span>Feb 2020</span></p>
        </div>
    )
};

export default Card;