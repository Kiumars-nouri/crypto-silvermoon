import React from 'react'
import logo from "../assets/silvermoonlogo.png"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"

const Footer = () => {
  return (
    <section className='md:flex grid grid-cols-3 mr-4 ml-4 lg:mx-[10%] justify-between items-center pt-[10px] pb-[10px]
    mt-[90px] border-t-[4px] border-[#E3E1E1]'
    >
        <div className="flex items-center text-[#E3E1E1] col-span-2">
            <img src={logo} alt='silvermoon_logo' className='w-[48px] h-[48px] mr-2'/>
            <p className='md:text-[28px] text-[18px] s-gradient'>Silvermoon</p>
        </div>

        <div className='text-[#E3E1E1] col-span-2'>
            <p>E-mail: <a href="mailto:kiumars90@yahoo.com?subject=more%20information" className='underline'>info@silvermoon.com</a></p>
            <p>Phone: <a href='tel:123456789' className='underline'>123456789</a></p>
        </div>

        <div className='md:grid-cols-4 grid gap-x-[16px] gap-y-[8px] row-span-2 col-start-3 row-start-1 justify-end'>
            <a href='https://www.instagram.com/' target='_blank'><img src={instagram} alt='instagram' className='w-[36px] h-[36px]'/></a>
            <a href='https://twitter.com/?lang=en' target='_blank'><img src={twitter} alt='twitter' className='w-[36px] h-[36px]'/></a>
            <a href='https://www.facebook.com/' target='_blank'><img src={facebook} alt='facebook' className='w-[36px] h-[36px]'/></a>
            <a href='https://www.linkedin.com/' target='_blank'><img src={linkedin} alt='linkedin' className='w-[36px] h-[36px]'/></a>
        </div>

    </section>
  )
}

export default Footer