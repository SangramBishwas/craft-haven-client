import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Root = () => {
    return (
        <div className="mx-20">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;