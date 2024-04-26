import {
    createBrowserRouter
} from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Regiser from "./Components/Pages/Regiser";
import AllItem from "./Components/Pages/AllItem";
import AddItem from "./Components/Pages/AddItem";
import MyArtCrafts from "./Components/Pages/MyArtCrafts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                element: <AllItem></AllItem>
            },
            {
                path: '/add',
                element: <AddItem></AddItem>
            },
            {
                path: '/myArt&Craft',
                element: <MyArtCrafts></MyArtCrafts>
            },
        ]
    },
]);

export default router