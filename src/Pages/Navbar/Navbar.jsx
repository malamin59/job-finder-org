import React, { use } from 'react';
import job from '../../assets/job.png'
import { Link, NavLink} from 'react-router';
import './navbar.css';
import { AuthContext } from '../../Provider/AuthProvider';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Navbar = () => {
    const { user, logOut } = use(AuthContext)

    const handleLOut = () => {
        logOut().then(() => {
            toast.success('log out successfully')
        }).catch((error) => {
            console.log(error)
        });
    }

    const links = <>
        <li> <NavLink to="/"> Home </NavLink> </li>
        <li> <NavLink to="/about"> About  </NavLink> </li>
        <li> <NavLink to="/contact"> Contact </NavLink> </li>
    </>
    return (
        <div className="navbar lg:-mb-8 -mb-18 bg-base-100 shadow-sm">


            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button " className="btn p-0 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='w-18' src={job} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">

                <Link to='profile'>
                    <img className='rounded-full w-12 mr-2'
                        src={`${user ? user.photoURL : ''}`} alt="" />

                </Link>

                {
                    user ? '' : <Link to="/register">
                        <button className='btn-primary btn mr-2 lg:mr-3'> Register </button> </Link>
                }

                {
                    user ?
                        <button onClick={handleLOut} className='btn btn-primary'>
                            LogOut  </button>
                        : <Link to="/login">
                            <button className='btn btn-primary'> Login </button> </Link>

                }
                <button></button>
            </div>
           
        </div>
    );
};

export default Navbar;