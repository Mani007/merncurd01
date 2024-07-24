import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Fetchtest from './components/Fetchtest';
import Posttest from './components/Posttest';
import Deletetest from './components/Deletetest';
import Puttest from './components/Puttest';
import NotePage from './pages/NotePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Signuppage from './pages/Signuppage';
import RequireAuth from './components/RequireAuth';
import Logoutpage from './pages/Logoutpage';

function App() {
  return (
    <>
    <BrowserRouter>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
      <li>
        <Link to='/logout'>Logout</Link>
      </li>
    </ul>
    <Routes>
      <Route index element={<RequireAuth> <NotePage/> </RequireAuth> } />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<Signuppage/>} />
      <Route path='/logout' element={<Logoutpage/>} />
    </Routes>
    </BrowserRouter>
 
    </>
    )
}

export default App;
