import Image from "next/image"

const SkeletonCountryCard = () => {
  return (
    <article className='max-w-[300px] w-full shadow-md rounded-lg'>

      <div className="bg-gray-300 dark:bg-gray-600 animate-pulse
        max-w-[300px] h-[170px] rounded-t-lg"
      />
     
      <div className='bg-white dark:bg-dark-blue p-4 flex flex-col gap-4 rounded-b-lg'>
        <div className='w-2/3 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'/>
        
        <div className='font-light flex flex-col gap-3 text-sm text-gray-500'>
          <div className='w-1/4 h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'/>
          <div className='w-2/3 h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'/>
          <div className='w-1/2 h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'/>
        </div>
      </div>
    </article>
  )
}

export default SkeletonCountryCard