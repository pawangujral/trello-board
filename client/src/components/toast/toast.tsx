import React from "react";
import "./toast.css";

const Toast: React.FC<{message: string, variant?: string}> = ({message, variant = "default"}) => {
    return <p className={`toast ${variant}`}>{message}</p>
};

export default Toast;