import { format } from 'date-fns';
import React from 'react';
import Marquee from "react-fast-marquee";
// import MyImage from '../../assets/myimage.jpg'
//  import OurImage from '../../assets/OuImage.jpg.avif'
import alamin1 from '../../assets/alamin1.jpeg'
import alamin2 from '../../assets/alamin2.jpeg'
import alamin3 from '../../assets/alamin3.jpeg'
import alamin4 from '../../assets/alamin4.jpg'
import OurImage from '../../assets/img.webp'
import { useNavigate } from 'react-router';
const MyMarque = () => {
    const navigate  = useNavigate()
    return (
        <div>
            <div>
      <p className='text-center  lg:mt-16 mt-28 mb-10  text-2xl italic font-bold lg:text-3xl'> 
         {format( new Date(),'EEEE,dd,MMMM,yyyy')} <br />
         </p>
   <div className='flex py-2 mt-4 items-center gap-4 bg-base-200 px-3 '>
   <h3 className='font-bold bg-primary py-2 px-3 text-amber-50'> AboutUs </h3>
   <Marquee>
   <p className='font-bold'>find the job you've Been Dreaming of!.</p>
   <p>"BD Professional Office Career & Job Network Your Trusted Platform to Explore Hundreds of Verified Company Job Openings, Build a Successful Corporate Career, and Connect with Top Organizations Across the Country"</p>
   </Marquee>
   </div>


   <div className="hero bg-base-200 mt-6">
  <div className="hero-content  flex-col lg:flex-row">
    <img 
      src={OurImage}
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

   <h1 className='text-4xl font-bold text-center my-12'>More About us</h1>
<div className='grid lg:grid-cols-4 my-16 gap-5'>

<div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={alamin1}
      alt="Shoes" />
  </figure>
  
  <div className="card-body">
    <h2 className="card-title">Contact Us</h2>
    <p>Explore top government and private job opportunities in Bangladesh with Alljobs by Teletalk, the ultimate platform for job seekers and recruiters.</p>
    <div className="card-actions justify-end">
      <button onClick={() => navigate('/')}
      className="btn btn-primary">Get Start</button>
    </div>
  </div>
</div>
<div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={alamin2}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> About job </h2>
    <p>Skill Jobs is a popular job site and a comprehensive career solutions provider. Our paid membership offers a complete career guide with step-by-step directions .</p>
    <div className="card-actions justify-end">
      <button onClick={() => navigate('/')}
      className="btn btn-primary">Get Start</button>
    </div>
  </div>
</div><div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={alamin3}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Call Us </h2>
    <p>Find your dream job in Bangladesh with Job Media. Search, apply & get hired fast. Explore top job openings across industries today!</p>
    <div className="card-actions justify-end">
      <button onClick={() => navigate('/')}
      className="btn btn-primary">Get Start</button>
    </div>
  </div>
</div><div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={alamin4}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Got you </h2>
    <p>Explore all the current vacancies from all the top employers and the leading job boards. Daily publisher of latest jobs </p>
    <div className="card-actions justify-end">
      <button onClick={() => navigate('/')}
      className="btn btn-primary">Get Start</button>
    </div>
  </div>
</div>
</div>
            </div>
        </div>
    );
};

export default MyMarque;