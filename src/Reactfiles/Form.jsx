import { useState} from 'react'



function Form(){

    const [name, setName] = useState("")
    const handleChange = (event)=>{
        setName(event.target.value)

    }
    return(
        <>
            <input type="text" value={name} onChange={handleChange}/>
            <p>Hello,{name} </p>
        </>
    )
}

export default Form;