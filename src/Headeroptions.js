import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Headeroptions({Icon, title, avatar, onClick}) {
  return (
<div className='Headeroptions' onClick={onClick} >
   {Icon && <Icon className='Headericons'/>}
   {avatar && <AccountCircleRoundedIcon className='Headericons' src={avatar}/> }
   <h3 className='Headertitle'>{title}</h3> 

</div>
  )
}

export default Headeroptions