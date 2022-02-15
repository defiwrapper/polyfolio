import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Connect Component
// ------------------------------------------------------------------------------------------------------- //
const Connect = () => {
  
  return (
    <>
      <Header />

      <div className='gap-8 mx-4 flex flex-col justify-center items-center h-[calc(100vh-11.75rem)]'>
        <h1 className='text-[4rem] font-extrabold'><span className='text-green4PF'>DeFi</span> - Finally all in one place</h1>
        <div className="subtitle1 text-2xl font-normal text-center">Polyfolio makes it easy to manage all of your DeFi assets and protocols.<br/>Connect your wallet to get started.</div>
        <a href='/dashboard' className="button-filled-big w-fit leading-6">Connect Wallet</a>
      </div>

      <Footer />
    </>
  )}
// ------------------------------------------------------------------------------------------------------- //

export default Connect;