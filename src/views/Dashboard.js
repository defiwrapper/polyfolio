import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

// Dashboard Component
// ------------------------------------------------------------------------------------------------------- //
const Dashboard = () => {
  
  let assets = [
    { symbol: 'USDT', name: 'Tether', alloc: 0.49, price: '1.00', changeUSD: 163.63, changePer: 15.32, valueUSD: 8310072.32, valueToken: 8310072.32 },
    { symbol: 'BTC', name: 'Bitcoin', alloc: 0.24, price: '48939.13', changeUSD: 163.63, changePer: 15.32, valueUSD: 1150066.50, valueToken: 10072.32 },
    { symbol: 'ETH', name: 'Ethereum', alloc: 0.23, price: '4303.00', changeUSD: 163.63, changePer: 15.32, valueUSD: 1150066.50, valueToken: 9072.32 },
    { symbol: 'UFO', name: 'UFO Coin', alloc: 0.02, price: '28.00', changeUSD: 163.63, changePer: 15.32, valueUSD: 1072.32, valueToken: 9072.32 },
    { symbol: 'GEL', name: 'Gelato', alloc: 0.01, price: '29.53', changeUSD: 163.63, changePer: 15.32, valueUSD: 1072.32, valueToken: 9072.32 },
    { symbol: 'CQT', name: 'Covalent', alloc: 0.01, price: '11.45', changeUSD: 163.63, changePer: 15.32, valueUSD: 1072.32, valueToken: 9072.32 },
    { symbol: 'FTM', name: 'Fantom', alloc: 0.01, price: '53.89', changeUSD: 163.63, changePer: 15.32, valueUSD: 1072.32, valueToken: 9072.32 },
    { symbol: 'MATIC', name: 'Polygon', alloc: 0.01, price: '73.89', changeUSD: 163.63, changePer: 15.32, valueUSD: 1072.32, valueToken: 9072.32 },
  ]

  let protocols = [
    { symbol: 'Badger', valueUSD: 5323.39, changeUSD: 163.63, changePer: 15.32, claimable: 183.92 },
    { symbol: 'ETH', valueUSD: 5323.39, changeUSD: 163.63, changePer: 15.32, claimable: 183.92 },
    { symbol: 'UFO', valueUSD: 5323.39, changeUSD: 163.63, changePer: 15.32, claimable: 183.92 },
    { symbol: 'BTC', valueUSD: 5323.39, changeUSD: 163.63, changePer: 15.32, claimable: 183.92 },
    { symbol: 'GEL', valueUSD: 5323.39, changeUSD: 163.63, changePer: 15.32, claimable: 183.92 },
  ]

  let networks = [
    { symbol: 'ETH', name: 'Ethereum', price: 5323.39 },
    { symbol: 'MATIC', name: 'Polygon', price: 5323.39 },
    { symbol: 'AVAX', name: 'Avalanche', price: 5323.39 },
    { symbol: 'MATIC', name: 'Polygon', price: 5323.39 },
    { symbol: 'AVAX', name: 'Avalanche', price: 5323.39 },
    { symbol: 'ETH', name: 'Ethereum', price: 5323.39 },
    { symbol: 'AVAX', name: 'Avalanche', price: 5323.39 },
    { symbol: 'ETH', name: 'Ethereum', price: 5323.39 },
  ]
  
  return (
    <>
      <Header width='full' />
      <Sidebar />
    
      <div className='ml-[19.5rem] mr-8 mt-8'>
        <h1 className='font-extrabold mb-8'>Dashboard</h1>

        <div>
          <div className='dark:text-[rgba(255,255,255,0.7)] text-grayTextWhite'>Net Worth</div>
          
          <div className='flex justify-between'> 
            <div>
              <h2>$13,337,337.00</h2>
              <div className='text-green3PF text-sm mt-px'><span>+0.02%</span><span className='ml-2 bg-[rgba(16,199,162,0.2)] rounded px-1'>+$0.56</span></div>
            </div>

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
          </div>
        </div>

        <div className='border border-t-0 border-r-0 border-l-0 dark:border-borderColor border-grayPF text-2xl flex mt-16 mb-8'>
          <div className='font-bold border-[5px] border-t-0 border-r-0 border-l-0 border-green2PF pb-4 mr-10 cursor-pointer'>Portfolio</div>
          <div className='dark:text-[rgba(255,255,255,0.8)] text-blueGrayPF cursor-pointer'>Transactions</div>
        </div>


        {/* Assets */}

        <div className="container">
          <div className="flex items-center justify-between">
            <div className='flex items-center'>
              <h3 className='dark:text-white2PF text-blueGrayPF mr-4'>Assets</h3>
              <div className="button-timeframe">1D</div>
            </div>

            <div className='flex items-center'>
              <div className='font-black text-2xl mr-6 '>$9,337,337.00</div>
              <div className="assets-fields mr-2" />
              <div className="unfold" />
            </div>
          </div>

          <div className="row mt-5 rounded-t-lg rounded-b-none font-Raleway font-extrabold text-grayTextDark flex tracking-widest">
            <div className='w-[24%]'>ASSET</div>
            <div className='w-[24%]'>ALLOCATION</div>
            <div className='w-[24%] text-right'>PRICE</div>
            <div className='w-[24%] text-right'>VALUE</div>
            <div className='w-[4%]'></div>
          </div>

    
          { !assets
              ? <h4 className='my-10 text-center'>Loading Assets...</h4>
              : assets.map((asset, index) =>
                <AssetRow
                  key={index}
                  index={index}
                  symbol={asset.symbol} 
                  name={asset.name} 
                  alloc={asset.alloc}
                  price={asset.price}
                  changeUSD={asset.changeUSD} 
                  changePer={asset.changePer} 
                  valueUSD={asset.valueUSD} 
                  valueToken={asset.valueToken} 
                />
              )
            }

        </div>


        {/* Protocols */}

        <div className="container mt-12">
          <div className="flex items-center justify-between">
            <div className='flex items-center'>
              <h3 className='dark:text-white2PF text-blueGrayPF mr-4'>Protocols</h3>
              <div className="button-timeframe">1D</div>
            </div>

            <div className='flex items-center'>
              <div className='font-black text-2xl mr-6 '>$3,837,337.00</div>
              <div className="assets-fields mr-2" />
              <div className="unfold" />
            </div>
          </div>

          <div className="row mt-5 rounded-t-lg rounded-b-none font-Raleway font-extrabold text-grayTextDark flex tracking-widest">
            <div className='w-[32%]'>PROTOCOL</div>
            <div className='w-[32%] text-right'>VALUE</div>
            <div className='w-[32%] text-right'>CLAIMABLE</div>
            <div className='w-[4%]'></div>
          </div>


          { !protocols
              ? <h4 className='my-10 text-center'>Loading Protocols...</h4>
              : protocols.map((protocol, index) =>
                <ProtocolRow
                  key={index}
                  index={index}
                  symbol={protocol.symbol} 
                  valueUSD={protocol.valueUSD} 
                  changeUSD={protocol.changeUSD}
                  changePer={protocol.changePer}
                  claimable={protocol.claimable} 
                />
              )
            }

        </div>


        {/* Networks */}

        <h3 className='dark:text-white2PF text-blueGrayPF mt-12 mb-4'>Networks</h3>
        <div className='mb-12 gap-8 grid grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]'>
          { !networks
            ? <h4 className='my-10 text-center'>Loading Networks...</h4>
            : networks.map((network, index) =>
              <NetworkBox
                key={index}
                index={index}
                symbol={network.symbol} 
                name={network.name} 
                price={network.price} 
              />
            )
          }
        </div>

        <Footer width='full' />

      </div>

      
    </>
  )}
