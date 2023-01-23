import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from './../Services/actions/todosAction';

const Todos = () => {

    const {isLoading,todos,error} = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllTodos());
    }, [])
    
  return (
    <>
     <h2>Todos</h2>
    { isLoading && <h3>Loading...</h3>}
    { error && <h3>{error}</h3>}
    <section>
        {todos && todos.map((todo)=>{
        return <li key={todo.id}>{todo.title}</li>
        })}
    </section>
    </>
   
  )
}

export default Todos