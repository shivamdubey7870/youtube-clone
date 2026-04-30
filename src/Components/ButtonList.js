import React, { useEffect } from 'react'
import Button from './Button'



const ButtonList = () => {


  return (
    <div className='flex'>
      <Button name={"All"}/>
       <Button name={"Popular"}/>
        <Button name={"Trending"}/>
         <Button name={"Live"}/>
          <Button name={"News"}/>
           <Button name={"Sports"}/>
            <Button name={"Comedy"}/>
             <Button name={"Valentines"}/>
              <Button name={"Cricket"}/>
               <Button name={"Sports"}/>
            <Button name={"Comedy"}/>
             

    </div>
  )
}

export default ButtonList