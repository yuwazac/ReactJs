import { useReducer } from "react";


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "UPDATE_FIELD": 
      return { ...state, [action.field]: action.payload };
    case "NEXT_STEP":
      if (state.text.trim() !== "" && state.userName.trim() !== "") {
        return { ...state, isStepOne: false };
      }
      return state;
    case "PREV_STEP":
      return { ...state, isStepOne: true };
    case "SUBMIT_LOGIN":
      return {
        ...state,
        logins: [...state.logins, { ...state }],
        isStepOne: true, 
        text: "",
        userName: "",
        email: "",
        phone: "",
      };
    case "CONFIRM":
      alert("Form Submitted Successfully!");
      return {
        ...state,
        isStepOne: true,
        text: "",
        userName: "",
        email: "",
        phone: "",
        logins: [],
      }
      case "EDIT_PRIVOUS":
        return { ...state, text:  action.payload,  userName: action.payload, email: action.payload,  phone: action.payload  };
    default:
      return state;
  }
};


const initialState = {
  isStepOne: true,
  text: "",
  userName: "",
  email: "",
  phone: "",
  logins: [], 
};

const MultipleStepForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNext = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT_LOGIN" });
  };

  const handleConfirm = () => {
    dispatch({ type: "CONFIRM" });
  };

  const handleBackToStep1 = () => {
    dispatch({...state, type: action.payload});
  };

  const updateField = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, payload: value });
  };

  return (
    <div>
      <h1>Multi-Step Registration</h1>

      {!state.logins.length && state.isStepOne && (
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <h3>Step 1: Profile</h3>
            <label>First Name: </label>
            <input
              type="text"
              value={state.text}
              onChange={(e) => updateField("text", e.target.value)}
            />
            <br />
            <label>Last Name: </label>
            <input
              type="text"
              value={state.userName}
              onChange={(e) => updateField("userName", e.target.value)}
            />
          </form>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

     
      {state.isStepOne === false && !state.logins.length && (
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <h3>Step 2: Profile</h3>
            <label>Email: </label>
            <input
              type="email"
              value={state.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
            <br />
            <label>Phone: </label>
            <input
              type="tel"
              value={state.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </form>
          <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>
          <button onClick={handleSubmit}>Next</button>
        </div>
      )}

      
      {state.logins.length > 0 && (
        <div>
          <h2>Step 3: Preview</h2>
          <h3>Preview your entries:</h3>

          {state.logins.map((login, index) => (
            <div key={index}>
              <p>
                First Name: {login.text} <br />
                Last Name: {login.userName}
              </p>
              <p>Email: {login.email}</p>
              <p>Phone: {login.phone}</p>
            </div>
          ))}
          <button onClick={handleBackToStep1}>Back</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default MultipleStepForm;
