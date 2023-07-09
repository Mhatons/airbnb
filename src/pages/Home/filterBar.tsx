import React from 'react'
import { BsToggleOn } from 'react-icons/bs'
import { GrFormCheckmark } from 'react-icons/gr'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { allInfo, setToggleShow } from '../../features/actionslice'

export default function FilterBar() {
 const dispatch = useAppDispatch()
 const {toggleShow} = useAppSelector(allInfo)
  return (
   <div className="flex items-center justify-between md:w-[42%] w-[95%] border rounded-xl px-3 py-1 m-auto">
    <div className="md:flex items-center text-sm gap-4">
     <b className="md:border-e pe-4">Display total price</b>
     <p className="text-zinc-500">Includes all fees, before taxes</p>
    </div>
    <div className="relative">
     <BsToggleOn onClick={() => dispatch(setToggleShow(!toggleShow))} className={` hover:text-zinc-500 cursor-pointer text-zinc-400 text-[3.4em] ${toggleShow ? "text-zinc-800" : "rotate-180"}`} />
     {
      toggleShow && <GrFormCheckmark className="absolute top-5 right-2 text-white" />
     }
    </div>
   </div>
  )
}
