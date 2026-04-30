import React from 'react'

const Comments = ({data}) => {
    const{name,comment,replies}=data;
  return (
    <div>Comments
        {data.map((comment) => (
            <div className="ml-4 flex shadow-sm p-2 bg-gray-200 rounded-lg my-2" key={comment.name}>
                <img className='h-8 w-8 rounded-full' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user-logo'/>
                <div>
                <h3>{comment.name}</h3>
                <p>{comment.comment}</p>
                
                {comment.replies && comment.replies.length > 0 && (
                    <div className="ml-4 ">
                        {comment.replies.map((reply) => (
                            <div key={reply.name}>
                                <h4>{reply.name}</h4>
                                <p>{reply.comment}</p>
                            </div>
                        ))}
                    </div>
                )}
                </div>
            </div>
        ))}
        {/* <div className="ml-4 flex shadow-sm p-2 bg-gray-300 rounded-lg my-2">
            <img className='h-8 w-8 rounded-full' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user-logo'/>
            <div className='ml-2'>
            <b>{name}</b>
            <p>{comment}</p>
            </div>
          </div> */}
    </div>
  )
}

export default Comments