import React, { useState } from 'react'
import "./Feed.css";
import Postbuttons from './Postbuttons'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { forwardRef } from 'react';
const Post = forwardRef(({img, name, description, message}, ref) => {
    const [like, setlike]=useState(0)
    function handleLikeButtonClick () { 
   return setlike(like+1);

  
        }
  return (
    <div ref={ref} className='postmain'>
        <div className='postheader'>
     <img className='profileimg' src={img}></img> 
     <div className='userinfo'>
<h2 className='postname'>{name}</h2>      
<p className='desc'>{description}</p>
</div>
</div>
<div className='postbody'>
<p className='msg'>{message}</p>
    </div>
   
 <div className='postbuttons'>   
<Postbuttons Icon={ThumbUpIcon} title={like} onClick={handleLikeButtonClick} />
<Postbuttons Icon={CommentIcon} title='Comment'/>
<Postbuttons Icon={ShareIcon} title='Share'/>
<Postbuttons Icon={ThumbUpIcon} title='Send'/>
</div>

    </div>
  )
} )

export default Post 