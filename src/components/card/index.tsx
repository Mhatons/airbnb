import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { PiHeartDuotone, PiHeartFill } from "react-icons/pi"
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { allInfo, setToggleState } from '../../features/actionslice'
import { useDispatch } from 'react-redux'
import MySlider from '../slider'

interface Items {
 image: Array<any>,
 title: string,
 views: string,
 date: string,
 price: number,
 rate: number
}

export default function Card({
 image,
 title,
 views,
 date,
 price,
 rate,
}: Items) {

 const { toggleState, toggleShow } = useAppSelector(allInfo);
 const dispatch = useAppDispatch()

 const handleLike = () => {
  dispatch(setToggleState(!toggleState))
 }

 console.log(toggleState);

 return (
  <div className=" bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
   <div className='h-[300px] relative'>
    <MySlider gallery={image} />
    <PiHeartFill onClick={() => handleLike()} className={` cursor-pointer absolute top-4 right-4 text-2xl ${!toggleState ? "text-[#000000c4]" : "text-[#FF385C]"}`} />
    <PiHeartDuotone onClick={() => handleLike()} className={` cursor-pointer absolute top-4 right-4 text-2xl z-10 text-white`} />
   </div>
   <div className="py-3">
    <div className='flex justify-between items-center'>
     <h5 className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
     <div className='flex items-center'>
      <AiFillStar />
      <span className='text-sm pb-1'>{rate}</span>
     </div>
    </div>
    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
     {
      !toggleShow ? `Viewed ${views} times last week`: `3,593 kilometere away`
     }
    </div>
    <div className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">{toggleShow? "5 nights .": null}{date}</div>
    {
     !toggleShow ? <p className='text-sm'><span className='font-semibold'>${price}</span> night</p> : <u className='text-sm'><span className='font-semibold'>${price}</span> total before taxes</u>
    }
   </div>
  </div>


  // <div id="controls-carousel" className="relative w-full" data-carousel="static">
  //  {/* <!-- Carousel wrapper --> */}
  //  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
  //   {/* <!-- Item 1 --> */}
  //   <div className="hidden duration-700 ease-in-out" data-carousel-item>
  //    <img src={image1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  //   </div>
  //   {/* <!-- Item 2 --> */}
  //   <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
  //    <img src={image2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  //   </div>
  //   {/* <!-- Item 3 --> */}
  //   <div className="hidden duration-700 ease-in-out" data-carousel-item>
  //    <img src={image1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  //   </div>
  //   {/* <!-- Item 4 --> */}
  //   <div className="hidden duration-700 ease-in-out" data-carousel-item>
  //    <img src={image2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  //   </div>
  //   {/* <!-- Item 5 --> */}
  //   <div className="hidden duration-700 ease-in-out" data-carousel-item>
  //    <img src={image1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  //   </div>
  //  </div>
  //  {/* <!-- Slider controls --> */}
  //  <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
  //   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
  //    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
  //     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
  //    </svg>
  //    <span className="sr-only">Previous</span>
  //   </span>
  //  </button>
  //  <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
  //   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
  //    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
  //     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
  //    </svg>
  //    <span className="sr-only">Next</span>
  //   </span>
  //  </button>
  // </div>


  // <div id="default-carousel" className="relative w-full" data-carousel="slide">
  //  {/* <!-- Carousel wrapper --> */}
  //  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
  //   {/* <!-- Item 1 --> */}
  //   <div className=" duration-700 ease-in-out" data-carousel-item>
  //    <img src={image1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  //   </div>
  //   {/* <!-- Item 2 --> */}
  //   <div className=" duration-700 ease-in-out" data-carousel-item>
  //    <img src={image2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  //   </div>
  //   {/* <!-- Item 3 --> */}
  //   <div className=" duration-700 ease-in-out" data-carousel-item>
  //    <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  //   </div>
  //   {/* <!-- Item 4 --> */}
  //   <div className=" duration-700 ease-in-out" data-carousel-item>
  //    <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  //   </div>
  //   {/* <!-- Item 5 --> */}
  //   <div className=" duration-700 ease-in-out" data-carousel-item>
  //    <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
  //   </div>
  //  </div>
  //  {/* <!-- Slider indicators --> */}
  //  <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
  //   <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
  //   <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
  //   <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
  //   <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
  //   <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
  //  </div>
  //  {/* <!-- Slider controls --> */}
  //  <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
  //   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
  //    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
  //     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
  //    </svg>
  //    <span className="sr-only">Previous</span>
  //   </span>
  //  </button>
  //  <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
  //   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
  //    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
  //     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
  //    </svg>
  //    <span className="sr-only">Next</span>
  //   </span>
  //  </button>
  // </div>


 )
}
