import React from 'react'

const ButtonHoC = (props) => {
  return (
    <div className='b-gradient text-[18px] md:w-[170px] md:h-[64px] w-[130px] h-[50px] flex items-center justify-center rounded-lg mt-6'>
            <button className='md:w-[160px] md:h-[54px] w-[120px] h-[40px] bg-[#221f61] rounded-lg'>
                {props.btn}
            </button>
    </div>
  )
}

export default ButtonHoC