import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Fetchtest from './components/Fetchtest';
import Posttest from './components/Posttest';
import Deletetest from './components/Deletetest';
import Puttest from './components/Puttest';

function App() {
  return (
    <>
    {/* <Fetchtest/>
    <Posttest/> */}
    <Deletetest/>
    {/* <Puttest/> */}
    </>
    )
}

export default App;
