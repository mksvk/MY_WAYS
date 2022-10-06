import React ,{useState}from 'react'

import Lottie from "lottie-react";
import anime from "./icon.json";
const FirstSection = ({Data}) => {
  const[toggle,setToggle] = useState(true)

  const clickHandler =()=>{
       console.log("clicked")
       setToggle(!toggle)
  }

  return (
    <div className=''>

      <div className='lg:text-5xl bg-slate-300 text-lg pt-5 pb-8 text-center font-bold '>  Weather Forecast</div>

    <div className=' bg-black text-white lg:text-3xl text-lg  align-middle '>
     <div className='pt-5 pb-5 text-center font-bold'>
      {Data.query.results.channel.item.title}
     </div>
      <div className='flex justify-between'>
            <div className='flex pl-10 flex-col'>
                  <div className='text-9xl'>{Data.query.results.channel.item.condition.temp}°</div>
                  <div className='text-bold'>{Data.query.results.channel.item.condition.text}</div>
                  <div className='py-5'>High : {Data.query.results.channel.item.forecast[0].high}°  <span className='pl-5'>Low : {Data.query.results.channel.item.forecast[0].low}°</span> </div>
                  <div onClick={clickHandler} className='rounded h-7 w-32 bg-white ml-3 text-black text-lg text-center hover:bg-slate-700 hover:text-white hover:cursor-pointer  my-5'>       
                   More Info
                  </div>
            </div>
            <div className=''>
            <Lottie className="lg:w-96 w-40 " animationData={anime} loop={true} /> 
 
            
            </div>
      </div>

    </div>
    
      <div className={`text-center  bg-slate-300 w-full pt-20 pb-32 ${toggle ? "hidden" : ""}`}>   
              <div className=' text-3xl py-5 font-bold'> {Data.query.results.channel.item.title}</div>

              <div className=''>
                 <div className='py-3'><span className='text-lg font-bold px-5'>  Wind Speed :</span> {Data.query.results.channel.wind.speed}</div>
              <div className='py-3'><span  className='text-lg font-bold px-5'> Humidity :</span>   {Data.query.results.channel.atmosphere.humidity}</div>
              <div className='py-3'><span  className='text-lg font-bold px-5'> Pressure :</span>   {Data.query.results.channel.atmosphere.pressure}</div>
              <div className='py-3'><span  className='text-lg font-bold px-5'> Sunrise/Sunset Time  :</span>  {Data.query.results.channel.astronomy.sunrise}/{Data.query.results.channel.astronomy.sunset}</div>
   
               </div>
                </div>
    
    </div>
  )
}

export default FirstSection