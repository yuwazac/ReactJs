import {useContext} from 'react'
import Context from './Context'
import  ContactItem  from './ContactItem'

 const ContactList = () => {
    const { state } = useContext(Context)
  return (
   <ul>
    {state.map((todo)=>(
        <ContactItem key={todo.id} todo={todo}/>
    ))}
   </ul>
  );
};

export default ContactList;
