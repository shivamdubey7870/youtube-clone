import React from 'react'

const Demo = () => {
    const [isDrakMode, setIsDarkMode] = React.useState(false);
    const handleClick=()=>{
        setIsDarkMode(!isDrakMode);
    }
  return (
    <div>
        <div className={"border border-black w-72 h-40 m-4 p-2 " +
            (isDrakMode && "bg-black text-red-500")}>
             <button onClick={handleClick}>Toggle Dark mode</button>
        </div>
    </div>
  )
}

export default Demo