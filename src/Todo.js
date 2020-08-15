import React from "react";
import "./Todo.css"

export default function (props) {
    return(
        <div className="card">
            <h2>{`text: ${props.todo.text}`}</h2>
            <h2>{`priority: ${props.todo.priority}`}</h2>
            <h2>{`dueDate: ${props.todo.dueDate}`}</h2>
        </div>
    )
}
