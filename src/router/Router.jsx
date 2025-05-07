import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayout/MainLayOut";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Company from "../Pages/Company/Company";
import Profile from "../Pages/ProfilePage/Profile";
import CompanyDetails from "../Pages/Company/CompanyDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Regiter/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../Pages/About/About";
import Contact from "../Pages/contact/Contact";


const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: MainLayOut,
            errorElement: <Error></Error>,
            children: [
                {
                    path: '/',
                    Component: Home,
                    loader: () => fetch('/data.json'),

                },

                {
                    path: '/companyDetails/:id',
                    element: <PrivateRoute>
                        <CompanyDetails>
                        </CompanyDetails> </PrivateRoute>,


                    loader: () => fetch('/data.json'),
                },
                {
                    path: '/profile',
                    element: <PrivateRoute>

                        <Profile>  </Profile>
                    </PrivateRoute>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                }, {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/contact',
                    element: <Contact></Contact>
                }
            ]
        }
    ]
);
export default router