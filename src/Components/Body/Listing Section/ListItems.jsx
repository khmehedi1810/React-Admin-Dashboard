import React from 'react'

function ListItems({icon, img, title}) {
  return (
    <div className="singleItem">
        {icon}
        <img src={img} alt="images" />
        <h3>{title}</h3>
    </div>
  )
}

export default ListItems