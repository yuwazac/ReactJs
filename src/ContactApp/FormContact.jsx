import { useState, useContext } from 'react';
import Context from './Context';
import styles from './app.module.css'


const FormContact = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { dispatch } = useContext(Context);

  const handleAdd = (e) => {
    e.preventDefault(); 
    if (text.trim()) {
      const newContact = {
        id: Date.now(),
        text,
        email,
        phone,
        favorite: false
      };
      dispatch({ type: 'add', payload: newContact });
      setText('');
      setEmail('');
      setPhone('');
    }
  };

  return (
    <div className={styles.appContainer}>
      <form onSubmit={handleAdd}>
        <h3 >Add New Contact</h3>
        <label>Name:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        /><br />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /><br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormContact;
