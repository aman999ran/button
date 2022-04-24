// import React from "react";
import React ,{useEffect, useState} from "react";

export const Counter =()=>{

    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    useEffect(()=>{
        console.log("aman")
        return()=>{
            console.log("hero")
        }
    },[count])

    
    return(
        <div>
            <h1>
                counter : {count} :  {count2 }
            </h1>
            <div>
                <button onClick = {()=> setCount(count+1)}>Increment</button>
                <button onClick = {()=> setCount(count-1)}>DECrement</button>
            </div>
            <div>
                <button onClick = {()=> setCount2(count2+1)}>Increment</button>
                <button onClick = {()=> setCount2(count2-1)}>DECrement</button>
            </div> 
        </div>
    );
};

