import { useState } from "react"
import {nanoid} from "nanoid"
import TodoItem from "./TodoITEM"


const TodoLi = ()=> {
    const [task,setTask] = useState("");
    const [todo,setTodo] = useState([]);
     
    const handleChange = (e)=>{

        
        setTask(e.target.value);
        // console.log(task,"aman")
    }
    const handleClick = ()=>{
         let taskObj ={
          title : task,
          statue : false,
          id:nanoid(),
         };
        // console.log(task,"aman")
        setTodo([taskObj,...todo]);
    };

    return (
         <>
        <h1>TO-DO</h1>
        <input type="text" value={task} placeholder="enter name" onChange={handleChange}/>
        <button onClick = {handleClick}>Add Todo</button>
        {todo.map(item => { 
            //   return <h1 key ={item.id}>{item.title}</h1>
          return <TodoItem key ={item.id} item = {item}/>;
          
              
            })
            }
        </>

    );
}
export default TodoLi;