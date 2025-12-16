import { NavLink, Outlet } from "react-router-dom";
import React,{ useContext } from "react";
import { AuthContext } from "./context/AuthContext";



const App = () => {

    const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="">
        <header>
            <h1>React Blog</h1>
        </header>
        
        <nav>
            <NavLink to='/home' end>Home</NavLink>
            {isAuthenticated ? (
                <>
                 <NavLink to='/create'>Create Posts</NavLink>
                 <button onClick={logout}>logout</button>
                </>
            ) : (
                <NavLink to='/login'>Login</NavLink>
            )}
           
            
        </nav>
        <manin>
            <Outlet/>
        </manin>
    </div>
  )
}

export default App;