import React from 'react';
import banner from '../../src/assets/banner.png'
import Motion from './Motion';
const Header = () => {
    return (
        <div>

            <div className='lg:flex justify-around mb-10 '>
                <div className='p-4'>

                  <Motion type='h1' className='lg:text-5xl text-3xl font-bold '>

                   
                        Find the <span className='text-orange-500'>
                            job  </span>
                        you've Been Dreaming of!
                  </Motion>
                
                  <Motion  type='p' className='text-gray-500 pt-2 lg:mb-0 mb-6'>
                 "BD Professional Office Career & Job Network  Your Trusted Platform to Explore Hundreds of Verified Company Job Openings, Build a Successful Corporate Career, and Connect with Top Organizations Across the Country" 
                  </Motion>
               
                </div>
                <img className='rounded' src={banner} alt="" />
            </div>

        </div>
    );
};

export default Header;
