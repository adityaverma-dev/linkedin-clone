import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';

import "./App.css"
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './app/features/userSlice';
import { auth } from './firebase';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

useEffect( () => {
  auth.onAuthStateChanged((userAuth) => {
    if(userAuth) {
      dispatch(login ( {
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoURL: userAuth.photoURL, 
      }))
    } else {
   dispatch(logout());
    }
  }

  )
}

,[]);

  return (
    <div className='App'>
<Header />
{!user ? ( <Login /> ): ( 
<div className='app_body'>
 <Sidebar />
<Feed />
<Widgets />
 </div>)}  




 </div>
  )
};

export default App;