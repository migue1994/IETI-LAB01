import React, {useState} from "react";
import TodoList from "./TodoList";
import "./TodoAppCss.css"

export default function TodoApp() {
    const [item, setItem] = useState(undefined);
    const [items, setItems] = useState([]);

    function handleChange(event) {
        setItem({...item, [event.target.name]: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!item) {
            return null;
        }
        const it = {
            text: item.text,
            priority: item.priority,
            dueDate: new Date()
        }
        setItems(prevState => items.concat(it));
        setItem(null);
    }

    return (
        <div className="background">
            <TodoList todos={items}/>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h3>TODO</h3>
                    <div className="block">
                        <div className={"labelData"}>
                            <label>text:</label>
                        </div>
                        <div className={"inputData"}>
                            <input
                                name={'text'}
                                value={item && item.text ? item.text : ''}
                                type="text"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="block">
                        <div className="labelData">
                            <label>priority:</label>
                        </div>
                        <div className={"inputData"}>
                            <input
                                name={'priority'}
                                value={item && item.priority ? item.priority : ''}
                                type="text"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                    >
                        Add #{items.length + 1}
                    </button>
                </form>
            </div>
        </div>
    )
}
