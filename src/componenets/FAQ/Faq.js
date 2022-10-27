import React from 'react';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Faq = () => {
    const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
    return (
        <div className=' bg-gray-100'>
            <h2 className='text-2xl text-center'>How it works</h2>
            <h2 className='lg:text-7xl  font-bold text-center'>Frequntly Asked Questons</h2>
            <p className=' text-center mt-9 px-8 '>If you are looking for several courses that you can opt for after your primary school studies this is the right place for you. You will find the right course that you can study from the list of options available. We are sure you will not regret the course you have chosen as you will get complete details related to the particular course. Courses under Various streams are arranged and you can choose your dream ones and study accordingly.</p>
           <div className='mt-9   bg-blue-gray-00 flex justify-center' >
          <div className='w-3/4 mb-9'> <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
          What is a course name?
          </AccordionHeader>
          <AccordionBody>
         
The course name is the title of the course. The names of IIPS and classroom courses are closely connected to the registration lists for the courses. When you modify the name of one of these courses, you also modify the name of the course in the registration list.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
          how long course duration?
          </AccordionHeader>
          <AccordionBody>
          From six months to two years will allow you enough time to finish a Certificate IV. The Certificate IV will give you specialised career and further-study skills ..
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
          How long is the shortest course?
          </AccordionHeader>
          <AccordionBody>
          How long is the shortest course?
Short courses can be taken at various institutions, but there is no set definition of how long a short course is. Short courses are designed to be more intensive than a regular degree, and can last anywhere from one month to two years.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}>
          How do I choose a course name?
          </AccordionHeader>
          <AccordionBody>
          How long is the shortest course?
Short courses can be taken at various institutions, but there is no set definition of how long a short course is. Short courses are designed to be more intensive than a regular degree, and can last anywhere from one month to two years.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)}>
          Which online courses is most profitable?
          </AccordionHeader>
          <AccordionBody>
        
What are the most profitable online courses?
Data analysis.
Graphic design.
IT certifications.
Programming languages.
Personal development.
Artificial Intelligence.
Arts & Crafts.
Health & Wellness.
          </AccordionBody>
        </Accordion>
      </Fragment></div>
           </div>
        </div>

    );
};

export default Faq;