import React from 'react'
import Comments from './Comments'

const CommentContainer = () => {
    const CommentData=[
        {
            name:"John Doe",
            comment:"This is a great video! Learned a lot.",
            replies:[

            ]
        },
        {
            name:"Jane Smith",
            comment:"Thanks for sharing this information.", 
            replies:[
               {
            name:"John Doe",
            comment:"This is a great video! Learned a lot.",
            
        },
            ]
        },
          {
            name:"John Doe",
            comment:"This is a great video! Learned a lot.",
            replies:[

            ]
        },
          {
            name:"John Doe",
            comment:"This is a great video! Learned a lot.",
            replies:[
              {
            name:"John Doe",
            comment:"This is a great video! Learned a lot.",
            
        },
            ]
        },
    ]
  return (
    <div className='m-4 p-2'>
    <div className='text-3xl font-bold'>Comments :</div>
    <Comments data={CommentData}/>
    </div>
  )
}

export default CommentContainer