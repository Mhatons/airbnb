import React from 'react'

interface input {
 title: string,
 value: string,
 text: string,
 fn: any,
 type: string,
 err: string
}

export default function Input({
 title,
 type,
 fn,
 value,
 text,
 err
}: input) {
 return (
  <div>
   <header className='text-[14px] pb-1 pt-5 text-left'>
    {title}
   </header>
   <input
    className={`bg-[#F9F9F9] w-full
     rounded-md text-[14px] border-1
     h-11 outline-none focus:border-white border text-[#424242]`}
    type={type}
    onChange={fn}
    placeholder={text}
    value={value}
   />
   <span className='text-[10px] text-red-600'>{err}</span>
  </div>
 )
}
