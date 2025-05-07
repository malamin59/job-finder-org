import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';

const Card = ({ card }) => {

  const navigate = useNavigate()

  return (
    <div className="bg-base-100 lg:mb-0 mb-10 items-center shadow-sm flex justify-around p-3">

      <div>
        <img onClick={() => navigate(`/companyDetails/${card.id}`)} className='w-6/12 rounded'
          src={card.logo}
          alt="Movie" />
      </div>

      <div className="">
        <h2 className="card-title">{card.name}</h2>
      </div>
    </div>
  );
};

export default Card;