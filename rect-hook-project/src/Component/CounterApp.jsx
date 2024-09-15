import React from "react";
import { useState } from "react";






 // function CounterApp(){

//     let [counter, setcounter] = useState(0);
//     // let counter = 0;
// // add value
//     const addValue = () =>{
//         console.log("clicked", counter);
//         // counter = counter + 1; 
//         counter = counter + 1;
//         if(counter <= 20){
//             return setcounter(counter)
//          } 
//         // setcounter(counter + 1)
        
      
          
       
      
//     }


//     // remove value
//     const removeValue = () =>{
//         counter = counter - 1;
//         if(counter >= 0){
//         return setcounter(counter);
//         }
//     }

//     return(
//         <>
//         <h1>Counter App</h1>
//         <h2>Counter Value : {counter}</h2>

//         <button onClick={addValue}>Add Value</button><br /> <br />
//         <button onClick={removeValue}>Remove Value</button>
//         <p>counte : {counter} </p>
//         </>
//     )
// }

// export default CounterApp; 


function CounterApp(){

    let [counter, setcounter] = useState(0)

    const addValue = () =>{
        counter = counter + 1;
        if(counter <= 20){
            return setcounter(counter)
        }
        
    }


    // remove value
    const removeValue = () =>{
        counter = counter -1; 
        if(counter >=0){
            return setcounter(counter)
        }
        
    }

    return (
        <>
        <h1>Conter App</h1>
        <h2>Counter Value : {counter} </h2>
        <button onClick={addValue}>Add Value</button><br /><br />
        <button onClick={removeValue}>Remove Value</button>
        </>
    )
}

export default CounterApp; 


