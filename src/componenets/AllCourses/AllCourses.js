
import { Link, useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';


const AllCourses = () => {
    const courses = useLoaderData();
    console.log(courses);
   
   
    return (
        <div className='lg:flex'>
            
            <div>
                
<aside class="lg:w-64" aria-label="Sidebar">
   <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-2">
         <li>
           <Link to="/courses/01" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Data Science</span>
            </Link>
         </li>
         <li>
           <Link to="/courses/02" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Big Data</span>
            </Link>
         </li>
         <li>
           <Link to="/courses/03" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Business Intelligence</span>
            </Link>
         </li>
         <li>
           <Link to="/courses/04" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Software Development</span>
            </Link>
         </li>
         <li>
           <Link to="/courses/05" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Project Management</span>
            </Link>
         </li>
         <li>
           <Link to="/courses/06" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Cloud Computing</span>
            </Link>
         </li>
        
      </ul>
   </div>
</aside>

            </div>
            
            
           <div className='lg:grid grid-cols-3 gap-4'>
           {
             courses.map(course => <Courses course={course} key={course._id}></Courses>)
            }
           </div>
        </div>
    );
};

export default AllCourses;