import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
// import { AuthContext } from '../../../Context/AuthProvider';
import toast ,{Toaster} from 'react-hot-toast'

const Register = () => {

    const {createUser,verifyEmail} = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    
    const handleEmailChange = (e) =>{
        setUserInfo({...userInfo, email: e.target.value})
    };
    const handlePassChange = (e) =>{
        const password = e.target.value;
        if(password.length < 6){
            setErrors({...errors,password:"Password must be 6 characters"})
            setUserInfo({...userInfo, password: e.target.value})
        }
        else{
            setErrors({...errors,password:''})
            setUserInfo({...userInfo, password: e.target.value})
        }
    };

    const handleEmailVerification  = () => {
        verifyEmail()
        .then(() =>{alert('email send')})
        .catch(error => console.error(error));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
          
        
        createUser(email,password)
    .then(result =>{
        const user = result.user;
       console.log(user);
       setErrors('');
        Form.reset();
        // handleUpdateProfile(name,photoURL);
        // verifyEmail();
        handleEmailVerification()
       toast.success("Confirm your email address ");
       
    })
    .catch(error => {
      console.error(error)
      setErrors(error.message)
    })

    };


    


    return (
        <div className=' flex justify-center'>
        <form onSubmit={handleSubmit} className="bg-white lg:w-1/3  shadow-md rounded px-8 pt-6 pb-8 mb-4">
         <div className="mb-4">
           <label className="block mb-5 text-gray-700 text-sm font-bold mb-2" for="username">
           Full Name
           </label>
           <input className="shadow mb-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="   Full Name" type="text" placeholder=" Full Name"/>
         </div>
         <div className="mb-4">
           <label className="block mb-5 text-gray-700 text-sm font-bold mb-2" for="username">
             Email
           </label>
           <input name='email' value={userInfo.email} onChange={handleEmailChange} className="shadow mb-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="example@gmail.com"/>
         </div>

         <div className="mb-4">
           <label className="block mb-5 text-gray-700 text-sm font-bold mb-2" for="photoURL">
         Photo URL
           </label>
           <input className="shadow mb-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="photoURL" type="text" placeholder="photoURL"/>
         </div>
         <div className="mb-6">
           <label className="block mb-5 text-gray-700 text-sm font-bold mb-2" for="password">
             Password
           </label>
           <input name='password'  value={userInfo.password} onChange={handlePassChange} className="shadow mb-5 appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
          {
            errors &&  <p className="text-red-500 mb-5 text-xs italic">{errors.password}</p>
          }
           <p className=" mb-5 ">Already have a member?<Link className='underline text-blue-500' to='/login'> Log In </Link></p>
         </div>
         <div className="flex mb-9 items-center justify-between">
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign Up
           </button>
         
         </div>
         
       <p className="text-center text-gray-500 text-xs">
         &copy;2022 Acme Corp. All rights reserved.
       </p>
       </form>
      </div>
    );
};

export default Register;