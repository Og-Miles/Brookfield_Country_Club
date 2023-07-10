import React, { useState } from 'react';
import { Logo, Menu, Close } from '../assets';
import styles from "../style";
import '../constants/index';
import {NavLinks} from '../constants/index';
import { RiAccountCircleLine } from 'react-icons/ri';


const Navbar = () => {

  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={ `bg-white m-2 mt-0 justify-between flex navbar w-full `}>
          <img src={Logo} alt="Logo" />          
        <ul className='list-none md:flex hidden justify-center  items-center flex-0.6'>
          {
            NavLinks.map((nav, index)=> (
            <li
              key={nav.id}
              className={`font-Roboto font-regular underline-offset-4  cursor-pointer text-[16px] ${index === NavLinks.length - 1 ? "mr-0" : "mr-10"} ${active === nav.name ? 'text-active underline font-bold' : 'text-gray'}`}
              onClick={()=> setActive(nav.name)}
            >
                <a
                href={`#${nav.id}`}>{nav.name}</a>
            </li>
              
            ))}
        </ul>

        <div className='sm:flex flex-0.4 hidden items-center justify-end cursor-pointer'>
        <RiAccountCircleLine className='w-[27px] h-[27px] text-gray mr-2 '/>
          <p className={`${styles.paragraph}`}>
                Members Login
          </p>
        </div>


        {/* Smaller Devices */}
        <div className='md:hidden flex flex-1 justify-end items-center'>
            <img 
            src={toggle ? Close : Menu} 
            alt="Menu" 
            className='w-[22px] h-[22px] mr-2'
            onClick={()=> setToggle(!toggle)}
            />

          {/* Listed Items */}
        <div  className={`${
            !toggle ? "hidden" : "flex"
          } p-6 slide-left bg-active absolute top-20 right-[-106px] mx-4 my-2 min-w-[140px] flex-col z-[3]`}>
          
        <ul className='list-none md:hidden flex justify-center flex-col items-start flex-1'>
          {
            NavLinks.map((nav, index)=> (
            <li
              key={nav.id}
              className={`font-Roboto font-regular underline-offset-4  text-white cursor-pointer text-[16px] m-5 ${index === NavLinks.length - 1 ? "mr-0" : "mr-10"} ${active === nav.name ? 'text-active underline font-bold' : 'text-gray'}`}
              onClick={()=> setActive(nav.name)}
            >
                <a
                href={`#${nav.id}`}>{nav.name}</a>
            </li>
              
            ))}
        </ul>

        <div className='sm:hidden flex items-start mt-5 ml-5 justify-start flex-col cursor-pointer'>
        <RiAccountCircleLine className='w-[27px] h-[27px] text-white mr-2'/>
          <p className={`text-white font-bold py-2`}>
                Members Login
          </p>
        </div>

        </div>
         

         





        </div>
    </nav>
  )
}

export default Navbar