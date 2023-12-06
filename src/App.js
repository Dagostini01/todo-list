import React, {useState} from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([])

  const onNewTodo = (value) => {
    setTodos([...todos,{id: new Date().getTime(), title: value, checked: false}])
  }

  const onRemove = (elemento) => {
    setTodos(
    todos.filter((obj) => obj.id !== elemento.id)
  )}

  const onToggle = (elemento) => {
    setTodos(
      todos.map((obj) =>
        obj.id === elemento.id ? {...obj, checked: !elemento.checked} : obj
      )
    )
  }

  return(
    <section id='app' className='container'>

      <header>
        <h1 className='title'>todo</h1>
      </header>

      <section className='main'>
        <NewTodo onNewTodo={onNewTodo}/>
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
      </section>

    </section>
  );
};

export default App;