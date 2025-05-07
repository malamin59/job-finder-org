import React, { use, useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';



const Login = () => {
        const { provider } = useContext(AuthContext);
    
    const [error, setError] = useState("");
    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    //    console.log(location)




        const handleGoogleSignIn = () => {          
            signInWithPopup( auth,provider ).then(result => {
                console.log(result)
                navigate('/')
            }).catch(error => {
                console.log(error)
            })
        }
        




 

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(`${location.state ? location.state : '/'}`)

            }).catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorCode, errorMessage)
                setError(errorCode)
            });
    }
    return (
        <>
            <div className='flex justify-center min-h-screen items-center'>
                <Helmet> <title> LoginPage </title> </Helmet>
                <form onSubmit={handleLogin}
                    className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-3xl font-bold text-center py-5'>
                            Login your account!</h3>
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="input"
                            placeholder="Email"
                            required
                        />
                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input"
                            placeholder="Password"
                            required
                        />
                        <div><a className="link link-hover"> Forgot password?</a></div>
                        {
                            error && <p className='text-red-600'> {error}</p>
                        }
                        <button onClick={handleGoogleSignIn}
                            type='submit' className="btn  font-black mt-4">
                            <FcGoogle size={24} /> Login in with Google</button>
                            <button 
                        type='submit' className="btn btn-neutral mt-2">Login</button>
                        
                        <p className='text-center font-semibold pt-5'>Dont't Have An Account ?
                            <Link className='text-secondary' to='/register'> Register </Link>
                        </p>
                    </div>
                </form>

            </div>
        </>
    );
};

export default Login;