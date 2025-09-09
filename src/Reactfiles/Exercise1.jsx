
import { useState } from "react";


export const UserCard = ({email, name, age }) => {
    return(

        <>
          <h1> Hello My Name Is : {name}</h1>
          <p>My Email Is : {email}</p>
          <span>Age Is : {age}</span>
        </>
       
    
    )
}

export default UserCard;