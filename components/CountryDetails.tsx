import { CountryProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface CountryDetailsProps {
  country: CountryProps; 
}


const CountryDetails = ({country}: CountryDetailsProps) => {

  return (
    <div className="grid xl:grid-cols-2 items-center mt-8 gap-8">
      <div>
        <Image 
        width={400}
        height={300}
        src={country.flags.svg} alt={country.flags.alt || `flag of ${country.name.common}`}
        className="aspect-video w-full"
        priority
        />
      </div>
      <div className='flex flex-col gap-8 ease-in-out duration-300'>
        <h2 className="text-2xl font-semibold text-very-dark-blue-text dark:text-white mt-2">{country.name.common}</h2>
        
        <div className='grid sm:grid-cols-2 text-very-dark-blue-text dark:text-white gap-y-2'>
          <p><span className='font-semibold'>Native Name: </span>
            { country.name.nativeName && Object.values(country.name.nativeName) ? (
              Object.values(country.name.nativeName)[0].official
            ): (
              country.name.official
            )}
          </p>
    
          <p><span className='font-semibold'>Population:</span> {Intl.NumberFormat("en-Us").format(country.population)}</p>
          <p><span className='font-semibold'>Region:</span> {country.region}</p>
          
          { country.subregion && 
            <p>
              <span className='font-semibold'>Sub Region:</span> {country.subregion}
            </p>
          }

          { country.capital && 
            <p>
              <span className='font-semibold'>Capital:</span> {country.capital}
            </p>
          }

          <p><span className='font-semibold'>Top Level Domain:</span> {country.tld}</p>
          
          { country.currencies && 
            <p>
              <span className='font-semibold'>currencies:</span> {Object.values(country.currencies)[0].name}
            </p>
          }

          { country.languages && 
            <p>
              <span className='font-semibold'>Languages:</span> {Object.values(country.languages).join(", ")}
            </p>
          }
        </div>

        { country.borders && 
        
          <div className='ease-in-out duration-300'>
            <span className='font-semibold text-very-dark-blue-text dark:text-white'>Border Countries:</span>
            <div className='flex gap-2 mt-2 flex-wrap'>
              {country.borders.map((border) => (
                <Link key={border} href={`/country/${border}`}>
                  <button className='w-[4rem] h-[2rem] bg-white dark:bg-dark-blue text-very-dark-blue-text
                   dark:text-white rounded shadow break-words'>{border}</button>
                </Link>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default CountryDetails