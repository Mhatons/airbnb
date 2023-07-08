import React from 'react'
import logo from "../../../asset/logo.png"
import { IoSearchCircle } from 'react-icons/io5'
import { BiGlobe, BiMenu, BiSearch } from 'react-icons/bi'
import { FaUserCircle, FaSearch } from 'react-icons/fa'
import DropList from '../../dropMenu'


export default function Nav() {
  const menuList = [
    {
      id: 1,
      title: "Messages",
      link: "/",
    },
    {
      id: 2,
      title: "Notifications",
      link: "/",
    },
    {
      id: 3,
      title: "Trips",
      link: "/",
    },
    {
      id: 4,
      title: "Wishlists",
      link: "/",
    },
    {
      id: 5,
      title: "Airbnb your home",
      link: "/",
    },
    {
      id: 6,
      title: "Account",
      link: "/",
    },
    {
      id: 7,
      title: "Help",
      link: "/",
    },
    {
      id: 8,
      title: "Log out",
      link: "/",
    },
  ]
  return (
    <div className='flex items-center justify-between lg:w-[90%] w-[95%] m-auto pb-4'>
      <div className='md:w-[7%] w-[9%]'>
        <img src={logo} alt="" className='cursor-pointer' />
      </div>
      <div className=' rounded-3xl ps-5 border shadow-md  hover:shadow-slate-300 md:ms-20 ms-10 2xl:w-[28%] lg:w-[33%] w-[44%] p-2'>
        <ul className='flex items-center justify-between text-sm'>
          <li className=' border-e md:pe-4 pe-2 font-semibold cursor-pointer whitespace-nowrap'>Anywhere</li>
          <li className=' border-e md:pe-4 pe-2 font-semibold cursor-pointer whitespace-nowrap'>Any week</li>
          <li className=' text-slate-500 cursor-pointer whitespace-nowrap'>Add guests</li>
          <li><FaSearch className=' font-extrabold bg-[#FF385C] text-white text-[2.1em] p-[8px] rounded-3xl cursor-pointer' /></li>
        </ul>
      </div>
      <div className='flex items-center justify-between 2xl:w-[21%] xl:w-[24%] lg:w-[29%]'>
        <div className='font-semibold text-[0.9em] hover:bg-[#F7F7F7] cursor-pointer whitespace-nowrap rounded-3xl py-2 px-3'>Airbnb your home</div>
        <BiGlobe className='text-[2.6em] hover:bg-[#F7F7F7] rounded-3xl cursor-pointer p-3 ' />
        <div className='border rounded-3xl flex w-[30%] items-center p-1 gap-2 ps-3 hover:shadow-md cursor-pointer'>
          {/* <BiMenu className='text-[1.5em]' /> */}
          <DropList 
            menu={menuList}
            icon={<BiMenu className='text-[1.5em]' />}
          />
          <FaUserCircle className=' text-zinc-500 text-[2em]' />
        </div>
      </div>
    </div>
  )
}
