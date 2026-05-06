import React from 'react'

const VideoCard = ({info}) => {
     if (!info?.snippet) return null; // ✅ guard clause

  const {
    snippet: {
      title,
      channelTitle,
      thumbnails,
      
    },
    statistics:{
        viewCount,
    }
    
  } = info;
    // const{snippet,statistics}=info;
    // const{channelTitle,title,thumbnails}=snippet;
    // const{viewCount}=statistics;
    // pasting for Git
    // changes per branching
    // new branch 2
  return (
    <div className="m-2  p-2 w-64 h-auto bg-gray-100 rounded-lg shadow-md">
      <img className="rounded-lg" src={thumbnails.medium.url} alt={title} />
      <h3 className="font-bold mt-2">{title}</h3>
      <p className="text-sm">{channelTitle}</p>
      <p className="text-xs">{viewCount} views</p>
    </div>


  
  )
}

export default VideoCard