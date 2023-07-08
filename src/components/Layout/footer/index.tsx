import React from 'react'
import MainFooter from './Footer'
import MobileFooter from './mobileFooter'

export default function Footer() {
  return (
    <div>
     <div className=' md:block hidden'>
      <MainFooter />
     </div>
     <div className=' md:hidden block'>
      <MobileFooter />
     </div>
    </div>
  )
}
