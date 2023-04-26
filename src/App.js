import React from 'react'
import './app.css'
import Body from './Components/Body/Body'
import Sidebar from './Components/Sidebar Section/Sidebar'

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Body />
    </div>
  )
}

export default App