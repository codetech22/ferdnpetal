import React, { useEffect, useState } from 'react'
import {TiArrowUpThick} from 'react-icons/ti'

const Bottomtoup = () => {
    const[top,setTop] = useState(false);
    
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100) {
                setTop(true)
            }else{
                setTop(false)
            }
        })
    },[])

    const scrollup = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div>
      {top && (
        <button onClick={scrollup} className='text-3xl  fixed bottom-[50px] right-[50px] h-[50px] w-[50px]'><TiArrowUpThick/></button>
      )}
    </div>
  )
}

export default Bottomtoup
