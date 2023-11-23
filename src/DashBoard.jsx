import {Link, Outlet} from 'react-router-dom'
export default function DashBoard(){
    return(
        <div className="h-screen bg-[url('/landing.jpg')] bg-cover bg-center font-raleway">
            <nav>
                <Link to="products">Products</Link>
                <Link to="sales-orders">Sales Orders</Link>
                <Link to="purchase-orders">Purchase Orders</Link>
                <Link to="production-scheduling">Production Scheduling</Link>
            </nav>
            <Outlet />
        </div>
    )
}