import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/techno.png'

const Home = () => {
    return (
        <div>
            <div className='lg:flex items-center mt-9 px-7'>
          <div>
            <h2 className='lg:text-8xl font-bold
            '>Learn with Max Courses</h2>
            <p className='text-xl'>Start, switch, or advance your career with more than 20 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
          </div>
          <img src={logo} alt="" />
        </div>

        <Link to='/courses'>
        <button type="button" className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See all courses</button></Link>

       <div className='p-9 bg-blue-gray-50'>
       <h2 className='text-xl font-bold text-purple-300 mb-4'>Professional Certificates</h2>
        <h2 className='text-3xl mb-4 font-bold '>Get job-ready for an in-demand career</h2>
         
         
         <div className='lg:flex'>
            <div className='mr-5 mb-5'>
             <img className='w-32' src="https://www.wur.nl/upload_mm/b/a/7/39c8fdf4-9cd0-4e23-9ded-b8e3134a9f50_DS%20in%20a%20nutshell_3dbfa15e_670x651.png" alt="" />
             <h2 className='text-xl font-bold'>Data Science</h2>
            </div>
            <div className='mr-5 mb-5'>
             <img className='w-32' src="https://www.emergingedtech.com/wp/wp-content/uploads/2014/06/BigData.jpg" alt="" />
             <h2 className='text-xl font-bold'>Big Data</h2>
            </div>
            <div className='mr-5 mb-5'>
             <img className='w-32' src="https://productschool.com/wp-content/uploads/2019/07/Business-Intelligence-1024x827.jpg" alt="" />
             <h2 className='text-xl font-bold'>Business Intelligence</h2>
            </div>
            <div className='mr-5 mb-5'>
             <img className='w-32' src="https://www.emergingedtech.com/wp/wp-content/uploads/2014/06/BigData.jpg" alt="" />
             <h2 className='text-xl font-bold'>Big Data</h2>
            </div>
            <div className='mr-5 mb-5'>
             <img className='w-32' src="https://cdn.dribbble.com/users/508588/screenshots/11263679/thg_m78_05_4x.jpg" alt="" />
             <h2 className='text-xl font-bold'>Software Development</h2>
            </div>
            <div className='mr-5 mb-5'>
             <img className='w-32' src="https://teamhood.com/wp-content/uploads/2021/02/project-management.jpg" alt="" />
             <h2 className='text-xl font-bold'>Project Management</h2>
            </div>

            <div className='mr-5 mb-5'>
             <img className='w-32' src="https://helpdeskgeek.com/wp-content/pictures/2022/01/cloud-computing.jpeg" alt="" />
             <h2 className='text-xl font-bold'>Cloud Computing</h2>
            </div>
         </div>
       </div>

        </div>
    );
};

export default Home;