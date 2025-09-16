 import {useState } from 'react'

 function Exercise4(){

    const [IsOn, setIsOn] = useState(true);
const toggle = ()=>{
    setIsOn(!IsOn)
}
    return(
        <>
        <p>Turn {IsOn ? 'Of' : 'On'}</p>
        <button onClick={toggle}>  
       Turn {IsOn ? 'Of' : 'On'}</button>
        </>

        // 
    )
 }

 export default Exercise4;