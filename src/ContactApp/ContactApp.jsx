// ContactApp.js
import { useReducer } from 'react';
import Context from './Context';
import { reducer, initialState } from './reducer';
import FormContact from './FormContact';
import ContactList from './ContactList';

const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div>
        <h1>Contact Management App</h1>
        <FormContact />
        <ContactList />
      </div>
    </Context.Provider>
  );
};

export default ContactApp;
