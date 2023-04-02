import axios from "axios";
import React, { useEffect, useState } from "react";
import Calculator from "./Calculator";
// import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Questionlist() {
  useEffect(() => {
    getdata();
    getAnsData();
  }, []);
  const [quesno, setQuesno] = useState("");
  const [ques, setQues] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");
  const [cans, setCans] = useState("");
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [currentQue, setCurrentQue] = useState(0);
  
  const [show, setShow] = useState(false);

  const postdata = () => {
    const item = {
      quesno: quesno,
      ques: ques,
      opt1: opt1,
      opt2: opt2,
      opt3: opt3,
      opt4: opt4,
      cans: cans,
    };
    axios
      .post("http://localhost:5001/api/questionlist", item)
      .then(() => getdata());
  };
  const getdata = () => {
    axios
      .get("http://localhost:5001/api/questionlist")
      .then((res) => setList(res.data.data));
  };
  const postAnsData = (a, b, c) => {
    const item = {
      quesno: a,
      uans: b,
      cans: c,
    };
    axios
      .post("http://localhost:5001/api/correctans", item)
      .then(() => getAnsData());
  };

  const getAnsData = () => {
    axios
      .get("http://localhost:5001/api/correctans")
      .then((res) => setList2(res.data.data));
  };

  const color1 = (x) => {
    const newlist = list2.filter((item) => item.quesno === x);
    if (newlist.length > 0) {
      if (newlist[0].uans === newlist[0].cans) {
        return "green";
      } else {
        return "red";
      }
    } else {
      return "";
    }
  };

  const color2 = (x, y) => {
    const newlist = list2.filter((item) => item.quesno === x);
    if (newlist.length > 0) {
      if (newlist[0].cans === y) {
        return "green";
      } else if (newlist[0].uans === y) {
        return "red";
      } else {
        return "";
      }
    } else {
      return "";
    }
  };
  const deletedata = (x) => {
    axios
      .delete("http://localhost:5001/api/correctans/" + x)
      .then(() => getAnsData());
  };

  const clearall = () => {
    list2.map((i) => deletedata(i._id));
  };
  return (
    <>
      <input
        value={quesno}
        onChange={(e) => setQuesno(e.target.value)}
        type="text"
      />
      <input
        value={ques}
        onChange={(e) => setQues(e.target.value)}
        type="text"
      />
      <input
        value={opt1}
        onChange={(e) => setOpt1(e.target.value)}
        type="text"
      />
      <input
        value={opt2}
        onChange={(e) => setOpt2(e.target.value)}
        type="text"
      />
      <input
        value={opt3}
        onChange={(e) => setOpt3(e.target.value)}
        type="text"
      />
      <input
        value={opt4}
        onChange={(e) => setOpt4(e.target.value)}
        type="text"
      />
      <input
        value={cans}
        onChange={(e) => setCans(e.target.value)}
        type="text"
      />

      <input type="submit" name="Submit" onClick={() => postdata()} />
      <br></br>
      {list.map((i, index) => (
        <button
          className="btnqno"
          style={{ backgroundColor: color1(i.quesno) }}
          onClick={() => setCurrentQue(index)}
        >
          {i.quesno}
        </button>
      ))}
      <br></br>
      <button
        style={{
          margin: "10px",
          border: "1px solid grey",
          borderRadius: "5px",
        }}
      >
        Question{list[currentQue]?.quesno}
      </button>
      <p style={{ margin: "10px", borderRadius: "5px" }}>
        {list[currentQue]?.ques}
      </p>
      <div className="btnopt">
        <button
          onClick={() =>
            postAnsData(list[currentQue]?.quesno, "a", list[currentQue]?.cans)
          }
          style={{ backgroundColor: color2(list[currentQue]?.quesno, "a") }}
        >
          {list[currentQue]?.opt1}
        </button>
        <br></br>
        <button
          onClick={() =>
            postAnsData(list[currentQue]?.quesno, "b", list[currentQue]?.cans)
          }
          style={{ backgroundColor: color2(list[currentQue]?.quesno, "b") }}
        >
          {list[currentQue]?.opt2}
        </button>
        <br></br>
        <button
          onClick={() =>
            postAnsData(list[currentQue]?.quesno, "c", list[currentQue]?.cans)
          }
          style={{ backgroundColor: color2(list[currentQue]?.quesno, "c") }}
        >
          {list[currentQue]?.opt3}
        </button>
        <br></br>
        <button
          onClick={() =>
            postAnsData(list[currentQue]?.quesno, "d", list[currentQue]?.cans)
          }
          style={{ backgroundColor: color2(list[currentQue]?.quesno, "d") }}
        >
          {list[currentQue]?.opt4}
        </button>
      </div>
      {currentQue > 0 ? (
        <button onClick={() => setCurrentQue(currentQue - 1)}>Previous</button>
      ) : null}
      <button>Hint</button>

      <button>Hint Video</button>
      {currentQue < 6 ? (
        <button onClick={() => setCurrentQue(currentQue + 1)}>Next</button>
      ) : null}
      <button
        onClick={() => {
          if (window.confirm("are you sure")) clearall();
        }}
      >
        Clear
      </button>

      <button onClick={() => {}}>Clear Incorrect</button>
      <button>Submit Sheet</button>
      <button>Close Sheet</button>
      <button onClick={() => setShow(!show)}>Calculator</button>
      {show === false ? (
        <Calculator/>
      ) : null}
      {/* <Switch {...label} defaultChecked />
<Switch {...label} />
<Switch {...label} disabled defaultChecked />
<Switch {...label} disabled /> */}
      
    </>
  );
}
