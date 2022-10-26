
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';


const AllCourses = () => {
    const courses = useLoaderData();
    console.log(courses);
   
   
    return (
        <div className='flex'>
            
            <div>
                
<aside class="w-64" aria-label="Sidebar">
   <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-2">
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700">
              
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
        
      </ul>
   </div>
</aside>

            </div>
            
            
           <div className='grid grid-cols-3 gap-4'>
           {
             courses.map(course => <Courses course={course} key={course._id}></Courses>)
            }
           </div>
        </div>
    );
};

export default AllCourses;