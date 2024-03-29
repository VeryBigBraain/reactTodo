import React, { useState } from 'react';

const AddTodo = ({ todos, addTodo, filterTodo }) => {
    const [state, setState] = useState({
        content: ''
    })
    //Functions
    const handleChange = e => {
        setState({content: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(state);
        setState({content: ''});
    }

    const handleSelect = e => {
        todos.forEach(todo => {
            filterTodo(e.target.value, todo);
        })
    }

    //Add Todo Form
    return (
        <div className="add-todo">
            <h1>Yours Todo's</h1>
            <form onSubmit={handleSubmit}>
                <label className="add-label">Add new todo:</label>
                <input className="add-input" type="text" id="add-todo" name="add-todo" onChange={handleChange} value={state.content} />
                <button type="submit" className="add-btn"><i className="gg-add-r"></i></button>
                <select name="todos" className="select-todo" onChange={handleSelect}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </form>
        </div>
    )
}

export default AddTodo;