import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {
 PiSlidersHorizontal
} from "react-icons/pi";

export default function MobileNav() {
 return (
  <div className=' rounded-[25px] ps-5 border shadow-md shadow-slate-200 w-[95%] m-auto py-[6px] px-2'>
   <div className='flex items-center justify-between w-full'>
    <div className='flex items-center gap-4'>
     <FaSearch className='text-[16px]' />
     <div className='text-[13px]'>
      <div className='font-semibold'>Anywhere</div>
      <div className=' text-zinc-500'>Anyweek . Add guests</div>
     </div>
    </div>
    <PiSlidersHorizontal className='font-extrabold border text-black text-[2.1em] p-[8px] rounded-3xl cursor-pointer' />
   </div>
  </div>
 )
}
