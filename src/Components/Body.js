import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

// const Body = ({ show }) => {
    const Body = () => {
  return (
    <div className='flex'>
        {/* <Sidebar show={show} />
        <MainContainer/> */}
         <Sidebar />
        <Outlet/>
    </div>
  )
}

export default Body