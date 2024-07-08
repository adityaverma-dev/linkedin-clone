import React from 'react'
import "./widgets.css";
import InfoIcon from '@mui/icons-material/Info';
function Widgets() {

 const newsArticle = (heading, subtitles)  => {
    return (
<div className='news'>
<h4>{heading}</h4>
<p>{subtitles}</p>

</div>
    )
 }
    
  return (
    <div className='widgets'>
        <div className='widgets-header' >
        <h2>News Articles</h2>
       <InfoIcon />

        </div>
        {newsArticle("Unacademy lays off 250 people", "Top news 4787 readers")}
        {newsArticle("Smaller cities go big on realty", "Top news 4787 readers")}
        {newsArticle("Firms look within for CXO talent", "Top news 4787 readers")}
        {newsArticle("Top Indian cities for students", "Top news 4787 readers")}
        {newsArticle("FMCG to increase ad spends", "Top news 4787 readers")}
 
    </div>
  )
}

export default Widgets