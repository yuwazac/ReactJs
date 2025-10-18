import React from "react";
import UseForm from "./UseForm.jsx"; // Assuming UseForm is properly implemented

 const ContactForm = () => {
  const { values, handleChange } = UseForm({
    username: "",
    email: "",
    message: "",
});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data')
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="username"  // Name must match the key in `UseForm`
          value={values.username}  // Use values from `UseForm`
          onChange={handleChange}  // Handle input change using `handleChange`
          placeholder="Enter Name"
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"  // Name must match the key in `UseForm`
          value={values.email}  // Use values from `UseForm`
          onChange={handleChange}  // Handle input change using `handleChange`
          placeholder="Enter Email"
        />
        <br />

        <label>Message:</label>
        <textarea
          name="message"  // Name must match the key in `UseForm`
          value={values.message}  // Use values from `UseForm`
          onChange={handleChange}  // Handle input change using `handleChange`
          placeholder="Enter your message"
        />
        <br />

        <button type="submit">Submit</button>
      </form>
      <p>{values}</p>
    </>
  );
};

export default  ContactForm;
