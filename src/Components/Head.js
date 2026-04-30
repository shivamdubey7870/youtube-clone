import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToggle } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';


// const Head = ({ show, setShow }) => {
//     const handleHamburger=()=>{
//         setShow(!show);
//     }
    const Head = () => {
        const [searchQuery,setSearchQuery]=React.useState("");
        const[suggestion,setSuggestion]=React.useState([]);
        const[showSuggestion,setShowSuggestion]=React.useState(false);
       
        const dispatch=useDispatch();
    const handleHamburger=()=>{
        dispatch(addToggle());
    }
    const getYoutubeSearchApi=async()=>{
         console.log(searchQuery);
        const data=await fetch( YOUTUBE_SEARCH_API + searchQuery);
        const json=await data.json();
        setSuggestion(json[1]);
        
      }

    useEffect(() => {
        const timer=setTimeout(() => {  
           getYoutubeSearchApi();
        }, 200);
        return ()=>clearTimeout(timer);
       
      }, [searchQuery])
  return (
    <div className='grid grid-flow-col p-2 m-2 mt-0 mr-0 shadow-lg sticky top-0 z-20 bg-white'>
        <div className='flex gap-4 '>
            <img className='h-12 cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/960px-Hamburger_icon.svg.png' alt='hamburgur' onClick={handleHamburger}/>
            <div className='flex gap-1'>
            <img className='h-12 w-16' src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' alt='youtube-images'/>
            <h1 className='text-2xl font-bold mt-2'>YouTube</h1>
            </div>
        </div>
        <div className=''>
            <input className='border border-gray-400 rounded-l-full p-2 w-3/4' type='text' value={searchQuery} onChange={(e)=>{
                setSearchQuery(e.target.value)
              
            }}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
             placeholder='Search'/>
           
            <button className='border border-gray-400 rounded-r-full p-2 text-gray-600'>Search</button>
           {showSuggestion && (
  <ul className='fixed bg-white py-2 px-2 w-[28rem] shadow-lg rounded-lg border border-gray-100'>
    {suggestion.map((item) => (
      <li key={item} className='px-3 py-2 shadow-sm'>
        🔍 {item}
      </li>
    ))}
  </ul>
)}
        </div>
        <div className='flex justify-end'>
            <img className='h-12' src='https://cdn-icons-png.flaticon.com/512/1077/1077012.png' alt='user-logo'/>
        </div>
    </div>
  )
}

export default Head