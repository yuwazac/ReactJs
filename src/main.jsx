import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Reactfiles/Exercise2.jsx'
import Form from './Reactfiles/Form.jsx'
import Exercise4 from './Reactfiles/Exercise4.jsx'
import ToDoList from './ToDoList.jsx'
import UseEffectA from './UseEffectA.jsx'
import MouseTracker from './MouseTracker.jsx'
import CountDownTimer from './CountDownTimer.jsx'
import GithubApi from './GithubApi.jsx'
import UserList from './UserList.jsx'
import LogInForm from './LogInForm.jsx'
import Count from './Count.jsx'
import CountReducer from './CounterReducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Form /> */}
    {/* <Exercise4/> */}
    {/* <ToDoList/> */}
    {/* <UseEffectA/> */}
    {/* <MouseTracker/> */}
      {/* <CountDownTimer/> */}
     {/* <GithubApi/>  */}
     {/* <UserList/> */}
     {/* <LogInForm/> */}
     {/* <Count/> */}
     <CountReducer/>
  </StrictMode>,
)
