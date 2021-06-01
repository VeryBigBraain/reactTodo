import React, { useState, useContext } from 'react';
import Context from "./Context";

const AddTodo = ({ addTodo, filterTodo }) => {
    const { todosState, selectTodo } = useContext(Context);
    const [selectState, setSelectState] = selectTodo;

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
        setSelectState({type: e.target.value});
    }

    //Add Todo Form
    return (
        <div className="add-todo">
            <div className="add-todo__header">
                <h1>Your Todo's</h1>
            </div>
            <div className="add-todo__form-container">
                <form className="add-todo__form" onSubmit={handleSubmit}>
                <div className="add-todo__form-label">
                    <label className="add-label">Add new todo:</label>
                </div>
                <div className="add-todo__form-content">
                    <input className="add-input" type="text" id="add-todo" name="add-todo" onChange={handleChange} value={state.content} />
                    <button type="submit" className="add-btn"><i className="gg-add-r"></i></button>
                    <select name="todos" className="select-todo" onChange={handleSelect}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                </form>
            </div>
        </div>
    )
}

export default AddTodo;