// ContactApp.js
import { useReducer } from 'react';
import Context from './Context';
import { reducer, initialState } from './reducer';
import FormContact from './FormContact';
import ContactList from './ContactList';
import styles from './app.module.css';

const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div>
        <h1 className={styles.appContainer} >Contact Management App</h1>
        <FormContact />
        <ContactList />
      </div>
    </Context.Provider>
  );
};

export default ContactApp;
