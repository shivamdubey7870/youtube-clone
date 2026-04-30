import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// const Sidebar = ({ show }) => {
    const Sidebar = () => {
        const iswrite=useSelector((store)=>store.app.isToggle);

        if(!iswrite) return null;
   
  return (
    // <>
    // {show && (
    <div className=' shadow-lg p-5 px-6  ' >
           <ul className='w-48 '>
            <Link to="/"><li>Home</li></Link>
            <li>Music</li>
            <li>Sports</li>
            <li>News</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
            <li>Movies</li>
            <li>Music</li>
            <li>Sports</li>
            <li>News</li>
        </ul>
         <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
            <li>Movies</li>
            <li>Music</li>
            <li>Sports</li>
            <li>News</li>
        </ul>
         <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
            <li>Movies</li>
            <li>Music</li>
            <li>Sports</li>
            <li>News</li>
        </ul>
         <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
            <li>Movies</li>
            <li>Music</li>
            <li>Sports</li>
            <li>News</li>
        </ul>
    </div>
//   )}
//   </>
  )
}

export default Sidebar