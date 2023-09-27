import { nanoid } from 'nanoid';
import { FaCss3, FaDatabase, FaHtml5, FaJs, FaReact } from 'react-icons/fa';

// Navbar links:
export const links = [
  { id: nanoid(), href: '#home', text: 'Home' },
  { id: nanoid(), href: '#skills', text: 'Skills' },
  { id: nanoid(), href: '#experience', text: 'Experience' },
  { id: nanoid(), href: '#about', text: 'About' },
 // { id: nanoid(), href: '#projects', text: 'Projects' },
];

// Skills section:
export const skills = [
  {
    id: nanoid(),
    title: 'HTML',
    icon: <FaHtml5 className='h-16 w-16 text-red-500' />,
    text: 'Highly skilled in HTML,crafted visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'CSS & Tailwind CSS',
    icon: <FaCss3 className='h-16 w-16 text-sky-600' />,
    text: 'Highly skilled in CSS & Tailwind CSS, able to design webpages more customized, flexible and creative.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-yellow-500' />,
    text: 'Skilled in JavaScript, built interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React Js',
    icon: <FaReact className='h-16 w-16 text-sky-300' />,
    text: 'Good proficiency in React, Developed efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Oracle SQL',
    icon: <FaDatabase className='h-16 w-16 text-slate-400' />,
    text: 'Proficient in Oracle SQL, ability to handle & extract data from various source systems and transforming it to targeted destination for business purposes.',
  },

];

// Project section:
// export const projects = [
//   {
//     id: nanoid(),
//     img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
//     url: '',
//     github: '',
//     title: 'first project',
//     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
//   },

// ];