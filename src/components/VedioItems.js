import React from 'react';
import './ViedoItem.css';

const VedioItems=({video,onVideoSelect})=>
{
     return(
         <div onClick={()=>onVideoSelect(video)} className="video-item item">
             <img class="ui  image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
              <div class="content">
                    <div className="header">{video.snippet.title}</div>
             </div>
         </div>
     );   
};
export default VedioItems;