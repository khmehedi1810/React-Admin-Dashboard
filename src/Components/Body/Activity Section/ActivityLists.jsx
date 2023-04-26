import React from 'react'

function ActivityLists({img, name, time}) {
  return (
    <div className="singleCustomer flex">
        <img src={img} alt="user" />
        <div className="customerDetails">
            <span className='name'>{name}</span>
            <small>Orderd a new plant</small>
        </div>

        <div className="duration">
            {time} min ago
        </div>
    </div>
  )
}

export default ActivityLists