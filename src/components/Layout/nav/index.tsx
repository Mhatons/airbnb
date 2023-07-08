import React from 'react'
import Nav from "./Nav"
import MobileNav from './mobileNav'

export default function Navigation() {
  return (
    <div>
    <div className='md:block hidden'>
     <Nav />
     </div>
     <div className=' md:hidden block'>
     <MobileNav />
     </div>
    </div>
  )
}
