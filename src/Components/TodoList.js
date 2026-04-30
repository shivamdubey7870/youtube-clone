
import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react'

const TodoList = () => {
    const[title,setTitle]=React.useState("");
    const[desc,setDesc]=React.useState("");
    const[mainData,setMainData]=React.useState([]);
    
    const videoRef=React.useRef(null);
    console.log("videoRef:",videoRef.current);
    const handleClick=()=>{
       setTitle("");
       setDesc("");
       setMainData([...mainData,{title,desc}])
       
    }
    const handleDelete=(index)=>{
      const copyData=[...mainData];
       copyData.splice(index,1);
       setMainData(copyData)
    }

     const handlePlay=()=>{
      videoRef.current.play();
     }
     const handlePause=()=>{
      videoRef.current.pause();
     }

     const [time,setTime]=React.useState(null);
     const[data,setDate]=React.useState(null);
     const[stop,setStop]=useState();
     const ref=React.useRef(null);

     const handleStart=()=>{
       setTime(Date.now());
       setDate(Date.now());
         ref.current= setInterval(()=>{
          setTime(Date.now());
         },10);
     }
     const timeDate=(time - data)/1000;
      const handleStop=()=>{
       clearInterval(ref.current);
       
       
      }
      const handleReset=()=>{
        clearInterval(ref.current);
        setTime(null);
        setDate(null);
      }

  return (
   <div className='flex flex-col'>
    
    <div className='text-3xl  font-bold m-4 p-2 bg-black text-white  h-24 text-center justify-center'>
        Todo List
    </div>
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <input type="text" placeholder='Enter your task' className='border-2 border-black m-4 p-2 w-96' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder='Enter your task' className='border-2 border-black m-4 p-2 w-96' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            <button className='border-2 border-black m-4 p-2 bg-blue-500 text-white rounded-lg' onClick={handleClick}>Add Task</button>
        </form>
    </div>

<div className='text-2xl font-bold m-4 p-8 bg-slate-500'>
  {mainData.length > 0 ? (
    mainData.map((item, index) => (
      <div
        key={index}
        className="m-4 p-4 border-2 border-black bg-white rounded-lg"
      >
        <h3 className='text-xl font-semibold'>
          Task : {item.title}
        </h3>
        <p className='text-lg'>
          Description : {item.desc}
        </p>
        <button className='border-2 border-black m-4 p-2 bg-red-500 text-white rounded-lg' onClick={() => handleDelete(index)}>Delete Task</button>
      </div>
    ))
  ) : (
    <h1 className="text-center text-white">
      No available options
    </h1>
  )}
</div>
   

     <div className='flex gap-4'>
      <button className='bg-red-600 text-white p-4 px-8'onClick={handlePlay}>Play</button>
       <button className='bg-red-600 text-white p-4 px-8'onClick={handlePause}>Pause</button>
     </div>
     <div className='my-4'>
      <video width="320" height="240" ref={videoRef}>
        <source src="/Videos/file_example_MP4_640_3MG.mp4" type="video/mp4"/>
        {/* <source src="/Videos/file_example_MP4_640_3MG.ogg" type="video/ogg"/> */}
        Your browser does not support the video tag.
      </video>
     </div>

     <div>
      <h1>StopWatch: {timeDate.toFixed(3)}</h1>
      <button className='bg-gray-500 text-black p-4 px-8 mr-5'onClick={handleStart}>Start</button>
      <button className='bg-gray-500 text-black p-4 px-8' onClick={handleStop}>Stop</button>
       <button className='bg-gray-500 text-black p-4 px-8 ml-5' onClick={handleReset}>Reset</button>
      {/* <button>Reset</button> */}
      </div>


  </div>
  )
}

export default TodoList