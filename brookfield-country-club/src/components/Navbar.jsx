import React, { useState } from 'react'
import { Logo } from '../assets'
import styles from "../style";
import '../constants/index';
import {NavLinks} from '../constants/index';
import { RiAccountCircleLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {

  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={ `bg-white m-2 justify-between flex navbar w-full `}>
          <img src={Logo} alt="Logo" />          
        <ul className='list-none sm:flex hidden justify-center  items-center flex-1'>
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

        <div className='sm:flex hidden items-center justify-end '>
        <RiAccountCircleLine className='w-[27px] h-[27px] text-gray mr-2 '/>
          <p className={`${styles.paragraph}`}>
                Members Login
          </p>

        </div>


        {/* Smaller Devices */}
        <div className='sm:hidden flex justify-end w-[27px] h-[27px] '>
            <img 
            src={toggle ? <RxHamburgerMenu/> : } 
            alt="" />
        </div>
    </nav>
  )
}

export default Navbar