import React from 'react'
import './listing.css'

// Import icons 
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

// import Images
import item from '../../../Assets/item.png'
import tree2 from '../../../Assets/tree2.png'
import tree3 from '../../../Assets/tree3.png'
import tree4 from '../../../Assets/tree4.png'
import ListItems from './ListItems'
import user from '../../../Assets/user.png'
import user2 from '../../../Assets/user2.png'
import user3 from '../../../Assets/user3.png'
import user4 from '../../../Assets/user4.png'

function Listing() {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        <ListItems icon={<AiFillHeart className='icon'/>} img={tree3} title={'Annual Vince'}/>

        <ListItems icon={<AiOutlineHeart className='icon'/>} img={tree2} title={'Coffee Plant'}/>

        <ListItems icon={<AiOutlineHeart className='icon'/>} img={item} title={'Button Plant'}/>

        <ListItems icon={<AiOutlineHeart className='icon'/>} img={tree4} title={'Spider Plant'}/>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user4} alt="users" />
              <img src={user3} alt="users" />
              <img src={user2} alt="users" />
              <img src={user} alt="users" />
            </div>

            <div className="cardText">
              <span>
                14.556 plant sold <br />
                <small>
                  21 sellers <span className="date">7 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuresSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user} alt="users" />
              <img src={user2} alt="users" />
              <img src={user3} alt="users" />
              <img src={user4} alt="users" />
            </div>

            <div className="cardText">
              <span>
                28.556 plant sold <br />
                <small>
                  15 sellers <span className="date">10 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Listing