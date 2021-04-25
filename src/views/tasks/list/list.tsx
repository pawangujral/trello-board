import React from "react";
import Card from "./../../../components/card";
import "./list.css"

interface listProps {
    title: string;
}

const List: React.FC<listProps> = ({title}: listProps) => {

    return (
        <div className="list-wrapper">
            <h2>{title}</h2> 
            <div className="list-area">
                <Card/>
            </div>
        </div>
    )
};

export default List;