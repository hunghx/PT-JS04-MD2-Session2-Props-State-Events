import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Parent from './components/Parent'
// import { ListStudent } from './components/ListStudent'
import Parent from './components/Parent'
import Children from './components/Children'
import Timer from './components/Timer'
import Buttons from './components/Buttons'

function App() {
  return (
    <>
      <div> 
        {/* property */}
        Đếm ngược
      </div>
      {/* <Parent/> */}
      {/* <Children/> */}
      <Timer/>
      <Buttons/>
    </>
  )
}

export default App
