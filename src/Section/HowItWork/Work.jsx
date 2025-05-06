import React from 'react';
import SectionOne from '../../assets/sectionOne.avif'

const Work = () => {
    return (
        <div className='my-20'>   
       <div className='flex gap-4 justify-center items-center flex-col'>
        <h2 className='text-center font-bold text-4xl'>How It Works: </h2>
        <img className='flex w-4/12'  src={SectionOne} alt="" />
       </div>
</div>
    );
};

export default Work;