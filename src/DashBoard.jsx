import {Link, Outlet} from 'react-router-dom'
export default function DashBoard(){
    return(
        <div className="h-screen bg-[url('/landing.jpg')] bg-cover bg-center font-raleway">
            <nav className='flex flex-col md:flex-row justify-center md:space-x-16 p-4 text-2xl font-bold'>
                <Link className='border-b-2 border-violet-500 active:bg-violet-400 active:duration-300 active:font-bold border-opacity-0 hover:border-opacity-100 hover:text-violet-700 duration-200 cursor-pointer mb-4 md:mb-0' to="products">Products </Link>
                <Link className='border-b-2 border-violet-500 active:bg-violet-400 active:duration-300 active:font-bold border-opacity-0 hover:border-opacity-100 hover:text-violet-700 duration-200 cursor-pointer mb-4 md:mb-0' to="purchase-orders"> Purchase Orders</Link>
                <Link className='border-b-2 border-violet-500 active:bg-violet-400 active:duration-300 active:font-bold border-opacity-0 hover:border-opacity-100 hover:text-violet-700 duration-200 cursor-pointer mb-4 md:mb-0' to="production-scheduling"> Production Scheduling</Link>
            </nav>
            <Outlet />
        </div>
    )
}