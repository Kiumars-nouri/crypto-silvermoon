import React from 'react'
import features from "../assets/features.jpg"
import apple from "../assets/apple.svg"
import google from "../assets/google.svg"
import ButtonHoC from './ButtonHoC'

const Features = () => {
  return (
    <section id='features' className='mr-4 ml-4 xl:mx-[10%] lg:mx-[5%] pt-[10px] pb-[10px] text-[#E3E1E1] mt-[54px] lg:mt-[90px] 
    flex gap-2 flex-col lg:flex-row justify-evenly items-center scroll-mt-[90px]'>

        <div className='lg:w-[430px] mt-[36px] lg:h-[330px] b-gradient flex max-xl:flex-1 items-center justify-center rounded-[16px]'>
            <img src={features} alt='automatization_paying_and_investment' 
            className='rounded-[10px] lg:w-[420px] lg:h-[320px] '/>
        </div>

        <div className='mt-[36px] '>
            <div>
                <h1 className='lg:text-[2.5rem] text-[1.5rem]'>Easily control your</h1>
                <h1 className='lg:text-[2.5rem] text-[1.5rem]'><span className='h-gradient font-bold'>Billing </span>&
                <span className='h-gradient font-bold'> Investment</span></h1>
            </div>

            <p className='max-w-[480px] mt-6 text-justify'>Manage all of your payment methods, subscribtions, and bills with ease of mind 
            while investing simultaneously on your favourite coins. Have access to your account anywhere, anytime.</p>
            
            <div className='flex items-center justify-evenly mb-2'>

            <ButtonHoC btn={<a href='https://www.apple.com/app-store/' target='_blank'><img src={apple} alt='app_store' className='sm:w-[160px] sm:h-[54px]'/></a>} />
            <ButtonHoC btn={<a href='https://play.google.com/' target='_blank'><img src={google} alt='google_play' className='sm:w-[160px] sm:h-[54px]' /></a>} />
            
            </div>
            
        </div>



    </section>
  )
}

export default Features