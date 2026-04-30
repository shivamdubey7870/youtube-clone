import React from 'react'
import College from './College'
import Subject from './Subject'
import SubjectData from './ContextData'

const Context = () => {
    const [subject,setSubject]=React.useState("");
  return (
    <div>
        <SubjectData.Provider value={subject}>
                  <select onChange={(e)=>setSubject(e.target.value)} >
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Maths">Maths</option>
            </select>
            <button onClick={()=>setSubject("")}>Clear Subject</button>
      <College/>

     
        </SubjectData.Provider>
    </div>
  )
}

export default Context