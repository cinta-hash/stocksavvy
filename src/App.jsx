import {Routes, Route} from 'react-router-dom';
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

export default function App(){
  return(
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='login' element={<Login />}></Route>
    </Routes>
    </>
  )
}