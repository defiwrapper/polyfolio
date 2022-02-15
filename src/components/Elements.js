import React, { useState, useEffect } from 'react';
import * as constants from '../Constants';
import axios from "axios";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";

// Elements Component
// ------------------------------------------------------------------------------------------------------- //
const Elements = () => {

  // Light/Dark Theme State
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "light" ? false : true);

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

  return (
    <div className='flex flex-col gap-2 m-4'>

        {/* Buttons */}
        <h3 className='text-greenPF mt-6 mb-3'>Buttons</h3>
        <button className='button-filled'>Button</button>
        <button className='button-filled-big'>Button</button>
        <button className='button-unfilled'>Button</button>
        <button className='button-icon'></button>
        <hr className='opacity-25 mt-4'/>


        {/* Inputs */}
        <h3 className='text-greenPF mt-6 mb-3'>Inputs</h3>
        <input type="text" placeholder='Search by ENS name or address....' />
        <input type="search" placeholder='Search by ENS name or address....' />
        <hr className='opacity-25 mt-4'/>


        {/* Select */}
        {/* TODO: Check mockups/requirements for select and multiple select */}
        <h3 className='text-greenPF mt-6 mb-3'>Select</h3>
        <select name="networks" id="networks" >
          <option value="" selected disabled hidden>Networks - 7/7</option>
          <option value="Ethereum">Ethereum</option>
          <option value="twitter">Avalanche</option>
          <option value="discord">Matic</option>
          <option value="discord">Binance</option>
          <option value="discord">Fantom</option>
          <option value="discord">Arbitrum</option>
          <option value="discord">Harmony</option>
        </select>
        <hr className='opacity-25 mt-4'/>


        {/* Checkbox */}
        <h3 className='text-greenPF mt-6 mb-3'>Checkbox</h3>
        <div className="checkbox">
          <input type="checkbox" id="checkbox" checked/>
          <label for="checkbox">&nbsp;&nbsp;One</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="checkbox2"/>
          <label for="checkbox2">&nbsp;&nbsp;Two</label>
        </div>
        <hr className='opacity-25 mt-4'/>


        {/* Header Elements */}
        <h3 className='text-greenPF mt-6 mb-3'>Header Elements</h3>
        <div className='gas'>78</div>
        <div className='currency'>USD</div>
        <div className='help'/>

        {/* Light/Dark Theme Toggle */}
        <label className='w-fit' htmlFor="toggle">
          <div className={`toggle ${isDark ? "disabled" : "enabled"}`}>
            <div className="icons">
              <SunIcon />
              <MoonIcon />
            </div>
            <input id="toggle" name="toggle" type="checkbox" checked={isDark} onClick={() => toggleThemeChange()} />
          </div>
        </label>

    </div>
  )}
// ------------------------------------------------------------------------------------------------------- //


export default Elements;