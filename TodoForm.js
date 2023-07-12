import React from 'react'

const TodoForm = ({handleSubmit,todo, editid, setTodo}) => {
  return (
    <form className='Todoform'onSubmit={handleSubmit}>
    <input className='input' 
    type='text' value={todo} onChange={(e) =>setTodo(e.target.value)}/>
    <button className='button' type='submit'>{editid? 'edit' : 'GO'}</button>
  </form>
  )
}

export default TodoForm