import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();
    return (
        <div className='grid  items-center lg:mt-[10%] justify-center mt-[40%]'>
            <Helmet> <title>ProfilePage</title></Helmet>

            <div className="card grid items-center justify-center bg-base-100 w-96 shadow-sm">
                <div className="card-body bg-base-200 rounded">
                    <h2 className="card-title">  {
                        user && user.displayName
                    }</h2>

                   <div>
                   <img className='rounded-full grid items-center justify-center' src={user &&  user.photoURL} alt="" />
                   </div>
                    <p className='text-2xl'> {user && user.email}</p>

                    <div className="text-end">
                        <button onClick={() => navigate('/updateProfile')}
                         className='btn btn-secondary mt-2'>Edit Profile </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;