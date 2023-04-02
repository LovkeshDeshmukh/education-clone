import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  useEffect(()=>{getData()},[])
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userdata, setUserData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("http://localhost:5001/api/userdata")
      .then((res) => setUserData(res.data.data));
  };

  const loginCheck = () => {
    
    const newList = userdata.filter((i) => i.username === username);
    if (newList.length > 0) {
      if (newList[0].password === password) {
        navigate("/TopResults");
        localStorage.setItem('check','ok')
      } else {
        alert("password is wrong");
      }
    } else {
      alert("user not found");
    }
  };
  
  return (
    <>
      <div className="bg">
        <div className="login">
          <form autoComplete="on">
          <input
            className="inpt1"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your number or Id"
            // defaultValue=""
            autoComplete="off"
          />

          <input
            className="inpt2"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button className="btn" onClick={() => loginCheck()}>
            Submit
          </button>
          </form>
        </div>
      </div>
    </>
  );
}
