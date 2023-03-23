import React, { useState } from 'react'
import axios from 'axios'

export default function PracticeQuestion() {
    const[quesdata,setQuesdata]=useState([])
    const getdata=() =>{
    axios.get('http://localhost:5001/api/questionlist').then((res)=>setQuesdata(res.data.data))

}
  return (
    <>
    <div className='animate'></div>
    </>
  )
}
