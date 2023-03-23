import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TopColleges() {
  useEffect(() => {
    getdata();
  }, []);
  
  const [name, setName] = useState("");
  const [exam, setExam] = useState("");
  const [fee, setFees] = useState("");
  const [avgpackage, setAvgPackage] = useState("");
  const [location, setLocation] = useState("");
  const [returned, setReturned] = useState([]);

  const postdata = () => {
    const item = {
      name: name,
      exam: exam,
      fee: fee,
      avgpackage: avgpackage,
      location: location,
    };
    axios.post("http://localhost:5001/api/topcolleges", item);
  };

  const getdata = () => {
    axios
      .get("http://localhost:5001/api/topcolleges")
      .then((res) => setReturned(res.data.data));
  };

  return (
    <>
      {/* <input
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={exam}
        placeholder="Enter exam"
        onChange={(e) => setExam(e.target.value)}
      />
      <input
        value={fee}
        placeholder="Enter fee"
        onChange={(e) => setFees(e.target.value)}
      />
      <input
        value={avgpackage}
        placeholder="Enter avgpackage"
        onChange={(e) => setAvgPackage(e.target.value)}
      />
      <input
        value={location}
        placeholder="Enter location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={() => postdata()}>Submit</button> */}

      <table style={{ width: "100%" }}>
        <thead
          style={{
            width: "100%",
            backgroundColor: "orange",
            height: 60,
            justifyContent: "space-between",
          }}
        >
          <th>Rank</th>
          <th style={{ width: "40%" }}>Name</th>
          <th>Exam</th>
          <th>Fees</th>
          <th>Average Package</th>
          <th>Location</th>
        </thead>
        <tbody
          style={{
            backgroundColor: "lightblue",
            border: "2px solid black",
            justifyContent: "space-between",
          }}
        >
          {returned.map((item, index) => {
            if (index > 0) {
              return (
                <tr style={{ height: 50, border: "2px solid black" }}>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.exam}</td>
                  <td>{item.fee}</td>
                  <td>{item.avgpackage}</td>
                  <td>{item.location}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}
