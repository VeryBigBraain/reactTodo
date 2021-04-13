import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FindTodo from './components/FindTodo';
// sss
function App() {
  //State
  const [state, setState] = useState({
    todos: [
      {id: 1, content: 'buy some food', type: 'completed'},
      {id: 2, content: 'eat some chicken...', type: 'uncompleted'}
    ],
    select: "all"
  });
  //Functions
  const addTodo = todo => {
    if (todo.content !== '') {
      todo.id = Math.random() * 10;
      todo.type = 'uncompleted';
      const todos = ([...state.todos, todo]);
      setState({...state,todos: todos});
    } else {
      return null;
    }
  }

  const completeTodo = id => {
    const todos = state.todos.map(todo => {
      if (todo.id === id) { todo.type = todo.type === 'completed' ? 'uncompleted' : 'completed' };
      return todo;
    })
    setState({...state,todos: todos});
  }

  const deleteTodo = id => { 
    const todos = state.todos.filter(todo => {
      return todo.id !== id;
    })
    setState({...state,todos: todos});
  }
  
  const filterTodo = (valueOfSelect, todo) => {
      const todoNode = document.getElementById(todo.id);

      switch (valueOfSelect) {

        case 'completed':
          if (todo.type === 'completed') {
            todoNode.style.display = 'flex';
          } else {
            todoNode.style.display = 'none';
          } 
          break;

        case 'uncompleted':
          if (todo.type !== 'completed') {
            todoNode.style.display = 'flex';
          } else {
            todoNode.style.display = 'none';
          } 
          break;
        default:
          todoNode.style.display = 'flex';
        }
        setState({...state,select: valueOfSelect});
  }

  return (
    <div className="App">
      <FindTodo todos={state.todos} filterTodo={filterTodo} />
      <AddTodo todos={state.todos, state.select} addTodo={addTodo} filterTodo={filterTodo} />
      <TodoList todos={state.todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </div>
  );
}

export default App;
