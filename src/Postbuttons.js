import React from 'react'

function Postbuttons({Icon, title, onClick}) {
  return (
    <div className='postbtn' onClick={onClick}>
        {Icon && <Icon className='posticons'/>}
        <h3 className='posttitle'>{title}</h3> 
    </div>
  )
}

export default Postbuttons