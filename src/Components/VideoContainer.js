import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesList } from '../utils/moviesSlice';

const VideoContainer = () => {
  const dispatch=useDispatch();
 const video=useSelector((store)=>store.movies.moviesList);
  // const[video,setVideo]=useState([]);
   const getYoutubeApi=async()=>{
    const data=await fetch(YOUTUBE_API);
    const json=await data.json();
    dispatch(setMoviesList(json.items));
      
  }
  useEffect(() => {
    getYoutubeApi();
  }, [])
  return (
   
    <div className='flex flex-wrap '>
      {video.map((item)=><Link  to={"/watch?v="+item.id}><VideoCard key={item.id} info={item}/></Link>)}
   
    </div>
  )
}

export default VideoContainer