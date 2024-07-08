import React, { useEffect, useState } from 'react'
import "./Feed.css";
import Feedoptions from './Feedoptions'
import Post from './Post';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import WorkIcon from '@mui/icons-material/Work';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Button } from '@mui/material';
import {db}  from './firebase' 
import firebase from './firebase';
import { FieldValue } from './firebase';
import { selectUser } from './app/features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';



function Feed() {
const[posts, setPost]= useState([]);
const user = useSelector(selectUser);

useEffect(() => {
  db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
    setPost(snapshot.docs.map(doc=>(
        {
            id: doc?.id,
            data: doc.data(),
        }
    )))
  ))  
}

, [])

const[input, setInput]=useState('');
 const sendPost = (e) => {
    e.preventDefault();
   
    db.collection("posts").add({
        img: user.photoURL,
        name: user.displayName,
        description: user.email,
        message: input,
        timestamp: FieldValue.serverTimestamp(),
    })
    setInput("");
 }

    

    return (
        <div className='Feed'>
            <div className='feedtop'>
                <div className='feedsearch'>
                    <img className='profileimg' src={user.photoURL}></img>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} className='feedinput' type='text'></input>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feeds'>
                    <Feedoptions Icon={PermMediaIcon} title='Media' />
                    <Feedoptions Icon={WorkIcon} title='Job' />
                    <Feedoptions Icon={PostAddIcon} title="Write article" />
                </div>
            </div>
            
            
            <div className='feedpost'>
        <FlipMove>
                {posts.map(( {id, data: {img, name, description, message }}) => (
                <Post 
                key={id}
                img={img} 
                name={name}
                description={description}
                message={message} /> )
                )
                
                }
              </FlipMove>
            </div>
      
      
      
        

        </div>

    )

}

export default Feed