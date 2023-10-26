
const users = [
    {
        num: "280M",
        txt: "active users",
    },
    {
        num: "230",
        txt: "trusted by companies",
    },
    {
        num: "190M",
        txt: "transactions",
    },
]


const hero = () => {

    function handleCLick(){
        document.getElementById("contact").scrollIntoView({behavior : "smooth"})
    }


  return (
   <section id='home' className='pb-[10px] text-[#E3E1E1] mt-[60px] pt-[20px] scroll-mt-[90px] hero'>

    <div className='flex flex-wrap lg:flex-row flex-col lg:justify-evenly pt-[10px] pb-[10px] mx-4 2xl:mx[20%] md:mx-[10%] 2xl:mt-16'>
    <div className='relative mb-[48px] lg:mt-[20px]'>
        <div className='mb-6'>
            <h1 className='lg:text-[2.5rem] text-[1.5rem]'>The Next</h1>
            <h1 className='h-gradient lg:text-[2.5rem] text-[1.5rem] font-bold'>Generation</h1>
            <h1 className='lg:text-[2.5rem] text-[1.5rem]'>Payment Method</h1>

            <div className='b-gradient rounded-full w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] flex items-center justify-center
            absolute top-[10px] lg:top-[30px] right-[10px]'
            >
                <button onClick={handleCLick}
                className='p-4 lg:text-[18px] text-[12px] bg-[#221f61] rounded-full w-[52px] h-[52px] lg:w-[108px] lg:h-[108px] flex justify-center items-center'>
                    Get Started
                </button>
            </div>
        </div>
        <p className='max-w-[480px] text-justify'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
           We examine annual percentage rates, annual fees.</p>
        </div>

    
    <div className='flex justify-center lg:mt-[20px]'>
        <div className='earth'></div>
    </div>
    </div>

    <div className='mt-[16px] flex flex-col flex-wrap lg:flex-row justify-evenly text-center items-center mx-4 2xl:mx[20%] lg:mx-[10%]'>
        {users.map((item, i)=>{
            return(
            <div key={i} className='mb-4 lg:mb-0 flex justify-center items-center'>
              <p className='lg:text-[40px] text-[24px] mr-2'>+{item.num}</p>
              <p className='uppercase lg:text-[24px] text-[18px] h-gradient font-bold'>{item.txt}</p>
            </div>
            )})}
    </div>

   </section>
  )
}

export default hero


