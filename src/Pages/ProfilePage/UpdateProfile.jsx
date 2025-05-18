import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../provider/AuthProvider';
const UpdateProfile = () => {

    const { user } = useContext(AuthContext);
    const [name, setaName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setaName(user?.displayName || "")
        }
        setPhoto(user?.photoURL || "")
    }, [user])


    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await
                // auth.currentUser.reload();
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
            toast.success('Profile Update Successfully!')
            navigate('/profile')
        } catch (error) {
            alert("Update failed" + error.message)
        }
    }

    return (
        <div>
<Helmet> <title>Update-ProfilePage</title> </Helmet>
            <div className=" lg:mt-30  mt-[40%] grid justify-center items-center">
                <form onSubmit={handleUpdate}
                    className='bg-primary  p-6 rounded'>
                    <h2 className='text-2xl
                     text-shadow-white text-white text-center font-bold '>
                        Update Profile!</h2>
                    <label className="label mt-3  text-white">Name</label>
                    <input
                        type="text"
                        name='name'
                        className="input"
                        value={name}
                        onChange={(e) => setaName(e.target.value)}
                        placeholder="Name"
                    />

                    <br />
                    <label className="label text-white mt-3">Photo URL</label>
                    <input
                        type="text"
                        name='photo'
                        className="input"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        placeholder="Photo URL" />


                    <div className='text-end my-4'>
                        <button type='submit'
                         className='btn btn-secondary '> Save Change </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;


