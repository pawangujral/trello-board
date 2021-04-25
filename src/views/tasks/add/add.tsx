import React from "react";
import Input from "./../../../components/forms/input";
import Select from "./../../../components/forms/select";
import Button from "./../../../components/button";
import "./add.css";

const Add: React.FC = () => {
    return (
        <form>
            <Input type="text" placeholder="Title"/>
            <Input type="text" placeholder="Description"/>
            <Select/>
            <Input type="date"/>
            <Select/>
            <Button title="Save"/>
        </form>
    )
};

export default Add;

