import React from 'react';
import banner from '../../src/assets/banner.png'
const Header = () => {
    return (
<div>
    
<div className='lg:flex justify-around mt-8 mb-10 '>
            <div className='p-4'>
                
                <h1 className='lg:text-6xl text-3xl font-bold '>Find a <span className='text-orange-500'>job</span> for your carrier</h1> 
            <p className='text-gray-500 pt-4 lg:mb-0 mb-6'>"BD Professional Office Career & Job Network  Your Trusted Platform to Explore Hundreds of Verified Company Job Openings, Build a Successful Corporate Career, and Connect with Top Organizations Across the Country" </p>
            </div>
            <img className='rounded' src={banner} alt="" />
        </div>
</div>
    );
};

export default Header;