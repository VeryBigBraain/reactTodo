import React, { useState } from 'react';

const FindTodo = ({ todos, filterTodo }) => {
    const [state, setState] = useState({
        content: ''
    })
    //Functions
    const handleChange = (e) => {
        const selectNode = document.querySelector('.select-todo');
        setState({content: e.target.value});

        todos.forEach(todo => {
            const todoNode = document.getElementById(todo.id);

            if (todo.content.includes(e.target.value)) 
            {
                filterTodo(selectNode.value, todo);
            } else {
                todoNode.style.display = 'none';
            }
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setState({content: ''});
    }

    return (
        <form className="find-form" onSubmit={handleSubmit}>
            <div className="search-todo">
                <input placeholder="Find your todo..." type="text"
                 name="searchTodo" onChange={handleChange} value={state.content} />
            </div>
        </form>
    )
}

export default FindTodo;