import React from 'react'

export default function TopicSheet() {
  return (
    <>
    <div className="boxtestpaper">
        <div className="box1testpaper">
          <label>Level</label>
          <select>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
          </select>
        </div>
        <div>
          <label>Subject</label>
          <select>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
          </select>
        </div>
        <div>
          <label>Topic</label>
          <select>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
          </select>
        </div>
        <div>
          <label>Sheet</label>
          <select>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
          </select>
        </div>
          {/* <input type="text" placeholder='Search' /> */}
      </div>
      <table className="table" style={{width:"100%"}}>
        <thead style={{width:"100%", backgroundColor:"orange", height:50}} className='tablehead'>
          <th>Level</th>
          <th>Subject</th>
          <th>Topic</th>
          <th>Sheet</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr style={{backgsroundColor:'orange'}} >
            <td >Foundation-1A</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
