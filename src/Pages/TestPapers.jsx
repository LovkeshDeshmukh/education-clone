import React from 'react'

export default function TopicSheet() {
  return (
    <>
    <div className="boxtestpaper" >
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
          <label>Exam</label>
          <select>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
          </select>
        </div>
        <div>
          <label>Test Type</label>
          <select>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
            <option>hiiii</option>
          </select>
        </div>
      </div>
      <table className="table" style={{width:'100%'}}>
        <thead style={{backgroundColor:'orange',height:'50px'}}>
          <th>Name</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td style={{backgroundColor:'orange'}}>Foundation-1A</td>
            <td></td>
          </tr>
          <tr>
            <td style={{backgroundColor:'orange'}}>Foundation-1B</td>
          </tr>
          <tr>
            <td style={{backgroundColor:'orange'}}>Foundation-2A</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
