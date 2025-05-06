import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const { user } = use(AuthContext)
    return (
        <div className='grid items-center justify-center mt-30'>
            <div className="card grid items-center justify-center bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">  {
                        user && user.displayName
                    }</h2>
                    <p className='text-2xl'> {user && user.email}</p>
                   <div>
                   <img src={user &&  user.photoURL} alt="" />
                   </div>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;