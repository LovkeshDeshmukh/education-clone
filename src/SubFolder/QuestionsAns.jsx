import axios from 'axios'
import React, { useState } from 'react'

export default function QuestionsAns() {
    const[main,setMain]=useState('')
    const quesno=''
    const uans=''
    const cans=''

    const postdata =()=>{
        axios.post('http://localhost:5001/api/correctans',main)
    }
  return (
    <>
    <input value={main?.quesno} onChange={()=>setMain({...main,quesno:i.target.value})} type="text" />
    <input value={main?.uans} onChange={()=>setMain({...main,uans:i.target.value})} type="text" />
    <input value={main?.cans} onChange={()=>setMain({...main,cans:i.target.value})} type="text" />
    <input type="Submit" onClick={postdata()} />
    </>
  )
}
