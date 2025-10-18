import { useContext, useState } from 'react';
import Context from './Context';

const ContactItem = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedContact, setEditedContact] = useState({
    text: todo.text,
    email: todo.email,
    phone: todo.phone
  });

  const { dispatch } = useContext(Context);

  const toggleFavorite = () => {
    dispatch({ type: 'toggleFavorite', payload: todo.id });
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
   
    dispatch({
      type: 'edit',
      payload: {
        id: todo.id,
        text: editedContact.text,
        email: editedContact.email,
        phone: editedContact.phone
      }
    });
    setIsEdit(false); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <li style={{ marginBottom: '10px' }}>
      {isEdit ? (
        <>
          <h3>Edit Contact</h3>
          <p>
            Name: <input name="text" value={editedContact.text} onChange={handleChange} />
          </p>
          <p>
            Email: <input name="email" value={editedContact.email} onChange={handleChange} />
          </p>
          <p>
            Phone: <input name="phone" value={editedContact.phone} onChange={handleChange} />
          </p>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEdit(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{todo.text}</h3>
          <p>Email: {todo.email}</p>
          <p>Phone: {todo.phone}</p>
          <button onClick={() => dispatch({ type: 'delete', payload: todo.id })}>Delete</button>
          <button
            onClick={toggleFavorite}
            style={{
              cursor: 'pointer',
              fontSize: '1rem',
              color: todo.favorite ? '#088126ff' : '#333',
              transition: 'color 0.3s ease',
              marginRight: '5px'
            }}
          >
            {todo.favorite ? 'Favorited★' : 'Favorite☆'}
          </button>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </li>
  );
};

export default ContactItem;
