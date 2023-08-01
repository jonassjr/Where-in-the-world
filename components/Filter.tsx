"use client"

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UpdateSearchParams } from '@/utils';
import { CountryProps } from '@/types';

interface FilterProps {
  countries: CountryProps[];
}

const Filter: React.FC<FilterProps> = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Filter by Region");

  const setItem = (value: string) => {
    setSelected(value);
    handleUpdateParams(value);
  };

  const handleUpdateParams = (value: string) => {
    const newPathName = UpdateSearchParams(value.toLowerCase());
  
    if (value.toLowerCase() === 'all') {
      newPathName.replace('/all', '');
    }
  
    router.push(newPathName);
  };
  
  
  
  return (
    <DropdownMenu.Root 
      onOpenChange={setIsOpen}
      >
      <DropdownMenu.Trigger asChild >
        <button className='flex items-center w-[220px] h-[3rem] justify-between
          bg-white dark:bg-dark-blue shadow-md px-6 rounded-lg text-sm font-semibold text-dark-gray 
          dark:text-white ease-in-out duration-300 border-transparent border-2 focus:border-2 focus:border-dark-gray focus:outline-none'>
          {selected}
          {isOpen ? 
          <ArrowUp2 variant='Broken' size={16}/>:
          <ArrowDown2 variant='Broken' size={16}/>
          }
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal> 
        <DropdownMenu.Content className="min-w-[220px] mt-2 bg-white dark:bg-dark-blue rounded-md p-2 shadow-md text-very-dark-blue-text dark:text-white">
          <DropdownMenu.Item  
            className='h-[2rem] outline-none flex items-center rounded-md cursor-default
             data-[highlighted]:bg-dark-gray data-[highlighted]:text-white px-4 '
            onSelect={() => setItem("Africa")}
             >            
              Africa
          </DropdownMenu.Item>
          <DropdownMenu.Item 
            className='h-[2rem] outline-none flex items-center rounded-md cursor-default
             data-[highlighted]:bg-dark-gray data-[highlighted]:text-white px-4'
             onSelect={() => setItem("America")}

             >
            America
          </DropdownMenu.Item>
          <DropdownMenu.Item 
            className='h-[2rem] outline-none flex items-center rounded-md cursor-default
             data-[highlighted]:bg-dark-gray data-[highlighted]:text-white px-4'
             onSelect={() => setItem("Asia")}

             >
            Asia
          </DropdownMenu.Item>
          <DropdownMenu.Item 
            className='h-[2rem] outline-none flex items-center rounded-md cursor-default
             data-[highlighted]:bg-dark-gray data-[highlighted]:text-white px-4'
             onSelect={() => setItem("Europe")}
             >
            Europe
          </DropdownMenu.Item>
          <DropdownMenu.Item 
            className='h-[2rem] outline-none flex items-center rounded-md cursor-default
             data-[highlighted]:bg-dark-gray data-[highlighted]:text-white px-4'
             onSelect={() => setItem("Oceania")}
             >
            Oceania
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default Filter