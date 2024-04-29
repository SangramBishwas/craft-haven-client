import {
    createBrowserRouter
} from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Regiser from "./Components/Pages/Regiser";
import AllItem from "./Components/Pages/AllItem";
import AddItem from "./Components/Pages/AddItem";
import Details from "./Components/Pages/Details";
import PrivateRoute from "./PrivateRoute";
import MyCrafts from "./Components/Pages/MyCrafts";
import Error from "./Components/Pages/Error";
import Update from "./Components/Pages/Update";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/craft')
            },
            {
                path: '/craft/:id',
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/craft')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Regiser></Regiser>
            },
            {
                path: '/all',
                element: <AllItem></AllItem>,
                loader: () => fetch('http://localhost:5000/craft')
            },
            {
                path: '/add',
                element: <PrivateRoute><AddItem /></PrivateRoute>
            },
            {
                path: '/myCraft',
                element: <MyCrafts />
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
            }
        ]
    },
]);

export default router