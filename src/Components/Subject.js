import React, { useContext } from 'react'
import SubjectData from './ContextData';

const Subject = () => {
    const subject=useContext(SubjectData);
  return (
    <div className='bg-blue-500 p-10'>Subject : {subject}</div>
  )
}

export default Subject