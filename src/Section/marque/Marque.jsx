import { format } from 'date-fns';
import React from 'react';
import Marquee from "react-fast-marquee";
import MyImage from '../../assets/myimage.jpg'
import { useNavigate } from 'react-router';
const MyMarque = () => {
    const navigate  = useNavigate()
    return (
        <div>
            <div>
      <p className='text-center lg:mt-10  text-2xl italic font-bold lg:text-3xl'>  {format( new Date(),'EEEE ,MM ,MMMM ,yyyy')} </p>
   <div className='flex py-2 mt-4 items-center gap-4 bg-base-200 px-3 '>
   <h3 className='font-bold bg-primary py-2 px-3 text-amber-50'> AboutUs </h3>
   <Marquee>
   <p className='font-bold'>find the job you've Been Dreaming of!.</p>
   <p>"BD Professional Office Career & Job Network Your Trusted Platform to Explore Hundreds of Verified Company Job Openings, Build a Successful Corporate Career, and Connect with Top Organizations Across the Country"</p>
   </Marquee>
   </div>


   <div className="hero bg-base-200  my-20">
  <div className="hero-content flex-col lg:flex-row">
    <img 
      src={MyImage}
      className="max-w-sm rounded-lg shadow-2xl w-auto lg:w-3/12"
    />
    <div>
      <h1 className="lg:text-5xl text-4xl lg:text-left text-center lg:mt-0 mt-4 font-bold">Find a <span className='text-blue-700'>job</span> of your carrier!</h1>
      <p className="py-6">
      A designation is the formal position you've held and sometimes includes your rank or level. For example, a professor might be Emeritus. Alternatively, if you studied, e.g., computer science, then became a developer, but then stopped coding to manage, you might be a Software Development Manager
      </p>
      <button onClick={() => navigate('/')} className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default MyMarque;