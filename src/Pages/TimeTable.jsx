import React, { useState } from "react";

export default function TimeTable() {
  const [btn, setBtn] = useState(1);
  const [btn23, setBtn23] = useState(1);
  const [btn56, setBtn56] = useState(1);

  return (
    <>
      <div className="btntime">
        <button
          onClick={() => setBtn(2)}
          style={{ backgroundColor: btn === 2 ? "aqua" : "transparent",color:btn===2?"black":"white", width:'30%',borderRadius:'15px' }}
        >
          BATCH-1 <br />
          10:00am - 12:00 pm
        </button>
        <button
          onClick={() => setBtn(1)}
          style={{ backgroundColor: btn === 1 ? "aqua" : "transparent",width:'30%',borderRadius:'15px',color:btn===1?"black":"white" }}
        >
          BATCH-1 <br /> 10:00am - 12:00 pm
        </button>
        <button
          onClick={() => setBtn(3)}
          style={{ backgroundColor: btn === 3 ? "aqua" : "transparent", width:'30%',borderRadius:'15px',color:btn===3?"black":"white" }}
        >
          BATCH-1 <br />
          10:00am - 12:00 pm
        </button>
      </div>
      <div className="navigatebtn">
        <button className="btn1">Pre</button>
        <button onClick={()=> setBtn23(1)} style={{backgroundColor:btn23===1? "aqua":'White'}} className="btn2">Main</button>
        <button onClick={()=> setBtn23(2)} style={{backgroundColor:btn23===2? "aqua":'White'}} className="btn3">Practice</button>
        <button className="btn4">Speed Test</button>
        <button onClick={()=> setBtn56(1)} style={{backgroundColor:btn56===1? "aqua":'White'}} className="btn5">Foundation</button>
        <button onClick={()=> setBtn56(2)} style={{backgroundColor:btn56===2? "aqua":'White'}} className="btn6">Advance</button>
        <button className="btn7">Nex</button>
      </div>
      <table className="table">
        <thead>
          <th>Day</th>
          <th>Lecture 1</th>
          <th>Lecture 2</th>
          <th>Vocab</th>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>6ruyih</td>
            <td>6ruyih</td>
            <td>6ruyih</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>dccw</td>
            <td>dccw</td>
            <td>dccw</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>dsvsf</td>
            <td>dsvsf</td>
            <td>dsvsf</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>wvfwgrw</td>
            <td>wvfwgrw</td>
            <td>wvfwgrw</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>svdsv</td>
            <td>svdsv</td>
            <td>svdsv</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>sdsc</td>
            <td>sdsc</td>
            <td>sdsc</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>adcsdv</td>
            <td>adcsdv</td>
            <td>adcsdv</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
