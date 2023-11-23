import {Routes, Route} from 'react-router-dom';
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import DashBoard from './DashBoard';
import NoMatchRoute from './NoMatchRoute';
import Products from './Products';
import SalesOrders from './SalesOrders';
import PurchaseOrders from './PurchaseOrders';
import ProductionScheduling from './ProductionScheduling';

export default function App(){
  return(
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='dashboard' element={<DashBoard />}>
        <Route path='products' element={<Products />}></Route>
        <Route path='sales-orders' element={<SalesOrders />}></Route>
        <Route path='purchase-orders' element={<PurchaseOrders />}></Route>
        <Route path='production-scheduling' element={<ProductionScheduling />}></Route>
      </Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='*' element={<NoMatchRoute />}></Route>
    </Routes>
    </>
  )
}