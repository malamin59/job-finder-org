// import React, { useRef } from 'react';

// const ForgatPassword = () => {

//     const emailRef = useRef();

//     const handleForgatPassword = (e) => {
//         const form = e.target;
//         e.preventDefault();
//         const email = form.email.value
//         console.log(emailRef, email)
//     }
//     return (
//         <div>

//             <form 
//              className='flex w-3/12 mx-auto bg-primary p-4 rounded mt-[10%]'>
//                 <div>
//                     <label className="label">Email: </label>
//                     <input
//                         type="email"
//                         name='email'
//                         className="input"
//                         placeholder="Email"
//                         ref={emailRef}
//                         required
//                     />
//                     <button onClick={handleForgatPassword}
//                         className='btn bg-red-700  mt-3 text-white'>
//                         Reset Password
//                     </button>
//                 </div>

//             </form>
//         </div>
//     );
// };

// export default ForgatPassword;


import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../../Firebase/firebase.config';
import { toast } from 'react-toastify';

const ForgatPassword = () => {
  const emailRef = useRef();

  const handleForgatPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    // console.log(email);
    sendPasswordResetEmail(auth, email).then(() => {
        
        toast('check your email')
        window.location.href="https://mail.google.com/mail/u/0/#inbox"

    }).catch(error => {
        console.log(error)
    })
  };

  return (
    <div>
      <form
        onSubmit={handleForgatPassword}
        className="flex lg:w-3/12 w-8/12  mx-auto bg-primary p-4 rounded mt-30 lg:mt-[10%]"
      >
        <div>
          <label className="label">Email: </label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            ref={emailRef}
            required
          />
          <button 
          
          type="submit" className="btn bg-red-700 mt-3 text-white">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgatPassword;
// vdcs
