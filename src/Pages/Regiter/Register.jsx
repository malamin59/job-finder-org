import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
// import app from '../../Firebase/firebase.config';
const Register = () => {
    const { createUser, setUser, updateUser, provider } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        console.log("user login in to google", provider);
        
        signInWithPopup( auth, provider).then(result => {
            console.log(result)
            navigate('/')
        }).catch(error => {
            console.log(error)
        })
    }
    

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!isLongEnough) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        if (!hasUppercase) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }

        if (!hasLowercase) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {

                    setUser({ ...user, displayName: name, photoURL: photo });
                }).catch((error) => {
                    console.log(error)
                    setUser(user)
                });

                toast.success("Registration successful!");
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    return (
        <div>
            <Helmet> <title> RegisterPage </title> </Helmet>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-3xl  font-bold text-center'>Register your account!</h3>
                        <form onSubmit={handleRegister}>
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />

                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="Photo URL" />

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />

                            <label className="label">Password</label>
                            <input type="text" className="input" placeholder="Password" name='password' />
                            <button onClick={handleGoogleSignIn}
                                type='button' className="btn  font-black w-full mt-4">
                                <FcGoogle size={24} /> Login in with Google</button>
                            <button type='submit' className="btn btn-neutral mt-4 w-full">Register</button>
                            <p className='text-center font-semibold pt-5'>Already Have An Account?
                                <Link className='text-secondary' to='/login'> Login </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer position='top-right' />
        </div>
    );
};

export default Register;
