import { Link } from "react-router-dom";
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/all">All Items</Link></li>
        <li><Link to="/register">register</Link></li>
        <li><Link to="/add">Add Items</Link></li>
        <li><Link to="/myArt&Craft">My Art & Craft</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="font-extrabold text-xl md:text-3xl cursor-pointer ">Craft<span className="text-lime-600">Haven</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
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