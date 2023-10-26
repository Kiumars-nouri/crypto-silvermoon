import pic from "../assets/financial-future.jpg"

const Subscribed = () => {
  return (
    <div className='bg-[#E3E1E11A] px-4 py-8 rounded-xl w-[350px] subs'>
        <p className='lg:text-[1.5rem] text-[1.25rem] mb-4 text-center'>
            We will contact you for <span className='h-gradient font-bold'>Identification</span>.
        </p>
        <img src={pic} alt="successful" className="rounded-lg"/>
    </div>
  )
}

export default Subscribed
