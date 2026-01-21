import Link from 'next/link'
import React from 'react'

const PracticeLayout = ({
  children,
  marketingSlot,
  salesSlot
}:{children:React.ReactNode,
  marketingSlot:React.ReactNode,
  salesSlot:React.ReactNode
}) => {
  return (
    <section>
      <nav className='flex gap-2'>
        <Link href={'/development'} className='rounded px-4 py-3 dark:bg-gray-500 dark:text-white bg-gray-200 text-gray-800 '>Department</Link>
        <Link href={'/marketing'} className='rounded px-4 py-3  dark:bg-gray-500 dark:text-white bg-gray-200 text-gray-800'>Marketing</Link>
        <Link href={'/marketing/setting'} className='rounded px-4 py-3  dark:bg-gray-500 dark:text-white bg-gray-200 text-gray-800'>Settings</Link>
        <Link href={'/sales'} className='rounded px-4 py-3  dark:bg-gray-500 dark:text-white bg-gray-200 text-gray-800'>Sales</Link>
        <Link href={'/testing'} className='rounded px-4 py-3  dark:bg-gray-500 dark:text-white bg-gray-200 text-gray-800'>Testing</Link>
        
      </nav>
      <div className='flex'>
      {marketingSlot}
      {salesSlot}
      </div>
      {children}
    </section>
  )
}

export default PracticeLayout