import React, { useState } from 'react'
import "./Login.css";
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './app/features/userSlice';

function Login() {
    const [name, setName] = useState("");
    const [profile, setProfile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loginto = (e) => {
        e.preventDefault();
    
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                // Wait for user data to load
                userAuth.user.reload().then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoURL: userAuth.user.photoURL,
                    }));
                });
            })
            .catch((error) => alert(error.message));
    };
    const register = () => {
        if (!name) {
            return alert("Enter name");
        }
    
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                // Update profile immediately after user creation
                return userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profile || '',
                }).then(() => {
                    // Dispatch login action after profile update
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profile || '',
                    }));
                });
            })
            .catch((error) => alert(error.message));
    };
  return (
    <div className='loginMain'>
<img src='https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg'></img>   
<form className='logininput'>
<input value={name} placeholder='Full Name (Required if regestering)' type='text' onChange={(e) => setName(e.target.value)} ></input>
<input value ={profile} placeholder='Profile Pic URL' type='text'onChange={(e) => setProfile(e.target.value)} ></input>
<input value={email} placeholder='Enter your Email' type='email' onChange={(e) => setEmail(e.target.value)}></input>
<input value={password} placeholder='Enter your password' type='password' onChange={(e) => setPassword(e.target.value)} ></input>
<button type='submit' onClick={loginto}> Sign In </button>
</form>   
<p> Not Registered? 
    <span className='login_register' onClick={register}>Register Now </span>
</p>


    </div>
  )
}

export default Login