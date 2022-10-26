import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
  const {sinInGoogle,GithubSignIn} = useContext(AuthContext);

  const [errors,setErrors] = useState('')
  const {loginEmailPass,setLoading} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation();

const from = location.state?.from?.pathname || '/';


const handleLogin = (event) =>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  const name = form.name.value;
  console.log(name,email,password);
  
  loginEmailPass(email,password)
  .then(result =>{
      const user = result.user;
      console.log(user);
      setErrors('')
      form.reset()
      if(user.uid){
        navigate(from , {replace: true})

      }
      else{
        toast.error('your email is not verified')
      }
  })
  .catch(error => {
      console.error(error);
      if(error.message){

          setErrors('Did not match email and password')
      }
  
  })
  .finally(() => {
    setLoading(false);
})

}


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const handleGoogleSignin = () =>{
  sinInGoogle(googleProvider)
  .then( result =>{
    const user = result.user;
    console.log(user);
    navigate(from , {replace: true})
  
  })
  .catch(error => {
    console.error(error);
})
}
const handleGithubSignin = () =>{
  GithubSignIn(githubProvider)
  .then( result =>{
    const user = result.user;
    console.log(user);
    navigate(from , {replace: true})
  
  })
  .catch(error => {
    console.error(error);
})
}
  




    return (
       <div className=' flex justify-center'>
        
         <form onSubmit={handleLogin} className="bg-white lg:w-1/3  shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className='mb-5 text-3xl font-bold  text-center '>Please Login</h2>
          <div className="mb-4">
            <label className="block mb-5 text-gray-700 text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input className="shadow mb-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='email' type="text" placeholder="Username"/>
          </div>
          <div className="mb-6">
            <label className="block mb-5 text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input className="shadow mb-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******************"/>
            <p className="text-red-500 mb-5 text-xs italic">{errors}</p>
            <p className=" mb-5 ">Not a member?<Link className='underline text-blue-500' to='/register'> Sign Up</Link></p>
          </div>
          <div className="flex mb-9 items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Log In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
          <div>
          <button onClick={handleGoogleSignin} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
  Sign in with Google
</button>
<button onClick={handleGithubSignin} type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
  <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
  Sign in with Github
</button>
          </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 Acme Corp. All rights reserved.
        </p>
        </form>
       </div>
    );
};

export default Login;