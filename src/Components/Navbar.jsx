import { Link, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../Custom Hook/useAuth";

const Navbar = () => {
    const { user, LogOut } = useAuth();
    const handleLogout = () => {
        LogOut()
            .then()
            .catch(error => console.error(error))
    }
    const links = <>
        <li onClick="Reload()" className="hover:underline"><NavLink className={({isActive}) => isActive ? "text-lime-500 font-bold" : "text-white"} to="/">Home</NavLink></li>
        <li onClick="Reload()" className="hover:underline"><NavLink className={({isActive}) => isActive ? "text-lime-500 font-bold" : "text-white"} to="/all">All Items</NavLink></li>
        <li onClick="Reload()" className="hover:underline"><NavLink className={({isActive}) => isActive ? "text-lime-500 font-bold" : "text-white"} to="/register">register</NavLink></li>
        <li onClick="Reload()" className="hover:underline"><NavLink className={({isActive}) => isActive ? "text-lime-500 font-bold" : "text-white"} to="/add">Add Items</NavLink></li>
        <li onClick="Reload()" className="hover:underline"><NavLink className={({isActive}) => isActive ? "text-lime-500 font-bold" : "text-white"} to="/myArt&Craft">My Art & Craft</NavLink></li>
    </>
    return (
        <div className="lg:px-20 navbar bg-base-content fixed z-50 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-50 p-2 shadow bg-base-content rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="font-extrabold text-2xl md:text-4xl cursor-pointer text-white">Craft<span className="text-lime-500">Haven</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu w-full menu-horizontal px-1 text-lg">
                    {links}
                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end">
                        <button onClick={handleLogout} className="btn">Log Out</button>
                    </div> :
                    <div className="navbar-end">
                        <Link to="/login" className="btn">Login</Link>
                    </div>
            }
            <ToastContainer />
        </div>
    );
};

export default Navbar;