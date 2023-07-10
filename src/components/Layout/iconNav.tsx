import React, { useEffect } from 'react'
import {
  BsUmbrella,
  BsHouses,
  BsHospital,
  BsCupHot,
  BsCloudSun,
  BsBuilding,
  BsBank,
  BsFillHospitalFill,
  BsTsunami,
  BsBuildings,
  BsCloudHaze2,
  BsCloudHaze,
  BsHouse,
  BsPalette
} from "react-icons/bs"
import {
  IoFastFoodOutline,
  IoBoatOutline,
  IoFlameOutline
} from "react-icons/io5"
// import { PiSlidersHorizontal } from "react-icons/pi"
import {
  PiSlidersHorizontal, PiMountainsDuotone
} from "react-icons/pi";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io"
import { MdOutlineHouseboat } from "react-icons/md"

export default function IconNav() {

useEffect(() => {
  const items = document.querySelectorAll("#iconItem")
  const firstItem = items[0];

  firstItem?.classList.add("selected")

  items.forEach(item => {
    item.addEventListener("click", () => {
      items.forEach(item => item.classList.remove("selected"));
      item.classList.add("selected")
    });
  });

  // const scrollLeftButton = document.getElementById('scrollLeftButton')
  // const scrollRightButton = document.getElementById('scrollRightButton')
  // const itemList = document.querySelector('#itemList')

  // scrollRightButton?.addEventListener("click", () => {
  //   itemList?.scrollBy({
  //     left: 200,
  //     behavior: 'smooth' // Adjust the behavior as desired ('smooth' or 'auto')
  //   });
  // })
  // scrollLeftButton?.addEventListener("click", () => {
  //   itemList?.scrollBy({
  //     left: -200,
  //     behavior: 'smooth' // Adjust the behavior as desired ('smooth' or 'auto')
  //   });
  // })

  const scrollLeftButton = document.getElementById('scrollLeftButton');
  const scrollRightButton = document.getElementById('scrollRightButton');
  const itemList = document.querySelector('#itemList');

  scrollLeftButton?.addEventListener('click', () => {
    itemList?.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  });

  scrollRightButton?.addEventListener('click', () => {
    itemList?.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  });

  itemList?.addEventListener('scroll', () => {
    const scrollPosition = itemList.scrollLeft;
    const maxScroll = itemList.scrollWidth - itemList.clientWidth;

    if (scrollPosition <= 1) {
      scrollLeftButton?.classList.add('hide');
    } else {
      scrollLeftButton?.classList.remove('hide');
    }

    if (scrollPosition >= maxScroll) {
      scrollRightButton?.classList.add('hide');
    } else {
      scrollRightButton?.classList.remove('hide');
    }
  });

}, [])

  const icons = [
    {
      id: 1,
      icon: <IoFlameOutline />,
      name: "Trending"
    },
    {
      id: 2,
      icon: <BsHouses />,
      name: "Home"
    },
    {
      id: 3,
      icon: <BsHospital />,
      name: "Mansions"
    },
    {
      id: 4,
      icon: <BsCupHot />,
      name: "Bed & breakfasts"
    },
    {
      id: 5,
      icon: <BsCloudSun />,
      name: "Tropical"
    },
    {
      id: 6,
      icon: <BsBuilding />,
      name: "Towers"
    },
    {
      id: 7,
      icon: <BsBank />,
      name: "Houseboats"
    },
    {
      id: 8,
      icon: <BsFillHospitalFill />,
      name: "Hospitals"
    },
    {
      id: 9,
      icon: <BsTsunami />,
      name: "Lake"
    },
    {
      id: 10,
      icon: <IoFastFoodOutline />,
      name: "Chef's kitchens"
    },
    {
      id: 11,
      icon: <BsBuildings />,
      name: "Tiny homes"
    },
    {
      id: 12,
      icon: <BsCloudHaze2 />,
      name: "Luxe"
    },
    {
      id: 13,
      icon: <BsCloudHaze />,
      name: "Beachfront"
    },
    {
      id: 14,
      icon: <BsHouse />,
      name: "Cabins"
    },
    {
      id: 15,
      icon: <BsPalette />,
      name: "Creative spaces"
    },
    {
      id: 16,
      icon: <MdOutlineHouseboat />,
      name: "Boat house"
    },
    {
      id: 17,
      icon: <PiMountainsDuotone />,
      name: "National parks"
    },
    {
      id: 18,
      icon: <IoBoatOutline />,
      name: "Boat cruise"
    },
    {
      id: 19,
      icon: <BsUmbrella />,
      name: "Beach"
    },

  ]

  return (
    <div
      className=' flex items-center justify-between md:w-[90%] w-[99%] m-auto '>
      <div
        className='relative md:w-[89%] lg:w-[92%]  w-[99%]'>
        <IoIosArrowBack
        id='scrollLeftButton'
          className='text-[30px] bg-white cursor-pointer border rounded-3xl p-[6px] shadow-xl shadow-white absolute left-0 mt-5 md:block hidden'
        />
        <ul
        id='itemList'
          className=' flex px-6 items-center gap-6 sm:pt-4  max-w-[78em] scrollBarSettings overflow-auto '>
          {
            icons.map((data) => {
              return (
                <li
                  id='iconItem'
                  className=' w-[90%] h-[60px] flex px-2 flex-col items-center gap-2 border-slate-200 hover:border-b-[3px] cursor-pointer pb-2'>
                  <div
                    className='text-[1.5em]'>
                    {data.icon}
                  </div>
                  <div
                    className='text-[12px] w-full font-semibold whitespace-nowrap'>
                    {data.name}
                  </div>
                </li>
              )
            })
          }
        </ul>
        <IoIosArrowForward
          id='scrollRightButton'
          className='text-[30px] cursor-pointer bg-white border rounded-3xl p-[6px] shadow-xl shadow-white absolute right-0 top-5 ms-10 md:block hidden'
        />
      </div>
      <div
        className='md:flex hidden border p-4 2xl:ms-0 ms-4 rounded-xl items-center text-[12px] font-semibold gap-2'>
        <PiSlidersHorizontal
          className=' text-[17px]'
        />
        <div>Filters</div>
      </div>
    </div>
  )
}
