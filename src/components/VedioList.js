import React from 'react';
import VedioItems from './VedioItems';

const VedioList =({v,onVideoSelect})=>
    
        {
            const rl= v.map((video)=> {
                return <VedioItems key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;

            })
            return(
                <div className="ui relaxed divided list">
                     {rl}
                </div>

            );
        }
    
export default VedioList;