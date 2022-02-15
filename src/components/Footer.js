import React from 'react';
import logoLight from '../assets/logos/light.svg'
import logoDark from '../assets/logos/dark.svg'
import {useRecoilValue} from 'recoil';
import {isDarkAtom} from '../Atoms';

// Footer Component
// ------------------------------------------------------------------------------------------------------- //
const Footer = (props) => {
    const isDark = useRecoilValue(isDarkAtom);
    const {width} = props
    
    return(
    <footer className={`flex m-auto h-[6.5rem] border border-b-0 border-r-0 border-l-0 dark:border-borderColor border-grayPF ${width === 'full' ? 'w-full' : 'w-[1300px]'}`}>

        <div className='flex items-center justify-between dark:text-footerText blueGrayPF text-sm font-normal w-full'>

            <div className='flex justify-center items-center gap-6'>
              <a href="#top" className='mr-4'><img src={isDark ? logoLight : logoDark} alt='Polyfolio Logo'/></a>
              <a href="#">Polywrap</a>
              <a href="#">Docs</a>
              <a href="#">Roadmap</a>
              <a href="#">Support</a>
            </div>

            <a href="#">© 2021 Polyfolio</a>

        </div>
    </footer>
)}
// ------------------------------------------------------------------------------------------------------- //

export default Footer;