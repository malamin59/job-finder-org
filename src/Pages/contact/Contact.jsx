import React from 'react';
import { Motion, spring } from 'react-motion';
import img from '../../assets/find.jpeg'
import alamin1 from '../../assets/alamin1.jpeg'
import alamin2 from '../../assets/alamin2.jpeg'
import alamin3 from '../../assets/alamin3.jpeg'
import alamin4 from '../../assets/alamin4.jpg'
import { useNavigate } from 'react-router';
const EatkCard = () => {
  const [hovered, setHovered] = React.useState(false);
  const navigate = useNavigate();

  return (
   <div className='lg:mt-20 mt-20'>
<h2 className='text-center font-bold text-3xl mb-8' >Remote Jobs Hiring Immediately</h2>
<div>
    

<Motion
      style={{
        scale: spring(hovered ? 1.05 : 1),
        shadow: spring(hovered ? 20 : 5)
      }}
    >
      {({ scale, shadow }) => (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            transform: `scale(${scale})`,
            boxShadow: `0px ${shadow}px ${shadow * 2}px rgba(0, 0, 0, 0.2)`,
            transition: 'all 0.3s ease',
            padding: '20px',
            borderRadius: '20px',
            background: '#fff',
            maxWidth: '600px',
            margin: 'auto',
            textAlign: 'center'
          }}
        >
          <img
            src={img}
            alt="Food"
            style={{ width: '100%', borderRadius: '5px' }}
          />
          <h2 style={{ marginTop: '10px' }}>List is a struggle but the struggle is not firmament</h2>
        
        </div>
      )}
    </Motion>

</div>

{/* card div */}
   <h1 className='text-4xl font-bold text-center my-12'>Contact Us</h1>
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
  );
};

export default EatkCard;


