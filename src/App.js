import React, {useState} from 'react';
import {MdDelete} from 'react-icons/md';
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([])
  const[value, setValue] = useState("")

  const onToggle = (elemento) => {
    setTodos(
      todos.map((obj) =>
        obj.id === elemento.id ? {...obj, checked: !elemento.checked} : obj
      )
    )
  }

  const submit = () => {
    setTodos([...todos,{id: new Date().getTime(), title: value, checked: false}])
    setValue("")
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onKeyDown = (event) => {
    if(event.which === 13) {
      submit()
    } else if (event.which === 27) {
      setValue("")
    }
  }

  return(
    <section id='app' className='container'>

      <header>
        <h1 className='title'>todo</h1>
      </header>

      <section className='main'>
        <input
        className='new-todo'
        placeholder='O que precisa ser feito?'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        />
        <ul className="todo-list">
          {
            todos.map((todo) => (
              <li key={todo.id.toString()}>
                <span 
                  className= {["todo", todo.checked ? "checked" : ""].join(" ")}
                  onClick={ () => onToggle(todo) }
                  onKeyPress={() => onToggle(todo)}
                  role='button'
                  tabIndex={0}
                  >{todo.title}</span>
                <button type="button" aria-label="Excluir item" className='remove'>
                  <MdDelete size={28} />
                </button>
              </li>
            ))
          }
        </ul>
      </section>

    </section>
  );
};



export default App;
