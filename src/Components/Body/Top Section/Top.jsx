import React from 'react'
import './top.css'

// Import Icons
import {BiSearchAlt} from 'react-icons/bi'
import {BsArrowRightShort, BsQuestionCircle} from 'react-icons/bs'
import {TbMessageCircle} from 'react-icons/tb'
import {MdNotificationsNone} from 'react-icons/md'

// Import Images
import user from '../../../Assets/user.png'
import video from '../../../Assets/video.mp4'
import stachu from '../../../Assets/stachu.png'

function Top() {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Planti.</h1>
          <p>Hello, Planti Lover. Welcome back.</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className='icon'/>
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className='icon' />
          <MdNotificationsNone className='icon' />
          <div className="adminImage">
            <img src={user} alt='user' />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell Extraordinary Products</h1>
          <p>The word fast growing industry today are natural made products! </p>

          <div className="buttons flex">
            <button className='btn'>Explore More</button>
            <button className='btn transparent'>Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 orders</small>
                </span>

                <span>
                  This Month <br /> <small>124 orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className='icon' />
              </span>

            </div>

            <div className="imgDiv">
              <img src={stachu} alt="Tob" />
            </div>
          </div>

          {/* Will use later */}
          <div className="sideBarCard">
            <BsQuestionCircle className='icon' />
            <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <h3>Help Center</h3>
              <p>Having trouble in Planti, Please contact us for more questuin.</p>
              <button className='btn'>Go to help center</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top