// ------------------------------------------------------------------------------------------------------- //

export default Dashboard;


const AssetRow = (props) => {
  const {symbol, name, alloc, price, changeUSD, changePer, valueUSD, valueToken } = props;

  return(
    <div className="row border-t-0 flex cursor-pointer">
      <div className='w-[24%] h-10 flex flex-col justify-center bg-no-repeat bg-[left_center] bg-[length:40px] pl-14 text-lg font-extrabold leading-6' 
           style={{backgroundImage: `url('./crypto-icons/${symbol}.svg')` }}>{symbol}
        <div className='dark:text-[rgba(249,250,252,0.73)] text-grayTextWhite text-sm font-normal leading-4'>{name}</div>
      </div>

      <div className='w-[24%] h-10 flex items-center'><span className='bg-[rgba(39,198,159,0.2)] h-6 w-[3.25rem] font-bold rounded text-center'>{alloc*100}%</span></div>

      <div className='w-[24%] h-10 flex flex-col justify-center items-end text-lg font-bold leading-7'>${price}
        <div className='text-green3PF text-sm mt-px font-normal leading-4'><span>+${changeUSD}</span><span className='ml-[0.625rem] bg-[rgba(16,199,162,0.2)] rounded px-1'>+{changePer}%</span></div>
      </div>

      <div className='w-[24%] h-10 flex flex-col justify-center items-end text-lg font-bold leading-7'>${valueUSD}
        <div className='dark:text-[rgba(249,250,252,0.73)] text-grayTextWhite text-sm font-normal leading-4'>{valueToken} {symbol}</div>
      </div>

      <div className='w-[4%] h-10 flex items-center justify-center arrow-right' />
    </div>
)}


const ProtocolRow = (props) => {
  const {symbol, valueUSD, changeUSD, changePer, claimable } = props;

  return(
    <div className="row border-t-0 flex cursor-pointer">
      <div className='w-[32%] h-10 flex flex-col justify-center bg-no-repeat bg-[left_center] bg-[length:40px] pl-14 text-lg font-extrabold leading-6' 
           style={{backgroundImage: `url('./crypto-icons/${symbol}.svg')` }}>{symbol}
      </div>

      <div className='w-[32%] h-10 flex flex-col justify-center items-end text-lg font-bold leading-7'>${valueUSD}
        <div className='text-green3PF text-sm mt-px font-normal leading-4'><span>+${changeUSD}</span><span className='ml-[0.625rem] bg-[rgba(16,199,162,0.2)] rounded px-1'>+{changePer}%</span></div>
      </div>

      <div className='w-[32%] h-10 flex flex-col justify-center items-end text-base font-bold leading-7'>${claimable}</div>

      <div className='w-[4%] h-10 flex items-center justify-center arrow-right' />
    </div>
)}


const NetworkBox = (props) => {
  const {symbol, name, price} = props;

  return(
    <div className="container rounded-lg flex justify-between items-center cursor-pointer h-[6.5rem] pr-12">

      <div className='h-10 flex flex-col justify-center bg-no-repeat bg-[left_center] bg-[length:40px] pl-14 text-2xl font-extrabold' 
           style={{backgroundImage: `url('./crypto-icons/${symbol}.svg')` }}>{name}
        <div className='text-base font-normal'>${price}</div>
      </div>

      <div className='h-10 flex items-center justify-center arrow-right bg-[right_center]' />

    </div>
)}
