import React from 'react'
import { BiGlobe } from 'react-icons/bi'
import { IoChevronUpOutline } from 'react-icons/io5'
import { MdEditAttributes } from "react-icons/md"

export default function MainFooter() {
  const footerItems = {
    year: "© 2023 Airbnb, Inc",
    terms: "Terms",
    site: "Sitemap",
    privacy: "Privacy",
    choices: "Your Privacy Choices",
    icon: <MdEditAttributes />,
    destinations: "Destinations",
    iconGlobe: <BiGlobe />,
    language: "English (US)",
    currency: "$ USD",
    support: "Support & resources",
    iconArrow: <IoChevronUpOutline />
  }
  return (
    <div className='lg:w-[92%] w-[95%] m-auto flex justify-between p-2 text-sm items-center'>
      <ul className='flex gap-x-2 items-center flex-wrap '>
        <li>{footerItems.year}</li>
        <li>{footerItems.terms}</li>
        <li>{footerItems.site}</li>
        <li>{footerItems.privacy}</li>
        <li>{footerItems.choices}</li>
        <li className=' text-[#0066FF] text-3xl ps-2'>{footerItems.icon}</li>
      </ul>
      <ul className='flex gap-4items-center font-semibold whitespace-nowrap '>
        <li className='text-lg'>{footerItems.iconGlobe}</li>
        <li>{footerItems.language}</li>
        <li>{footerItems.currency}</li>
        <li className='flex items-center gap-1'>
          {footerItems.support}
          <span className='text-lg'>{footerItems.iconArrow}</span>
        </li>
      </ul>
    </div>
  )
}
