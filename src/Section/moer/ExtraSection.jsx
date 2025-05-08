import React from 'react';
import Banner2 from '../../assets/bennar2.jpg.avif'
import Marquee from 'react-fast-marquee';


const ExtraSection = () => {
    return (
        <div>
            <h2 className='text-center font-bold text-3xl mb-6'> We Wait You </h2>
            <Marquee> <p className='mb-3'>
                Andrei combines academic knowledge with over 10 years of practical experience to help job seekers navigate the challenges of resumes, interviews, and career growth. Through the Novorésumé Career Blog, he offers actionable advice to simplify and ace the job search process.
            </p>

            </Marquee>
            <section className="dark:bg-gray-100  dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
                    <div className="flex  items-center justify-center mt-8 lg:mt-0  sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={Banner2} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl mt-7 font-bold leading-none sm:text-6xl">
                            Here are the best <span className='text-blue-800'>jobs </span>of 2025.
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in Explore top government and private job opportunities in World with Alljobs by Teletalk, the ultimate platform for job seekers and recruiters.
                        </p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ExtraSection;