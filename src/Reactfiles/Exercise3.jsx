
import { useState} from 'react'

function Exercise3(){

    const [isVisible, setIsVisible] = useState(false);

    const toggle = ()=> {
        setIsVisible(!isVisible)
    }

    return(

        <>
        <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}Message</button>
        {isVisible && <p>This is taggable Message..</p>}

        
        </>

        
    )

}

export default Exercise3;


