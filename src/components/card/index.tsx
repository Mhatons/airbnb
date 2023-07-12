import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { PiHeartDuotone, PiHeartFill } from "react-icons/pi"
import { useAppSelector } from '../../app/hooks'
import { allInfo } from '../../features/actionslice'
import MySlider from '../slider'
import userImg1 from "../../asset/userImg1 (1).jpg"

interface Items {
 image: Array<any>,
 title: string,
 views: string,
 date: string,
 price: number,
 rate: number,
 id: any,
 userImg: any
}

export default function Card({
 image,
 title,
 views,
 date,
 price,
 rate,
 id,
 userImg,
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
  <div className=" card cursor-pointer bg-white border-gray-200">
   <div className='h-[300px] relative'>
    <MySlider gallery={image} />
    <PiHeartFill
     style={cardStyle}
     className={` cursor-pointer absolute top-4 right-4 text-2xl `}
    />
    <PiHeartDuotone
     onClick={() => handleLikeToggle()}
     className={` cursor-pointer absolute top-4 right-4 text-2xl z-10 text-white`}
    />
    
    <div className=''>
         <div className='userCard w-[59px]  absolute left-3 bottom-3 ps-1 bg-zinc-200 rounded-r-md'>
           <div className=' userImg bg-zinc-200 w-[60px]  py-3 px-2 rounded-r-md border-l border-2 border-zinc-300'>
       <img src={userImg1} className='rounded-full h-[40px] w-full object-cover opacity-0' alt="" />
      </div>
      <div className=' cardHover bg-zinc-200 h-[74px] left-0 -top-1 py-4 px-2 border-l shadow-md border-2 rounded-r-md w-[59px]  bottom-0 absolute'>
       <img src={userImg1} className='rounded-full h-[40px] opacity-0' alt="" />
      </div>
      <img src={userImg} className=' imgHover rounded-full h-[40px] w-[40px] left-3 absolute top-3 object-cover' alt="" />
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
           !toggleShow ? `Viewed ${views} times last week` : ` ${views} kilometere away`
     }
    </div>
    <div className="mb-2 text-sm font-normal text-gray-500">{toggleShow ? "5 nights ." : null}{date}</div>
    {
     !toggleShow ?
      <p className='text-sm'>
       <span className='font-semibold'>
        ${price}
       </span>
       night
      </p> :
      <u className='text-sm'>
       <span className='font-semibold'>
        ${price}
       </span>
       total before taxes
      </u>
    }
   </div>
  </div>

 )
}
