"use client"

import { SearchStatus } from 'iconsax-react'
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (value: string) => void;
}


const SearchBar = ({onSearch}: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleSearch = (value: string) => {
    setSearchValue(value)
    onSearch(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='relative flex items-center'>
        <SearchStatus 
          variant='Broken' 
          className='absolute ml-4 text-dark-gray dark:text-white '/>
        <input 
          type="text"
          name="country"
          placeholder='Search for a country...'
          className='pl-14 pr-2 h-[3rem] w-full xs:w-[20rem] rounded-md shadow-md text-dark-gray dark:text-white
          placeholder:text-dark-gray placeholder:text-sm border-transparent border-2 focus:border-dark-gray 
          focus:border-2 focus:outline-none bg-white dark:bg-dark-blue ease-in-out duration-300 
          text-sm'
          onChange={(e) => handleSearch(e.target.value)}
          />
      </div>
    </form>
  )
}

export default SearchBar