import { useState } from "react";

const FormValidation = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isChecked, setIschecked] = useState(false);
  const [selectOption, setSelectOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("please check the box");
      return;
    }

    if (userName == "") {
      alert("please Enter username");
      return;
    }

    if (email.trim() == "") {
      alert("pls enter email");
      return;
    }

    if (password == "") {
      alert("pls enter password");
      return;
    }
    console.log(isChecked, userName, email, password, selectOption);

    setEmail("");
    setSelectOption("");
    setUserName("");
    setpassword("");
  };

  const handleCheckbox = (e) => {
    setIschecked(e.target.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username :</label>
      <br></br>
      <input
        type="text"
        name="name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br></br>
      <label>Email: </label>
      <br></br>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <label>password:</label>
      <br></br>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />

      <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />

      <select
        value={selectOption}
        onChange={(e) => setSelectOption(e.target.value)}
      >
        <option>select</option>
        <option value="option 1">option 1</option>
        <option value="option 2">option 2</option>
        <option value="option 3">option 3</option>
      </select>
      <br></br>

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default FormValidation;
