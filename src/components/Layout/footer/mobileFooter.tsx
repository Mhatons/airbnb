import React from 'react'
import { FaSearch, FaAirbnb } from "react-icons/fa"
import { PiHeartDuotone, PiUserCircle } from "react-icons/pi"
import { BiMessageAlt } from "react-icons/bi"
import { BsChatSquare, BsHeart, BsSearch } from "react-icons/bs"

export default function MobileFooter() {
 const content = [
  {
   id: 1,
   icon: <BsSearch />,
   title: "Explore"
  },
  {
   id: 2,
   icon: <BsHeart />,
   title: "Wishlists"
  },
  {
   id: 3,
   icon: <FaAirbnb />,
   title: "Trips"
  },
  {
   id: 4,
   icon: <BsChatSquare />,
   title: "Inbox"
  },
  {
   id: 5,
   icon: <PiUserCircle />,
   title: "Profile"
  },
 ]
  return (
    <div className='flex items-center justify-evenly'>
     {
      content?.map((content) => (
       <div key={content.id} className='flex flex-col items-center gap-1 py-2 '>
        <div className='text-[25px] text-zinc-400'>
         {content.icon}
        </div>
        <div className='text-[11px] text-zinc-500'>
         {content.title}
        </div>
       </div>
      ))
     }
    </div>
  )
}
