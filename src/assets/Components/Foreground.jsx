import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = () => {

  const data = [{
    desc:"hi this is a sample file",
    size:"2mb",
    foot :{ downloading:false}
  },
  {
    desc:"hi this is a sample file2",
    size:"4mb",
    foot :{ downloading:true}
  },
  {
    desc:"hi this is a sample file3",
    size:"6mb",
    foot :{ downloading:false}
  }]

  const ref = useRef(null);
  return (
    <>
    <div ref={ref} className='w-full h-screen absolute flex '>
    <div className='flex gap-3'>{data.map((elem)=>{
      return <Card desc = {elem.desc} foot = {elem.foot.downloading} size = {elem.size} reference = {ref}/>
    })}
    </div>
    </div>
    
    </>
    
    
  )
}

export default Foreground