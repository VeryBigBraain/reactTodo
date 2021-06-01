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
            <div className={`todo ${todo.find} ${todo.display}`} key={todo.id} id={todo.id}>
                <div className={"content"} id={`${todo.type}`}>{todo.content}</div>
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