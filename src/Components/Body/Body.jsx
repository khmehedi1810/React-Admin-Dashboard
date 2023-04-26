import React from 'react'
import Activity from './Activity Section/Activity'
import './body.css'
import Listing from './Listing Section/Listing'
import Top from './Top Section/Top'

function Body() {
  return (
    <div className='mainContent'>
      <Top />
      <div className="bottom flex">
        <Listing />
        <Activity /> 
      </div>
    </div>
  )
}

export default Body