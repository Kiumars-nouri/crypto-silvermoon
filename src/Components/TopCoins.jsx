import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"


const TopCoins = () => {

    const [coins, setCoins] = useState([])


        useEffect(()=>{
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en")
            .then(res=>{
                setCoins(res.data)
                console.log(res.data)
            }).catch(error=> console.log(error))
        }, []);



  return (
    <section id='topCoins' className='mr-4 ml-4 xl:mx-[10%] lg:mx-[5%] pt-[10px] pb-[10px] text-[#E3E1E1] mt-[54px] lg:mt-[90px] 
    flex flex-col lg:flex-row gap-4 justify-evenly items-center scroll-mt-[90px]'>

        <div className='mt-[36px] max-xl:flex-1'>
            <h1 className='lg:text-[2.5rem] text-[1.5rem]'>With <span className='s-gradient text-[48px]'>silvermoon</span>,</h1>
            <h1 className='lg:text-[2.5rem] text-[1.5rem]'>be ahead of the curve</h1>
            <p className='lg:w-[420px] mt-6 text-justify'>Get access to free crypto currency market analyses from the experts. 
            Invest your saving on the most profitable coins and enjoy automated exchange to your local currency for shopping.</p>
        </div>

        <div className='mt-[36px] max-xl:flex-1'>
            <h1 className='lg:col-span-4 col-span-2 lg:text[72px] text-[32px] text-center'>Top coins of the day</h1>

            <div className='flex flex-wrap justify-center gap-4 lg:mt-0 mt-[36px]'>
            {coins.map((coin)=>{
                return(
                    <div key={coin.id} className='w-[150px] flex flex-col justify-between card items-center bg-[#47428d] rounded-lg p-4'>
                    <img src={coin.image} alt='coin_image' className='h-[64px] w-[64px]'/>
                    <div>{coin.id}</div>
                    <div>$ {coin.current_price.toLocaleString()}</div>
                    <div className={`${coin.price_change_percentage_24h < 0 ? "text-[#6b1024] font-bold" : "text-[green]"}`}>
                        % {coin.price_change_percentage_24h.toLocaleString(undefined, {maximumFractionDigits:3})}</div>
                    </div>
                )
            })}            
        </div></div>

    </section>
  )
}

export default TopCoins