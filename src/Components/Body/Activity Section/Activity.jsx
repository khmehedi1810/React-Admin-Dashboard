import React from 'react'
import './activity.css'

// Import icons 
import {BsArrowRightShort} from 'react-icons/bs'
import user from '../../../Assets/user.png'
import user2 from '../../../Assets/user2.png'
import user3 from '../../../Assets/user3.png'
import user4 from '../../../Assets/user4.png'
import user5 from '../../../Assets/user5.png'
import ActivityLists from './ActivityLists'

function Activity() {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer">

        <ActivityLists img={user} name={'Julia Jiss'} time={'7'}/>
        <ActivityLists img={user2} name={'Maria Miss'} time={'8'}/>
        <ActivityLists img={user3} name={'Ola Martha'} time={'2'}/>
        <ActivityLists img={user4} name={'Mary Orthon'} time={'3'}/>
        <ActivityLists img={user5} name={'Julia Jiss'} time={'7'}/>
        <ActivityLists img={user} name={'Maria Miss'} time={'8'}/>

      </div>
    </div>
  )
}

export default Activity