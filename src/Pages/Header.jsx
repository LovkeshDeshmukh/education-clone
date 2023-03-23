import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "indes"

export default function Header() {
  const [showDiv, setShowDiv] = useState(false);
  const navigate = useNavigate();
  const [head, setHead] = useState(0);
  return (
    <>
      <div className="boxnav">
        <nav className="mainnav">
          <ul className="nav">
            <li>
              <img
                className="img"
                src="logo.png"
                alt="McMcube"
                style={{ width: "60px", height: "60px", borderRadius: "60px" }}
              />
            </li>
            {/* <li onClick={() => setHead(1)}>
              <Link className={head === 1 ? "link2" : "link1"} to="/">
                Home
              </Link>
            </li> */}
            <li onClick={() => setHead(2)}>
              <Link className={head === 2 ? "link2" : "link1"} to="/Syllabus">
                Syllabus
              </Link>
            </li>
            <li onClick={() => setHead(3)}>
              <Link className={head === 3 ? "link2" : "link1"} to="/TopResults">
                Top Results
              </Link>
            </li>
            <li onClick={() => setHead(4)}>
              <Link
                className={head === 4 ? "link2" : "link1"}
                to="/TopColleges"
              >
                Top Colleges
              </Link>
            </li>
            <li onClick={() => setHead(5)}>
              <Link className={head === 5 ? "link2" : "link1"} to="/TimeTable">
                Time Table
              </Link>
            </li>
            <li onClick={() => setHead(6)}>
              <Link
                className={head === 6 ? "link2" : "link1"}
                to="/TopicSheets"
              >
                Topic Sheets
              </Link>
            </li>
            <li onClick={() => setHead(7)}>
              <Link className={head === 7 ? "link2" : "link1"} to="/TestPapers">
                Test Papers
              </Link>
            </li>
            <li onClick={() => setHead(8)}>
              <Link
                className={head === 8 ? "link2" : "link1"}
                to="/CompletedSheets"
              >
                Completed Sheets
              </Link>
            </li>
            <li className={head === 10 ? "link2" : "link1"}
              style={{ 
                color: "white",
                
                "&:hover":{color: "black",
                backgroundColor: "aqua",
                borderRadius: 5,
                  
                }
              }}
              onClick={() => {setShowDiv(!showDiv);setHead(10)}}
            >
              Daily Task
            </li>
            <li className={head === 9 ? "link2" : "link1"}
              style={{ color: "white" }}
              onClick={() => {
                localStorage.removeItem("check");
                navigate("/");
                setHead(9)
              }}
            >
              Log Out
            </li>
            {/* <li>
              <select name="" id="">
                <option value=""></option>
                <option value=""></option>
              </select>
            </li> */}
          </ul>
          {showDiv === true ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 180,
                marginLeft: 1110,
                position: "fixed",
                backgroundColor: "white",
                border: "2px solid black",
                borderRadius: 20,
                top: 79,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <li>Daily Vocab Sheet</li>
              <li>Daily Vocab Sheet</li>
              <li>Daily Vocab Sheet</li>
              <li>Daily Vocab Sheet</li>
            </div>
          ) : null}
        </nav>
      </div>
    </>
  );
}
