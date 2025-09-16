import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Reactfiles/Exercise2.jsx'
import Form from './Reactfiles/Form.jsx'
import Exercise4 from './Reactfiles/Exercise4.jsx'
import ToDoList from './ToDoList.jsx'
import UseEffectA from './UseEffectA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Form /> */}
    {/* <Exercise4/> */}
    {/* <ToDoList/> */}
    <UseEffectA/>
  </StrictMode>,
)
