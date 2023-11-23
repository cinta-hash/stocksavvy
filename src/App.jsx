import {Routes, Route} from 'react-router-dom';
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import DashBoard from './DashBoard';
import NoMatchRoute from './NoMatchRoute';

export default function App(){
  return(
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='dashboard' element={<DashBoard />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='*' element={<NoMatchRoute />}></Route>
    </Routes>
    </>
  )
}