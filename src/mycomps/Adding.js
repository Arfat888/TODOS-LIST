import React, { useState } from 'react';

export const Adding = ({ addtodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Please enter a title and description");
            return;
        } else {
            addtodo(title, desc);
            setTitle(""); 
            setDescription("");
        }
    } // Closing curly brace for submit function

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="my-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        id="title"
                        aria-describedby="titleHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        id="desc"
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    );
}

export default Adding;
