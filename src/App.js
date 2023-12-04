import React, {useState} from 'react';
import {MdDelete} from 'react-icons/md';
import './App.css';

const App = () => {

  const initialTodos = [
    { id: 1, title: "Estudar React", checked: false},
    { id: 2, title: "Estudar Inglês", checked: true},
    { id: 3, title: "Estudar guitarra", checked: false},
  ]

  const [todos] = useState(initialTodos)
  const[value, setValue] = useState("")

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onKeyDown = (event) => {
    if(event.which === 13) {
      console.log(event.target.value)
      setValue("")
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
                <span>{todo.title}</span>
                <button type="button">
                  ca
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
