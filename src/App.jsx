import React from 'react'
import { Background } from './assets/Components/Background'
import Foreground from './assets/Components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground/>
      

    </div>
  )
}

export default App