"use client";

import { Moon, Sun1 } from "iconsax-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("Light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme){
      setTheme(savedTheme)
    }else {
      localStorage.setItem('theme', 'Light')
    }
  },[])

  useEffect(()=> {

    if (theme === "Dark") {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem("theme", theme)
    
  },[theme])

  const toggleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return (
    <header className="w-full absolute z-[10] bg-white dark:bg-dark-blue shadow-sm ease-in-out duration-300">
      <nav
        className="max-width flex justify-between 
      items-center sm:px-16 px-6 py-4 "
      >
        <Link href={'/'} >
          <h1 className="font-semibold text-sm xs:text-xl text-very-dark-blue-text
           dark:text-white">
            Where in the World?
          </h1>
        </Link>

        <button
          onClick={toggleTheme}
          className="flex gap-x-2 items-center text-xs xs:text-base text-very-dark-blue-text 
          dark:text-white font-semibold p-1"
        >
          {theme === "Light" ? (
            <>
              <Moon size={22} variant="Broken" />
              Dark mode
            </>

            ) : (
              <>
                <Sun1 size={22} variant="Broken" />
                Light Mode
              </>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
