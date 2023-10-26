import ContactForm from './ContactForm'
import {useState} from "react"
import Subscribed from './Subscribed'

const data = [
    {
        t1: "Digitization",
        t2: "Technology",
        txt: "The future of the banking system is expected to be increasingly digital and technologically-driven, with a decline in the significance of traditional brick-and-mortar branches."
    },
    {
        t1: "Blockchain",
        t2: "Cryptocurrencies",
        txt: "Emerging technologies like blockchain and cryptocurrencies may have a transformative impact on the financial sector, potentially reducing the need for traditional intermediaries."
    },
    {
        t1: "Data Analytics ",
        t2: "Personalization",
        txt: "The banking industry will rely heavily on data analytics and artificial intelligence to provide more personalized financial services, but it will also need to address security and privacy concerns."
    },
]

const Contact = () => {
    const [form, setForm] = useState()
    console.log(form)

  return (
    <section id='contact' className='mx-4 xl:mx-[10%] lg:mx-[5%] py-[10px] text-[#E3E1E1] mt-[54px] lg:mt-[90px] scroll-mt-[90px]'>

        <h1 className='lg:text-[2.5rem] text-[1.5rem]'>
            Step into the <span className='h-gradient font-bold'>Future</span> banking!
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center mt-8'>

            <div className='flex justify-center items-start flex-col'>
                {data.map((item, i)=>{
                    return(
                        <div>
                            <h2 className='lg:text-[1.5rem] text-[1.25rem]'>
                            <span className='h-gradient font-bold'>{item.t1}</span> and <span className='h-gradient font-bold'>{item.t2}</span>:
                            </h2>
                            <p className='lg:w-[520px] mb-6 text-justify'>
                                {item.txt}
                            </p>
                        </div>
                    )})}
            </div>

            <div className='flex justify-center items-center'>
                {form === "done" ? <Subscribed /> : <ContactForm form={form} setForm={setForm} />}
            </div>           
        </div>
        

    </section>
  )
}

export default Contact