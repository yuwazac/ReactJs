
// import Count from './Exercise.jsx'

import { useState} from 'react'

function Exercise2(){

    const [Count, setCount] = useState(0);
    
      
          const increment = ()=>
      {
        setCount(Count + 1);

        console.log(Count)
      }    
    
        return (
          <>

  
    {/* <UserCard   
    
    name={"Jeo Dell"}
    email={"jeo@gmail.com"}
    age={25}
    />
    

   <>
   <UserCard 
   name={"Abdi"}
   email={"abdi@yahoo.com"}
   age={28}
   />
   </>
   <>
   <UserCard 
   name={"ahmed"}
   email={"ahmed@hotmail.com"}
   age={50}
   />
   </> */}

         <>
            <p>You Clicked {Count} Times</p>
            <button onClick={increment}>Clicked Me</button>
        </>

      

    </>
   
    
   
  )
}

export default Exercise2;