import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FindTodo from './components/FindTodo';
import Context from "./components/Context";

function App() {
  /// Create context
  //State
  const [state, setState] = useState({
    todos: [
      {id: 1, content: 'buy some food', type: 'completed', display: '', find: ''},
      {id: 2, content: 'eat some chicken...', type: 'uncompleted', display: '', find: ''},
    ],
  });
  const [selectState, setSelectState] = useState({
    type: "all"
  })
  // Context value
  const value = {
    todosState: [state, setState],
    selectTodo: [selectState, setSelectState],
  };
  //Functions
  const addTodo = todo => {
    if (todo.content !== '') {
      todo.id = Math.random() * 10;
      todo.type = 'uncompleted';
      const todos = ([...state.todos, todo]);
      setState({...state, todos});
    } else {
      return null;
    }
  }
  // Filter todos
  useEffect(() => {
    filterTodo();
  }, [selectState]);

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
  
  const filterTodo = () => {
    const todos = state.todos;

    todos.forEach(todo => {
      switch (selectState.type) {

        case 'completed':
          if (todo.type === 'completed') {
            todo.display = '';
          } else {
            todo.display = 'hide';
          } 
          break;

        case 'uncompleted':
          if (todo.type !== 'completed') {
            todo.display = '';
          } else {
            todo.display = 'hide';
          } 
          break;
        default:
          todo.display = '';
        }
    });

    setState({...state, todos});
  }

  return (
    <div className="App">
      <Context.Provider value={value}>
        <FindTodo todos={state.todos} filterTodo={filterTodo} />
        <AddTodo todos={state.todos} addTodo={addTodo} />
        <TodoList todos={state.todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
      </Context.Provider>
    </div>
  );
}

export default App;
