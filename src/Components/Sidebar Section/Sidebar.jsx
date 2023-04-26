import React from 'react'
import './sidebar.css'
import logo from '../../Assets/logo.png'

// icons
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsTrophy, BsCreditCard2Front, BsQuestionCircle} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'

function Sidebar() {
  return (
    <div className='sideBar'>
        <div className='logoDiv flex'>
            <img src={logo} alt='logo' />
            <h2>Planti</h2>
        </div>

        <div className="menuDiv">
          <h3 className="divTitle">
            QUICK MENU
          </h3>
          <ul className="menuLists">

            <li className="listItem">
              <a href="www.google.com" className="menuLink flex">
                <IoMdSpeedometer className='icon'/>
                <span className="smallText">
                  Dash Board
                </span>
              </a>
            </li>

            <li className="listItem">
              <a href="www.google.com" className="menuLink flex">
                <MdDeliveryDining className='icon'/>
                <span className="smallText">
                  My Orders
                </span>
              </a>
            </li>

            <li className="listItem">
              <a href="www.google.com" className="menuLink flex">
                <MdOutlineExplore className='icon'/>
                <span className="smallText">
                  Explore
                </span>
              </a>
            </li>

            <li className="listItem">
              <a href="www.google.com" className="menuLink flex">
                <BsTrophy className='icon'/>
                <span className="smallText">
                  Products
                </span>
              </a>
            </li>

          </ul>
        </div>

        <div className="settingsDiv">
          <h3 className="divTitle">
            SETTINGS
          </h3>
          <ul className="menuLists">

            <li className="listItem">
              <a href="www.google.com" className="menuLink flex">
                <AiOutlinePieChart className='icon'/>
                <span className="smallText">
                  Charts
                </span>
              </a>
            </li>

            <li className="listItem">
              <a href="www.google.com" className="menuLink flex">
                <BiTrendingUp className='icon'/>
                <span className="smallText">
                  Trends
                </span>
              </a>
            </li>

            <li className="listItem">
              <a href="www.google.com" className="menuLink flex">
                <MdOutlinePermContactCalendar className='icon'/>
                <span className="smallText">
                  Contact
                </span>
              </a>
            </li>

            <li className="listItem">
              <a href="www.google.com" className="menuLink flex">
                <BsCreditCard2Front className='icon'/>
                <span className="smallText">
                  Billing
                </span>
              </a>
            </li>

          </ul>
        </div>
        
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
  )
}

export default Sidebar