import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className=' flex justify-center'>
        <form className="bg-white lg:w-1/3  shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
           <input className="shadow mb-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="example@gmail.com"/>
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
           <input className="shadow mb-5 appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
           <p className="text-red-500 mb-5 text-xs italic">Please choose a password.</p>
           <p className=" mb-5 ">Already have a member?<Link className='underline text-blue-500' to='/login'> Log In </Link></p>
         </div>
         <div className="flex mb-9 items-center justify-between">
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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