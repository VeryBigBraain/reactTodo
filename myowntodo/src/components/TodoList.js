import React from 'react';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
    //Functions
    const handleDelete = id => {
        deleteTodo(id);
    }

    const handleComplete = id => {
        completeTodo(id);
    }
    //Todo List
    const todoList = todos.map(todo => {
        return (
            <div className="todo" key={todo.id} id={todo.id}>
                <div className={`content ${todo.display}`} id={`${todo.type}`}>{todo.content}</div>
                <div className="buttons">
                    <button onClick={() => {handleComplete(todo.id)} } className="complete-btn">
                        <i className="gg-check-o"></i>
                    </button>
                    <button onClick={() => {handleDelete(todo.id)} } className="trash-btn">
                        <i className="gg-trash-empty"></i>
                    </button>
                </div>
            </div>
        )
    });
    
    return (
        <div className="todo-container">
            <div className="todo-list">{todoList}</div>
        </div>
    )
}

export default TodoList;