import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {signIn} = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email , password);
        signIn(email , password)
        .then(result => {
          const user = result.user;
        console.log(user)
        })  .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage)
          });
    }
    return (
        <>
            <div className='flex justify-center min-h-screen items-center'>
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
                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
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