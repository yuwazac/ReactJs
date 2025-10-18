import { useState } from "react";
// import {ContactForm} from "./ContactForm";

const UseForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

 
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value, 
    }));
   
  };

  return { values, handleChange };
};

export default UseForm;
