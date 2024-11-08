"use client"


import AOS from "aos"
import { useEffect } from "react"
import  "aos/dist/aos.css"
import {Sidebar} from "./sidebar"
import {Detail} from "./Detail"


export default function Main(){

    useEffect(()=>{
       AOS.init({
        once:false,
       })
    },[])
    
    return(
       <div className="flex overflow-hidden h-screen">
        {/* Sidebar */}

          <div className="w-1/5">
            <Sidebar/>
          </div>


        {/* Details */}
           
           <div className="w-full">
            <Detail/>
           </div>

        </div>
    )
}