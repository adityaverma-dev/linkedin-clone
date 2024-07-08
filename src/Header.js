import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './app/features/userSlice';
import { auth } from './firebase';
function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutbutton = () => {
dispatch(logout());
auth.signOut();
    }
  
  return (
    <div className='Header'>
        <div className='Header-left'>
<img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'></img>

<div className='Header-search'>
    <SearchIcon />
    <input type='text'></input>
    </div>   
</div>
<div className='Header-right'>
<Headeroptions Icon = {HomeIcon} title='Home'/>
<Headeroptions Icon = {Diversity1Icon} title='My Network' />
<Headeroptions Icon={WorkIcon} title='Jobs' />
<Headeroptions Icon={EmailIcon} title='Messaging' />
<Headeroptions Icon= {NotificationsIcon} title='Notifications' />
<Headeroptions avatar="https://www.nmspacemuseum.org/wp-content/uploads/2019/03/Elon_Musk.jpg" title='me' onClick={logoutbutton} />

</div>

    </div>
  )
}

export default Header