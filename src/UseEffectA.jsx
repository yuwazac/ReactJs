

import {useEffect, useState} from 'react'

const UseEffectA = ()=>{

    const [title, setTitle] = useState("Welcome")
    const [name, setName] = useState("")


 useEffect(() => {
    document.title = `${title} ${name}`;
  }, [title, name]);


    return(
        <div>
            <h1>Name of title </h1>
            <input type="text"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}

                
            />

             <h1>choose greeting </h1>
                <input type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

            <div>
               
            </div>
        </div>
    )
}

export default UseEffectA;

