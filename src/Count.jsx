import { useState } from "react";

const Count = ()=>{

    const [count, setCount] = useState(0)

    const increment = ()=>{
        setCount(count + 1)
    }
    const descrement = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    return(
        <div>
            <strong>Count: {count}</strong><br></br>
            <button onClick={descrement} disabled={count < 1}>Descrement</button>
            <button onClick={increment} >Increment</button>
        </div>
    )
}

export default Count;