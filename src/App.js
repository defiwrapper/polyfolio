import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import Elements from './components/Elements';
import Connect from './views/Connect';
import Dashboard from './views/Dashboard';
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// App Component
// ------------------------------------------------------------------------------------------------------- //
const App = () => {
      
    const [address, setAddress] = useState('');
    const [walletStatus, setWalletStatus] = useState('disconnected');

    async function loadWeb3() {
      if (window.ethereum) {
        setWalletStatus('connecting');
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner()
        setAddress(await signer.getAddress());
        setWalletStatus('connected');
      }
      else{
        setWalletStatus('NA');
      }
    }

    // useEffect(() => {
    //   loadWeb3()
    // }, []);

    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Connect />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/elements" element={<Elements />} />
            {/* <Route path="#" element={<View loadWeb3={loadWeb3} address={address} walletStatus={walletStatus} />} /> */}
          </Routes>
        </BrowserRouter>

      </>
    )
  }
// ------------------------------------------------------------------------------------------------------- //

export default App;