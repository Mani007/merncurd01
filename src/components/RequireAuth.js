import React, { useEffect } from 'react'
// This is a special component for handling required authentication function. It is also higher order component or wrapper component.  
import userStore from '../store/userStore'
import LoginPage from '../pages/LoginPage';
import { Navigate } from 'react-router-dom';
function RequireAuth(props) {
    const store = userStore();

    useEffect(() =>{
        if(store.loggedIn === false) {
            store.checkAuth()
        }
    }, [])

    if (!store.loggedIn) {
        return ( 
        <>
        <h1>You are not authenticated</h1> <br /> 
        <p>Please login below</p> <br />
        {/* // Redirect to login page if not authenticated.  Replace {component} with your desired component.  This is just a placeholder.  Replace it with your actual component.  In your App.js, you will need to import and wrap your components in this component.   */}
        <Navigate to='/login'/> 
        </>
        )
      } else {
        return (
            <>
            {props.children}
            </>
          )
    }
  
}

export default RequireAuth

// usage <RequiredAuth>{component}</RequiredAuth>