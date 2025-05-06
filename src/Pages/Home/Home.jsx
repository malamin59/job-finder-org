import React from 'react';
import Header from '../../Components/Header';
import Work from '../../Section/HowItWork/Work';
import { useLoaderData } from 'react-router';
import Card from '../../Components/CopmanyCard/Card';
import ExtraSection from '../../Section/moer/ExtraSection';
import LastSection from '../../Section/LastSection';

const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div className='my-20'>
  <Header></Header>
  <Work></Work>
  
  <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-4 md:gap-4 lg:pt-0 gap-6'>
{
data.map(card=> <Card key={card.id} card={card}></Card>)
}  </div>
<ExtraSection></ExtraSection>
<LastSection></LastSection>
          </div>
    );
};

export default Home;