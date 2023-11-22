import {Routes, Route} from 'react-router-dom';
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import About from './About';

export default function App(){
  return(
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='login' element={<Login />}></Route>
    </Routes>
    </>
  )
}