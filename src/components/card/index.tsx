import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { PiHeartDuotone, PiHeartFill } from "react-icons/pi"
import { useAppSelector } from '../../app/hooks'
import { allInfo } from '../../features/actionslice'
import MySlider from '../slider'
import userImg from "../../asset/user (2).jpg"

interface Items {
 image: Array<any>,
 title: string,
 views: string,
 date: string,
 price: number,
 rate: number,
 id: any,
}

export default function Card({
 image,
 title,
 views,
 date,
 price,
 rate,
 id,
}: Items) {

 const { toggleShow } = useAppSelector(allInfo);

 const [liked, setLiked] = useState(false);

 const handleLikeToggle = () => {
  setLiked(!liked);
 };

 const cardStyle = {
  color: liked ? 'red' : 'black',
 };


 return (
  <div className=" bg-white border-gray-200">
   <div className='h-[300px] relative'>
    <MySlider gallery={image} />
    <PiHeartFill style={cardStyle} className={` cursor-pointer absolute top-4 right-4 text-2xl `} />
    <PiHeartDuotone onClick={() => handleLikeToggle()} className={` cursor-pointer absolute top-4 right-4 text-2xl z-10 text-white`} />
    <div className=''>
     <div className='w-[20%] absolute left-3 bottom-6 ps-1 bg-zinc-200 rounded-r-md'>
      <div className=' bg-zinc-200 py-3 px-2 rounded-r-md border-l shadow-md border-2 border-zinc-300'>
       <img src={userImg} className='rounded-full' alt="" />
      </div>
     </div>
    </div>
   </div>
   <div className="py-3">
    <div className='flex justify-between items-center'>
     <h5 className=" text-md font-semibold tracking-tight text-gray-900 ">{title}</h5>
     <div className='flex items-center'>
      <AiFillStar />
      <span className='text-sm pb-1'>{rate}</span>
     </div>
    </div>
    <div className="text-sm font-normal text-gray-500">
     {
      !toggleShow ? `Viewed ${views} times last week`: `3,593 kilometere away`
     }
    </div>
    <div className="mb-2 text-sm font-normal text-gray-500">{toggleShow? "5 nights .": null}{date}</div>
    {
     !toggleShow ? <p className='text-sm'><span className='font-semibold'>${price}</span> night</p> : <u className='text-sm'><span className='font-semibold'>${price}</span> total before taxes</u>
    }
   </div>
  </div>

 )
}
