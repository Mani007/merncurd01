import React from 'react'
import userStore from '../store/userStore';

function LoginPage() {
    const store = userStore();
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
        <button type="submit" value="Login" >Login</button>
  
    </form>
    </>
  )
}

export default LoginPage