import React, { useState, useContext, useEffect } from 'react';
import Context from './Context';

const FindTodo = ({ todos, filterTodo }) => {
    const { todosState, selectTodo } = useContext(Context);

    const [state, setState] = todosState;
    const [findState, findSetState] = useState({
        content: ''
    })
    //Functions
    const handleChange = (e) => {
        findSetState({content: e.target.value});

        todos.forEach(todo => {
            if (todo.content.includes(e.target.value)) 
            {
                filterTodo();
                todo.find = '';
            } else {
                todo.find = 'not-find';
            }
        });
        setState({...state, todos});
    }

    const handleSubmit = e => {
        e.preventDefault();
        findSetState({content: ''});
    }

    return (
        <form className="find-form" onSubmit={handleSubmit}>
            <div className="search-todo">
                <input placeholder="Find your todo..." type="text"
                 name="searchTodo" onChange={handleChange} value={findState.content} />
            </div>
        </form>
    )
}

export default FindTodo;