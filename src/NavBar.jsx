import { NavLink } from "react-router-dom"
export default function NavBar(){
    return(
<header className="header sticky top-0 shadow-md flex items-center justify-between md:px-8 py-02 bg-gradient-to-r from-brown-300 to-brown-500">
  <div className="flex text-center text-2xl md:text-4xl">
    <img src="/imslogo1.jpeg" alt="logo" className="w-16"/>
    <h1 className="pt-2 font-bold">stocksavvy</h1>
  </div>
    <nav className="nav font-semibold md:text-lg">
      <div className="flex md:text-xl space-x-2">
        <NavLink to='/' className="md:p-4 border-b-2 border-violet-500 active:bg-violet-400 active:duration-300 active:font-bold border-opacity-0 hover:border-opacity-100 hover:text-violet-700 duration-200 cursor-pointer">Home</NavLink>
        <NavLink to='/dashboard' className="md:p-4 border-b-2 border-violet-500 active:bg-violet-400 active:duration-300 active:font-bold border-opacity-0 hover:border-opacity-100 hover:text-violet-700 duration-200 cursor-pointer">DashBoard</NavLink>
        <NavLink to='/login' className="md:p-4 border-b-2 border-violet-500  active:bg-violet-400 active:duration-300 active:font-bold border-opacity-0 hover:border-opacity-100 hover:text-violet-700 duration-200 cursor-pointer">Login</NavLink>
      </div>
    </nav>
    <div className=" flex justify-end duration-200 ease-in border-b-2 border-violet-500 border-opacity-0 hover:border-opacity-100">
        <a href="">
        <i class="fa-solid fa-user"></i>
        </a>
    </div>
</header>   
    )
}