import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import headers from "./TableHeader"
import arrowdown from "../assets/arrowdown.png"
import arrowup from "../assets/arrowup.png"
import first from "../assets/first.png"
import last from "../assets/last.png"
import left from "../assets/left.png"
import right from "../assets/right.png"



const Charts = () => {
    const [sort, setSort] = useState({keyToSort: "market_cap_rank", direction: "asc"})
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")


        useEffect(()=>{
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
            .then(res=>{
                setCoins(res.data)
                console.log()
            }).catch(error=> alert("I am using a free API, please wait for its respond to see the chart and top coin section."))
        }, []);


    function handleHeaderClick(header){
      setSort({
        keyToSort: header.key,
        direction: header.key === sort.keyToSort ? sort.direction === "asc" ? "desc" : "asc" : "desc"
      })
    }

    const filteredCoins = coins.filter(coin => coin.id.toLowerCase().includes(search.toLowerCase()))

    function sortedChart(dataToSort){
      if(sort.direction === "asc"){
        return dataToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1));
      }
        return dataToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1));
    }

    //Consts for pagination and gif cards
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 15;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = sortedChart(filteredCoins).slice(firstIndex, lastIndex);
    const nPage = Math.ceil(filteredCoins.length / recordsPerPage);
    const pageNumbers = [...Array(nPage + 1).keys()].slice(1);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);


//functions for pagination
function prePage(){
    if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
        setMaxPageNumberLimit(maxPageNumberLimit - 1);
        setMinPageNumberLimit(minPageNumberLimit - 1);  
    }
    document.getElementById("charts").scrollIntoView({behavior : "smooth"})
}

function nextPage(){
    if(currentPage !== nPage){
        setCurrentPage(currentPage + 1)
        setMaxPageNumberLimit(maxPageNumberLimit + 1);
        setMinPageNumberLimit(minPageNumberLimit + 1);  
    }
    document.getElementById("charts").scrollIntoView({behavior : "smooth"})
}

function changePage(id){
    setCurrentPage(id);
    document.getElementById("charts").scrollIntoView({behavior : "smooth"})
}

  return (
    <section id='charts' className='text-[#E3E1E1] text-left xl:mx-[10%] lg:mx-[5%] pt-[10px] pb-[10px] mt-[90px] 
    scroll-mt-[90px] mr-4 ml-4'>

      <div className='bg-[#47428d] mb-4 pt-2 pb-2 rounded-t-lg flex justify-center text-center'>
        <form className='search'>
          <label>Search Coins:
            <input className='ml-4 rounded-lg pl-4 p-2 bg-[#030120] text-[#E3E1E1]'
            type="text" placeholder='Search' onChange={(e)=>{setSearch(e.target.value)}}/>
          </label>
        </form>
      </div>

      <div className='chart-grid mb-6'>
        {headers.map((header)=>(   
          <div key={header.key} className={`cursor-pointer md:ml-[32px] ${header.screen ==="desktop" ? "hidden md:flex" : "flex"}`}>       
          <span onClick={()=> handleHeaderClick(header)} 
          className="ml-0">
            {header.label}</span>

          {header.key === sort.keyToSort && (
          <img className='md:w-[14px] w-[8px] ml-2' src={sort.direction === "desc" ? arrowdown : arrowup} alt='sort_direction' />)}
          </div>      
        ))}
      </div>

    
      {records.map((coin)=>{
        return (
          <div key={coin.id} className='chart-grid border-t-2 pt-3 pb-3 bg-[#E3E1E11A]'>
              <span>{coin.market_cap_rank}</span>
              <span className='hidden md:inline'><img src={coin.image} alt='coin_logo' className='w-[28px]'/></span>
              <span>{coin.id}</span>
              <span>{coin.current_price.toLocaleString()}</span>
              <span className={`${coin.price_change_percentage_24h < 0 ? "text-[#6b1024] font-bold" : "text-[green] font-bold"}`}>
                {coin.price_change_percentage_24h.toLocaleString(undefined, {maximumFractionDigits:3})}</span>
              <span className='hidden md:inline'>{coin.market_cap.toLocaleString()}</span>
          </div>
             )
            })}


      <div className='pt-8 text-[#E3E1E1] text-[18px]'>
        <ul className='flex justify-center items-center'>

                {currentPage > 1 &&<li key={"first_page"} className={`paginate paginate-li flex justify-center items-center 
                "bg-[#F2AC24]`}>
                   <button onClick={()=>{changePage(1); setMinPageNumberLimit(0); setMaxPageNumberLimit(5)}}>
                    <img src={first} alt='first_page_arrow' className='w-4 h-4'/></button>
                </li>}


            <li className='paginate'>
                <button onClick={prePage}>
                    <img src={left} alt='back' className='w-4 h-4'/>
                </button>
            </li>


            {pageNumbers.map((n)=>{
                if(n < maxPageNumberLimit+1 && n > minPageNumberLimit){
                return(
                <li key={n} className={`paginate paginate-li flex justify-center items-center 
                ${n === currentPage ? "b-gradient" : "bg-[#8a8fce]"}`}>
                   <button onClick={()=>changePage(n)}>{n}</button>
                </li>);
                } else {
                    return null;
                }
            })}

            <li className='paginate'>
                <button onClick={nextPage}>
                    <img src={right} alt='back' className='w-4 h-4'/>
                </button>
            </li>

                {(currentPage < nPage) && <li key={"last_page"} className={`paginate paginate-li flex justify-center items-center 
                "bg-[#F2AC24]`}>
                   <button onClick={()=>{changePage(nPage); setMinPageNumberLimit(nPage-5); setMaxPageNumberLimit(nPage)}} >
                    <img src={last} alt='last_page_arrow' className='w-4 h-4'/></button>
                </li>}

        </ul>
      </div>    
        

    </section>
  )
}

export default Charts