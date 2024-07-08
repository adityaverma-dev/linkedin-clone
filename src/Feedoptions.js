import React, { useState } from 'react'


    function Feedoptions({Icon, title}) {
      const [like, setlike]=useState(0)

  
        return (
      <div className='Feedoptions'>
         {Icon && <Icon className='Feedicons'/>}
         <h3 className='Feedtitle'>{title}</h3> 
      
      </div>
        )
      }

export default Feedoptions