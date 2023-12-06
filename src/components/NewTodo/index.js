import React, {useState} from 'react';
import PropTypes from 'prop-types';

const NewTodo = ({onNewTodo}) => {

    const[value, setValue] = useState("")

    const submit = () => {
        if(onNewTodo){
            onNewTodo(value)
            setValue("")
        }
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

    return (
        <input
            className='new-todo'
            placeholder='O que precisa ser feito?'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}

export default NewTodo
