import React from 'react';
import Banner from '../assets/bennar3.png'

const LastSection = () => {
    return (
        <div>

            <div className="hero bg-base-200 my-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={Banner}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl lg:mt-0 mt-4 font-bold">Are you Ready to Job!</h1>
                        <p className="py-6">
                        Andrei combines academic knowledge with over 10 years of practical experience to help job seekers navigate the challenges of resumes, interviews, and career growth. Through the Novorésumé Career Blog, he offers actionable advice to simplify and ace the job search process.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastSection;