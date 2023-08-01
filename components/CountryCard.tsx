import { CountryProps } from '@/types'
import Image from 'next/image'
import React from 'react'

interface CardCountryProps {
  country: CountryProps
}

const CountryCard = ({country}: CardCountryProps) => {
  const { name, population, region, capital, flags } = country

  return (
    <article className='max-w-[300px] shadow-md rounded-lg'>
      <Image
        width={300}
        height={200}
        src={flags.svg} 
        alt={flags.alt || `flag of ${name.common}`}
        className="aspect-video object-cover rounded-t-lg"
        priority
      />

      <div className='bg-white dark:bg-dark-blue ease-in-out duration-300 p-4 flex flex-col gap-2 rounded-b-lg'>
        <h3 className='text-base font-semibold text-very-dark-blue-text dark:text-white line-clamp-1'>{name.common}</h3>
        <div className='font-light flex flex-col gap-1 text-sm text-very-dark-blue-text dark:text-white'>
          <p><span className='font-semibold'>Population:</span> {population}</p>
          <p><span className='font-semibold'>Region:</span> {region}</p>
          <p className='line-clamp-1'><span className='font-semibold'>Capital:</span> {capital}</p>
        </div>
      </div>
    </article>
    
  )
}

export default CountryCard