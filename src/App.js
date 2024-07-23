import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Fetchtest from './components/Fetchtest';
import Posttest from './components/Posttest';
import Deletetest from './components/Deletetest';
import Puttest from './components/Puttest';
import NotePage from './pages/NotePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<NotePage/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>
 
    </>
    )
}

export default App;
