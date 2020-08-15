import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
    return(
        <div>
            <h1>Todo React App</h1>
            {props.todos.map((todo,index) => (
                <Todo key={index} todo={todo}/>
            ))}
        </div>
    )
}
