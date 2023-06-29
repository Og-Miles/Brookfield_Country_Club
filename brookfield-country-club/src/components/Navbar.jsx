import React from 'react'
import { Logo } from '../assets'
import styles from "../style";
import '../constants/index';
import {NavLinks} from '../constants/index';
import { MdOutlineAccountCircle } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <nav className={ `bg-white m-2 justify-between flex navbar w-full`}>
          <img src={Logo} alt="Logo" />          
        <ul className='list-none sm:flex hidden justify-center  items-center flex-1'>
          {
            NavLinks.map((nav, index)=> (
            <li
              key={nav.id}
              className={`font-Roboto font-normal cursor-pointer text-[16px]${index === NavLinks.length - 1 ? "mr-0" : "mr-10"}`}
              
            >
                <a
                href={`#${nav.id}`}>{nav.name}</a>
            </li>
              
            ))}
        </ul>
    </nav>
  )
}

export default Navbar