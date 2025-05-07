import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const Profile = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();
    return (
        <div className='grid items-center justify-center mt-30'>
            <div className="card grid items-center justify-center bg-base-100 w-96 shadow-sm">
                <div className="card-body">
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