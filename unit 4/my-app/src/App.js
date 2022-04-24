// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with me in 10 days
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

// import Input from "./day2/Input"
// import Button from "./day2/Button"
// import List from "./Day1/List";
import "./App.css";
// import TodoList from "./Day3/todo";
// import Edetails from "./day2/Empoye";
// import Today from "./day2/todo";
// import TodoLi from "./Day3/tod o";
// import React from "react";
import React ,{useState} from "react";
import { Counter } from "./Day4/counter";
function App(){
  
   const [showCounter,setshowCounter]= useState(true);
  return (
    <>
   <div className="App">
    <h1 className="header">Student Form</h1>
   

    <button onClick={()=> setshowCounter(!showCounter)}>
    {showCounter ? "Hide" : "SHOW"}
    </button>


{showCounter &&  <Counter />}
    </div>
    </>

  )

}
export default App

