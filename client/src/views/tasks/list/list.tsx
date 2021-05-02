import React from "react";
import Card from "./../../../components/card";
import {taskType} from "./../../../utils/types";
import "./list.css"

interface listProps {
    title: string;
    data: taskType[]; 
}

const List: React.FC<listProps> = ({title, data}: listProps) => {
    return (
        <div className="list-wrapper">
            <h2>{title}</h2> 
            <div className="list-area">
                {data.length ?  <Card data={data}/> : <p>Nothing to see here. Try adding some tasks.</p>}
            </div> 
        </div>
    )
};

export default List;