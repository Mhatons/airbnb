import React from 'react'

export default function UserCard(image: any) {
  return (
      <div className=' bg-zinc-200 py-3 px-2 rounded-r-md border-l shadow-md border-2 border-zinc-300'>
       <img src={image} className='rounded-full' alt="" />
      </div>
  )
}
