import React, { useState, useEffect } from 'react';
import logoLight from '../assets/logos/light.svg'
import logoDark from '../assets/logos/dark.svg'
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import {useRecoilState, useRecoilValue} from 'recoil';
import {isDarkAtom} from '../Atoms';

// Header Component
// ------------------------------------------------------------------------------------------------------- //
const Header = (props) => {
  const isDark = useRecoilValue(isDarkAtom);
  const {width} = props

  return (
    <header className='sticky top-0 flex items-center h-[5.25rem] dark:bg-[rgba(30,43,69,0.2)] bg-[rgba(255,255,255,0.2)] backdrop-blur-2xl border border-t-0 border-r-0 border-l-0 dark:border-borderColor border-grayPF sticy z-50'>
      <div className={`flex items-center m-auto justify-between ${width === 'full' ? 'w-full px-8' : 'w-[1350px]'}`}>

          {/* Logo & Search */}
          <div className='flex justify-center items-center'>
            <a href="#top" className={`${width === 'full' ? 'mr-[139px]' : 'mr-6'}`}><img src={isDark ? logoLight : logoDark} alt='Polyfolio Logo'/></a>
            <input type="search" placeholder='Search by ENS name or address....' />
          </div>

          {/* Right Header Elements */}
          <div className='flex justify-center items-center gap-6'>
            <div className='gas'>78</div>
            <div className='currency'>USD</div>

            {/* Light/Dark Theme Toggle */}
            <ThemeToggle />

            <div className='help'/>
          </div>

      </div>
    </header>
  )}
    
// ------------------------------------------------------------------------------------------------------- //
export default Header;


// ThemeToggle Component
// ------------------------------------------------------------------------------------------------------- //
const ThemeToggle = () => {
  
  // Light/Dark Theme State
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  // Light/Dark Theme Load from Local Storage
  useEffect(() => {
    localStorage.getItem("theme") === "light" ? document.querySelector('html').classList.remove('dark') : document.querySelector('html').classList.add('dark')
  },[]);

  // Detect Light/Dark State & Apply Theme & Save in Local Storage
  const toggleThemeChange = () => {
    if (isDark === false) {
      localStorage.setItem("theme", "dark");
      document.querySelector('html').classList.add('dark')
      setIsDark(true);
    } else {
      localStorage.setItem("theme", "light");
      document.querySelector('html').classList.remove('dark')
      setIsDark(false);
    }
  }

  return(
    <label className='w-fit' htmlFor="toggle">
      <div className={`toggle ${isDark ? "disabled" : "enabled"}`}>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input id="toggle" name="toggle" type="checkbox" checked={isDark} onClick={() => toggleThemeChange()} />
      </div>
    </label>
)}
// ------------------------------------------------------------------------------------------------------- //