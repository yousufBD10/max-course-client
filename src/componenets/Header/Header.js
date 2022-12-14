import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/max.png'
import { AuthContext } from '../../Context/AuthProvider';
import './Header.css'

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  console.log(user);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{

    })
    .catch(error=>console.error(error))
}
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDark, setIsDark] = useState(false);
    const handleDarkLight = () =>{
      setIsDark(!isDark)
    
    }

    return (
        <nav className='bg-white nav-container mb-8 border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900"'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <Link
            to='/'
            aria-label='Lern Code'
            title='Lern Code'
            className='inline-flex items-center'
          >
                <img className='mr-3 h-6 sm:h-9' src={logo} alt="" />
           
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Max <span className='text-red-400'>Courses</span>
            </span>
          </Link>
          <div className='flex items-center hidden space-x-8 lg:flex'>
            
              <Link
                to='/home'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                Home
              </Link>
            
           
              <Link
                to='/courses'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
            Courses
              </Link>
           
              <Link
                to='/blog'
             className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
               Blog
              </Link>
           
              <Link
                to='/faq'
               className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
              FAQ
              </Link>

              <div className='flex'>
          
           <img title={user?.displayName} className='rounded-full w-12 mr-4' src={user?.photoURL}></img>


           {
            user?.email ?  user?.uid ? <button  onClick={handleLogOut}  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out</button>
            : null : <>   <button type="button" className="text-white bg-[#0043d5] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <Link to="/login">
        Log In
            </Link>
           </button>
 <button type="button" className="text-white bg-[#0043d5] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <Link to="/register">
      Sign Up
            </Link>
           </button></>
           }
           <div className='ml-4' onClick={handleDarkLight}>
            {
              isDark? <button type="button" class="text-white w-16 h-10 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button> : <button type="button" class="text-gray-900 w-16 h-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
            }
           </div>
           
                    
                    </div>
              <button data-collapse-toggle="mega-menu-icons" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                 <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className='lg:hidden  '>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <Link
                        to='/'
                       
                        className='inline-flex items-center'
                      >
                          <img className='w-8 ml-3 rounded-full' src={require("../../assets/images/max.png")} alt="" />
                        
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Max <span className='text-red-400'>Courses</span>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    
                    <ul className='space-y-4'>
                      <li>
                      <Link
                to='/home'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                Home
              </Link>
                      </li>
                      <li>
                      <Link
                to='/courses'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
            Courses
              </Link>
                      </li>
                      
                      <li>
                      <Link
                to='/blog'
             className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
               Blog
              </Link>
           
            
                      </li>
                      <li>
                      <Link
                            to='/fag'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                        FAQ
                        </Link>
                      </li>
                      
                    </ul>
                 
                   <div className='mt-4'>
                    <button type="button" className="text-white  bg-[#0043d5] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                         <Link to="/login">
                     Log In
                         </Link>
                        </button>
                    <button type="button" className="text-white bg-[#0043d5] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                         <Link to="/register">
                        Sign Up
                         </Link>
                        </button>
                    </div>
                   
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

    );
};

export default Header;