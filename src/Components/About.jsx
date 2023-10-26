import React from 'react'
import star from "../assets/star.png"
import shield from "../assets/shield.png"
import send from "../assets/send.png"
import ButtonHoC from "./ButtonHoC.jsx"

const About = () => {

  return (
    <section id='about' className='mr-4 ml-4 xl:mx-[10%] lg:mx-[5%] pt-[10px] pb-[10px] text-[#E3E1E1] mt-[54px] lg:mt-[90px] 
    flex flex-col lg:flex-row gap-4 justify-evenly items-center scroll-mt-[90px]'>

        <div className='mt-[36px] max-xl:flex-1'>
        <h1 className='lg:text-[2.5rem] text-[1.5rem]'>You do the <span className='h-gradient font-bold'>business</span>,</h1>
        <h1 className='lg:text-[2.5rem] text-[1.5rem]'>we’ll handle the <span className='h-gradient font-bold'>money</span>.</h1>
        <p className='max-w-[480px] mt-6 text-justify'>With the right credit card, you can improve your financial life by building credit,
         earning rewards and saving money securely.</p>
        </div>

        <div className='flex flex-col max-w-[480px] mt-[36px]'>

          <div className='flex flex-row card justify-between items-center bg-[#47428d] rounded-[20px] px-2 pb-2'>
          <div className='mr-[16px] icon min-w-[48px] min-h-[48px] flex justify-center items-center rounded-[20px]'>
              <img src={star} alt='star' className='w-[32px] h-[32px] object-contain'/>
            </div>
            <div className='mr-2'>
              <h1 className='mb-1 text-[24px] font-bold'>Rewards</h1>
              <p className='text-[16px] text-justify'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
            </div>            
          </div>

          <div className='flex flex-row card justify-between items-center bg-[#47428d] rounded-[20px] px-2 pb-2 mt-3'>
          <div className='mr-[16px] icon min-w-[48px] min-h-[48px] flex justify-center items-center rounded-[20px]'>
              <img src={shield} alt='star' className='w-[32px] h-[32px] object-contain'/>
            </div>
            <div className='mr-2'>
              <h1 className='mb-1 text-[24px] font-bold'>Rewards</h1>
              <p className='text-[16px] text-justify'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
            </div>            
          </div>

          <div className='flex flex-row card justify-between items-center bg-[#47428d] rounded-[20px] px-2 pb-2 mt-3'>
            <div className='mr-[16px] icon min-w-[48px] min-h-[48px] flex justify-center items-center rounded-[20px]'>
              <img src={send} alt='star' className='w-[32px] h-[32px] object-contain'/>
            </div>
            <div className='mr-2'>
              <h1 className='mb-1 text-[24px] font-bold'>Rewards</h1>
              <p className='text-[16px] text-justify'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
            </div>            
          </div>
           

        </div>
    </section>
  )
}

export default About