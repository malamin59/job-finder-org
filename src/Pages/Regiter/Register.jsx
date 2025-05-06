import { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  
    const {createUser, setUser} = use(AuthContext)
    const [error , setError] = useState()

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
            setError("Password must be at least 6 characters long.");
            return;
          }
        
          if (!hasUppercase) {
            setError("Password must contain at least one uppercase letter.");
            return;
          }
        
          if (!hasLowercase) {
            setError("Password must contain at least one lowercase letter.");
            return;
          }
        
          setError(""); 
          console.log("Registration Successful!")
        console.log({ name, photo, email, password })
        createUser(email , password)
        .then(result => {
        const user = result.user;
        // console.log(user)
        setUser(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
          });
    }
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-3xl font-bold text-center py-5'>
                            Register your account!</h3>
                        <form onSubmit={handleRegister}
                            className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input
                                type="text"
                                name='name'
                                className="input"
                                placeholder="Name"
                            />

                            {/* PhotoUrl */}
                            <label className="label">Photo URL</label>
                            <input
                                type="text"
                                name='photo'
                                className="input"
                                placeholder="Photo URL" />
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
                            <input type="text"
                                className="input"
                                placeholder="Password"
                                name='password'
                            />

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <p className='text-center font-semibold pt-5'> Allready  Have An Account ?
                                <Link className='text-secondary' to='/login'> Login </Link>
                            </p>
                        </form>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;