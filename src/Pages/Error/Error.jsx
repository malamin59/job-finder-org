import React from 'react';
import errorImage from '../../assets/error.jpg'
const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='' src={errorImage} alt="" />  
            <div className='font-bold text-2xl text-gray-500'> No page Fount   </div>
        </div>
    );
};

export default Error;