import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './Reactfiles/Exercise2.jsx'
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
import MultipleStepForm from './MultipleStepForm.jsx'
// import App from './ThemeLanguege/App.jsx'
import  ContactForm  from '../src/ContactForm.jsx'
// import App from './ShopingCart/App.jsx'
// import App from '../src/ContactApp/App.jsx'
import  StudentBoard  from './student/StudentBoard.jsx'
import  FormValidation  from './FormValidation/FormValidation.jsx'
import LifeForm from './LiveFormvalidation/LifeForm.jsx'

import FormHook from './FormHook/FormHook.jsx'
import { RouterProvider } from 'react-router-dom'


import RouteCenter from './ExerciseNavigate/RouteCenter.jsx'
// import App from './ReactRouter/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <Form /> */} 
    {/* <Exercise4/> */}
    {/* <ToDoList/> */}
    {/* <UseEffectA/> */}
    {/* <MouseTracker/> */}
      {/* <CountDownTimer/> */}
     {/* <GithubApi/>  */}
     {/* <UserList/> */}
     {/* <LogInForm/> */}
     {/* <Count/> */}
     {/* <CountReducer/> */}
     {/* < MultipleStepForm/> */}
     {/* <App/> */}
     {/* <App/> */}
     {/* <ContactForm/> */}
     {/* <App/> */}
     {/* <StudentBoard/> */}
     {/* <FormValidation/> */}
     {/* <LifeForm/> */}
     {/* <FormHook/> */}
     {/* <App/> */}
   <RouterProvider router={RouteCenter}/>
  
  
  </StrictMode>,
)
