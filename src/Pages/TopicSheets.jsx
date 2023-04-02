import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

export default function TopicSheet() {
  useEffect(() => {
    getData();
  }, []);

  const [postData, setPostData] = useState([]);
  const [list, setList] = useState([]);
  const [list1, setList1] = useState([]);
  //  const [level,setLevel]=useState("")
  //  const [subject,setSubject]=useState("")
  //  const [topic,setTopic]=useState("")
  //  const [sheettype,setSheettype]=useState("")

  const postdata = () => {
    axios.post("http://localhost:5001/api/topicsheewets", postData);
  };
  const getData = () => {
    axios.get("http://localhost:5001/api/topicsheets").then((res) => {
      setList(res.data.data);
      setList1(res.data.data);
    });
  };

  const searchfn = (x) => {
    const levelData = list1.filter((i) => i.level === x);
    setList(levelData);
  };
  const searchfn1 = (y) => {
    const sub = list1.filter((i) => i.subject === y);
    setList(sub);
  };
  const searchfn2 = (x) => {
    const levelData = list1.filter((i) => i.topic === x);
    setList(levelData);
  };
  const searchfn3 = (x) => {
    const levelData = list1.filter((i) => i.level === x);
    setList(levelData);
  };

  return (
    <>
      <input
        value={postData?.level}
        onChange={(e) => setPostData({ ...postData, level: e.target.value })}
        type="text"
      />
      <input
        value={postData?.subject}
        onChange={(e) => setPostData({ ...postData, subject: e.target.value })}
        type="text"
      />
      <input
        value={postData?.topic}
        onChange={(e) => setPostData({ ...postData, topic: e.target.value })}
        type="text"
      />
      <input
        value={postData?.sheettype}
        onChange={(e) =>
          setPostData({ ...postData, sheet: e.target.value })
        }
        type="text"
      />

      <button onClick={() => postdata()}>submit</button>

      <div className="boxtestpaper">
        <div className="box1testpaper">
          <label>Level</label>
          <select onChange={(e) => searchfn(e.target.value)}>
            <option>FOUNDATION</option>
            <option>BASIC</option>
          </select>
        </div>
        <div>
          <label>Subject</label>
          <select onChange={(e) => searchfn1(e.target.value)}>
            <option>QA</option>
            <option>LR</option>
            <option>DI</option>
            <option>VA</option>
            <option>GA</option>
          </select>
        </div>
        <div>
          <label>Topic</label>
          <select onChange={(e) => searchfn2(e.target.value)}>
            <option>AVERAGE</option>
            <option>PROFIT AND LOSS</option>
            <option>HEIGHT and DISTANCE</option>
            <option>PROGRESSION</option>
          </select>
        </div>
        <div>
          <label>Sheet Type</label>
          <select onChange={(e) => searchfn3(e.target.value)}>
            <option>MAIN</option>
            <option>PRACTICE</option>
          </select>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <table className="table" style={{ width: "100%" }}>
        <thead
          style={{ width: "100%", backgroundColor: "orange", height: 50 }}
          className="tablehead"
        >
          <th>Level</th>
          <th>Subject</th>
          <th>Topic</th>
          <th>Sheet</th>
          <th>Action</th>
        </thead>
        <tbody>
          {list.map((i) => (
            <tr style={{ backgsroundColor: "orange" }}>
              <td>{i.level}</td>
              <td>{i.subject}</td>
              <td>{i.topic}</td>
              <td>{i.sheet}</td>
              <td><Link to='/Questionlist'><button>Start</button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
