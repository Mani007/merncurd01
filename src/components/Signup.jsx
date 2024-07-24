import React, { useState } from 'react'
import userStore from '../store/userStore'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const store = userStore()
    const navigate = useNavigate()
    const [msg, setMsg] = useState('')
    const aftersignup = async(e) =>{
        e.preventDefault();
        // validate form inputs for two password
        try {
            if (store.signup.password === store.signup.password2) {
                await store.signupcall()
                console.log("Signup Successful")
    
                 // navigate to login page
                navigate('/login');
                // or clear the form
                // or display success message await store.signup()
            } else {
                setMsg("Passwords do not match!")
                //console.error("Passwords do not match!")
                navigate('/signup'); 
                // or display an error message in the form for the user to correct it

            }
            
            
          

        } catch (err) {
            console.error(err);
            return; // or display an error message in the form for the user to correct it
        }
       

    }

  return (
    <>
    <h1>Signup Form</h1>
    <p>{msg}</p>
    <form>
        <label>
          Email:
          <input type="email" onChange={store.handlesignup} name="email" value={store.signup.email} />
        </label>
        <label>
          Password:
          <input type="password" onChange={store.handlesignup} name="password" value={store.signup.password} />
        </label>
        <label>
          Confirm Password:
          <input type="password" onChange={store.handlesignup} name="password2" value={store.signup.password2} />
        </label>
        <button type="submit" onClick={aftersignup} value="Login" >Login</button>
  
    </form>
    </>
  )
}

export default Signup