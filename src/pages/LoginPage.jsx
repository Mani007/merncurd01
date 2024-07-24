import React from 'react'
import userStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const store = userStore();
    const navigate = useNavigate()
    // Way to handle redirect after login
    const afterLogin = async (e) => {
        e.preventDefault();
        await store.login(); // We need to remove prevent default in the store
        navigate('/');
    }
  return (
    <>
    <form>
        <label>
          Email:
          <input type="email" onChange={store.handleLogin} name="email" value={store.loginform.email} />
        </label>
        <label>
          Password:
          <input type="password" onChange={store.handleLogin} name="password" value={store.loginform.password} />
        </label>
        <button type="submit" onClick={afterLogin} value="Login" >Login</button>
  
    </form>
    </>
  )
}

export default LoginPage