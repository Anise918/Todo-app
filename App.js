import React, { useCallback, useState } from 'react'
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

const App = () => {
  const[todo, setTodo] = useState('');
  const[todos,setTodos] = useState([]);
  const [editid, setEditid] = useState(0);

  const handleSubmit = (e) =>{
    e.preventDefault();
     if (editid) {
      const editTodo = todos.find((i)=> i.id===editid);
      const updatedTodos = todos.map((t)=>t.id===editTodo.id?[
        t ={id:t.id,todo}] :{id:t.id, todo: t.todo}
      );
     }
    
    if (todo !=='') {
      setTodos([{id: `${todo}${Date.now()}`, todo},...todos]);
      setTodo('');

  
    }

  };
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) =>to.id !==id);
    setTodos([...delTodo])
  };
  const handleEdit =(id) => {
    const editTodo = todos.find((i) => i.id=== id);
    setTodo(editTodo.todo);
    setEditid(id);
  }


  
  return (
    <div className='App'>
      <div className='container'>
        <h1>Todo List</h1>
       <TodoForm 
       handleSubmit ={handleSubmit} 
       todo ={todo} 
       setTodo ={setTodo} 
       editid = {editid}/>
       <TodoList 
       todos = {todos} 
       handleEdit ={handleEdit}
       handleDelete ={handleDelete}/>

       
      </div>
  
    </div>
  )
}

export default App