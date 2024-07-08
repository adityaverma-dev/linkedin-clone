import React from 'react'
import "./Sidebar.css"; 
import { useSelector } from 'react-redux';
import { selectUser } from './app/features/userSlice';
function Sidebar() {
const user = useSelector(selectUser);
  return (
    <div className='Sidebar'>
<div className='sidebartop'>
<img className='bgimage' src='https://st.depositphotos.com/1897095/1642/i/450/depositphotos_16428473-stock-photo-fog-and-pastel-gradient.jpg'></img>
    <img className='profileimg' src={user.photoURL}></img>
 <h3 className='profilename' >{user.displayName}</h3>
 <h4 className='emailp'>{user.email}</h4>
    </div>
<div className='sidebarstats'>
 <div className='sidebarstat'>
<p className='stat'>Who viewed you</p>
<p className='statno'>2003</p>
</div>
<div className='sidebarstat'>
<p className='stat' >Views on post</p>
<p className='statno'>5454</p>
 </div>  
 </div>

 <div className='sidebarbottom'>
    <p className='hrecent'>Recent</p>
 <div className='recentitems' > 
 <p>Web Developer</p>
 <p>SEO</p>
 <p>Software Engineer</p>
 <p>Front-end dev</p>
 <p>Web Developer Expert</p>
</div>   


</div>    
</div>
  )
}

export default Sidebar