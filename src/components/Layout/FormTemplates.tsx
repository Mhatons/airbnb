import React from 'react'

interface details {
  title: string,
  children: any
}

export default function FormTemplates({
  title,
  children
}: details) {
  return (
    <div className="relative flex justify-center mt-12">
      <div className="scrollBarSettings w-[30%] max-h-[85vh] overflow-y-scroll rounded-xl bg-slate-50 m-auto border p-10 absolute  border-zinc-200">
        <header className="">
          {title}
        </header>
        {children}
      </div>
    </div>
  )
}
