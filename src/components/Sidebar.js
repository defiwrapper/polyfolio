import React from 'react';
import profilePic from '../assets/icons/profile.png';

// Sidebar Component
// ------------------------------------------------------------------------------------------------------- //
const Sidebar = () => 
    <div className='flex flex-col justify-between h-[calc(100vh-5.25rem)] w-[17.5rem] pl-8 py-10 fixed'>

      <div className='flex flex-col'>
        <div className='flex mb-4'>
          <div className="w-12 h-12 mr-2 bg-white rounded-full">
          <img src={profilePic} alt="Profile" />
          </div>
          <div className='flex flex-col'>
            <div className='address leading-[20.5px]'>0x378...3832</div>
            <div className='text-2xl font-black leading-[27.5px]'>$13,337,337.00</div>
          </div>
        </div>

        <div className='text-lg w-[13.5rem] pt-4 border border-b-0 border-r-0 border-l-0 dark:border-borderColor border-grayPF font-semibold'>
          <div className='h-[48px] dark:bg-[rgba(30,43,69,0.67)] bg-[#F7FFFB] rounded dashboard flex items-center mb-2'>Dashboard</div>
          <div className='h-[48px] rounded settings flex items-center'>Settings</div>
        </div>
      </div>

      <div>
        <div className='pt-6 border border-b-0 border-r-0 border-l-0 dark:border-borderColor border-grayPF w-[13.5rem] mb-4'>
          <select name="networks" id="networks" className='w-52 h-14'>
            <option value="Ethereum">Ethereum</option>
            <option value="twitter">Avalanche</option>
            <option value="discord">Matic</option>
            <option value="discord">Binance</option>
            <option value="discord">Fantom</option>
            <option value="discord">Arbitrum</option>
            <option value="discord">Harmony</option>
          </select>
        </div>
        
        <div className='dark:text-[rgba(249,250,252,0.73)] text-grayTextWhite text-lg font-semibold flex flex-col'>
          <a href="#" className="polywrap-link mb-2">Polywrap</a>
          <a href="#" className="docs-link mb-2">Docs</a>
          <a href="#" className="support-link">Support</a>
        </div>

        <div className='flex mt-6'>
          <a href="#" className="twitter mr-6" />
          <a href="#" className="github mr-6" />
          <a href="#" className="discord" />
        </div>
      </div>

    </div>
// ------------------------------------------------------------------------------------------------------- //

export default Sidebar;