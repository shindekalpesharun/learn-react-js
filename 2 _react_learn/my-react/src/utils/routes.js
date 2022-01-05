import Gallery from "../Page/Gallery";
import Home from "../Page/Home";
import Login from "../Page/Login";

export default [
    {
        path: '/',
        component: <Home />
    }, {
        path: '/gallery',
        component: <Gallery />
    }, {
        path: '/login',
        component: <Login />
    }

]