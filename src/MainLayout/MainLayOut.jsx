import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayOut = () => {
    return (
        <div >
         <div className='w-11/12 mx-auto'>
         <Navbar></Navbar>
            <div className='min-h-[calc(100vh-116px)]'>
            <Outlet></Outlet>
            </div>
         </div>
                <Footer></Footer>
        </div>
    );
};

export default MainLayOut;