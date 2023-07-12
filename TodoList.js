import React from 'react'

const TodoList = ({todos,handleEdit,handleDelete}) => {
  return (
    <ul className='Alltodos'>
    {todos.map((t) =>(

    
    <li className='lists'>
      <span className='todotask' key={t.id}>{t.todo}</span>
    
      <button className='button' onClick={() =>handleEdit(t.id)}>Edit</button>
      <button className='button' onClick={()=>handleDelete(t.id)}>Delete</button>
    </li>
   ))}
  </ul>
  )
}

export default TodoList