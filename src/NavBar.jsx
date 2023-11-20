export default function NavBar(){
    return(
<header className="header sticky top-0 shadow-md flex items-center justify-between px-8 py-02 bg-gradient-to-r from-brown-300 to-brown-500">
    <img src="/imslogo1.jpeg" alt="logo" className="w-16" />
    <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
            
            <li className="p-4 border-b-2 border-violet-500 border-opacity-0 hover:border-opacity-100 hover:text-violet-700 duration-200 cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="p-4 border-b-2 border-violet-500 border-opacity-0 hover:border-opacity-100 hover:text-violet-700 duration-200 cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="p-4 border-b-2 border-violet-500 border-opacity-0 hover:border-opacity-100 hover:text-violet-700 duration-200 cursor-pointer">
              <a href="">Login</a>
            </li>
        </ul>
    </nav>
    <div class=" flex justify-end duration-200 ease-in border-b-2 border-violet-500 border-opacity-0 hover:border-opacity-100">
        <a href="">
        <i class="fa-solid fa-user"></i>
        </a>
    </div>
</header>   
    )
}