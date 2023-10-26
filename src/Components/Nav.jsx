import React from 'react'
import { useState } from 'react'
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import logo from "../assets/silvermoonlogo.png"

const links = [
  {
    text: "Home",
    href: "#home",
  },
  {
    text: "About Us",
    href: "#about",
  },
  {
    text: "Features",
    href: "#features",
  },
  {
    text: "TopCoins",
    href: "#topCoins",
  },
  {
    text: "Charts",
    href: "#charts",
  },
  {
    text: "Contact",
    href: "#contact",
  }
]

const Nav = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick =() => {setToggle((prev)=> !prev)};


  return (
    <nav className='flex fixed top-0 left-0 pl-[16px] lg:pl-0 pr-[16px] lg:pr-0 pb-[10px] z-10 w-[100vw]
    pt-[10px] bg-[#030120]'
    >
        <div className="flex items-center text-[#E3E1E1] mr-auto lg:ml-[10%]">
            <img src={logo} alt='silvermoon_logo' className='w-[48px] h-[48px] mr-2'/>
            <p className='lg:text-[28px] text-[18px] s-gradient'>Silvermoon</p>
        </div>

      
            <ul className='list-non lg:flex hidden items-center lg:mr-[10%]'>
              {links.map((item, i)=>{
                return(
                  <li key={i}><a href={item.href}>{item.text}</a></li>
                )
              })}   
            </ul>
       

        <div className="lg:hidden flex">
          <img src={toggle ? close : menu} alt="menu"
          className="mt-[10px] w-[32px] h-[32px] object-contain"
          onClick={handleClick}
          />


          <div className={`${toggle ? 'flex' : 'hidden'} p-2 absolute top-12 
          right-0 mx-4 min-w-[140px] rounded-xl sidebar z-10`}>

        <ul className="list-non flex justify-end items-center flex-1 flex-col mt-[6px]
        bg-[#47428de6] rounded-xl">
          {links.map((item, i)=>{
            return(
              <li key={i} className="pb-[4px] pt-[4px]"><a href={item.href} onClick={handleClick}>
                {item.text}
              </a></li>
            )
          })}
        </ul>

          </div>
        </div>

    </nav>
  )
}

export default Nav