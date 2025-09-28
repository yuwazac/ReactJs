import { useState } from "react";

const LogInForm = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [message, setMessage] = useState("");

  const toggle = () => {
    if (userName == "abdi" && inputPassword == 123456) {
      setMessage(`Welcome Back! ${userName}`);
      setIsLogIn(true);
    } else {
      setMessage("Please Login");
      setIsLogIn(false);
    }

    setInputPassword("");
    setUserName("");
  };

  const refund = () => {
    setIsLogIn(false);
  };

  return (
    <div>
      {!isLogIn ? (
        <div>
          <form>
            <h1>LogIn</h1>
            <label>Username:</label>
            <input
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label>Password:</label>
            <input
              type="password"
              required
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </form>
          <button onClick={toggle}>Login</button>
        </div>
      ) : (
        <div>
          <strong>{message}</strong><br></br>
          <button onClick={refund}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LogInForm;
