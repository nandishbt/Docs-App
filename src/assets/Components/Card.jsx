import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { MdOutlineCancel } from "react-icons/md";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { motion ,useDragControls } from "framer-motion"

function Card({desc,foot,size,reference}) {
  const dwnl =   <div className='footer bg-green-500 h-20 w-full mt-56 flex items-center justify-between ' >
   <h1 className='font-semibold  ml-2  mb-12 mt-2'>DOWNLOADING</h1>
   <IconContext.Provider value={{ color: "white", size: "1em" ,className: "react-icons" }}>
 <div className='mb-14 mr-2 mt-1'>
 <MdOutlineCancel/>
 </div>
 </IconContext.Provider>

 

 </div>

 const Ndwnl = <div className='flex items-center justify-between mt-56'>
 <h4 className='ml-3 font-semibold'>{size}</h4>
 <IconContext.Provider value={{ color: "white", size: "1em" ,className: "react-icons" }}>
<div className='mr-2'>
<PiDownloadSimpleLight />
</div>
</IconContext.Provider>
 
</div>
  return (
    < motion.div 
    whileTap={{ scale: .8}}
    drag
    dragConstraints={reference}
    whileDrag={{ scale: 1.3 }}
    dragElastic={0.2}
    dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
    
      className=' relative w-56 h-80 bg-slate-700 rounded-xl m-5  overflow-hidden '>
        
        <IconContext.Provider value={{ color: "grey", size: "1em" ,className: "react-icons" }}>
        <div className='mb-2 ml-2 mt-2'>
        <FaFileAlt />
        </div>
        </IconContext.Provider>
        <p className='font-semibold m-2'> {desc}</p>
        {foot?dwnl:Ndwnl}

        
        

        
        
        
    </motion.div>
  )
}

export default Card