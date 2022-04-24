import { useState } from "react";

function Button (){

    let [count ,setCount] = useState(0);
  const handleInc = (mul) =>{
      setCount((previous)=>previous+mul 
      );
  }

      const handledec = (mul)=>{
        //   console.log("aman")
        setCount(count-mul)
      };
//     const handledec = (mul) =>{
//         setCount((previous)=>previous+mul 
//         );
//   };


    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>handleInc(2)}>inc</button>
        <button onClick={()=>handledec(2)}>dec</button>

        </>
    )
}

export default Button