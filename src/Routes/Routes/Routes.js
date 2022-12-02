import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/Home/About/About";
import Blogs from "../../Pages/Home/Blogs/Blogs";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import HomeTop from "../../Pages/Home/HomeTop/HomeTop";
import Projects from "../../Pages/Home/Projects/Projects";
import Skills from "../../Pages/Home/Skills/Skills";
import NotFound from "../../Pages/Shared/NotFound/NotFound";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/hometop',
                element: <HomeTop></HomeTop>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
        ]
    }
])