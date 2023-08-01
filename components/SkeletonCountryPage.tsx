import React from 'react'

const SkeletonCountryPage = () => {
  return (
    <div className= 'grid xl:grid-cols-2 items-center mt-8 gap-8 ease-in-out duration-300'>
      <div className='bg-gray-300 dark:bg-gray-600 animate-pulse aspect-video object-cover rounded-lg' />
      <div className='flex flex-col gap-8'>
        <div className='w-1/3 h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'/>
        <div className='w-3/3 h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'/>
        <div className='w-2/3 xl:w-full h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'/>
        <div className='w-3/3 h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'/>
        <div className='w-3/3 h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'/>
      </div>
    </div>
  )
}

export default SkeletonCountryPage