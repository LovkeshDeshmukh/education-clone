import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import syllabus from "../Images/syllabus.png";
import syllabus2 from "../Images/syllabus2.png";

export default function Syllabus() {
  useEffect(()=>{
    const loginChecker = localStorage.getItem('check')
    if(loginChecker!=="ok"){navigate('/')}
  },[])
  const navigate = useNavigate()
  return (
    <>
      <div className="sylbox">
        <div className="syllabusmain">
          <img
            style={{ width: "100%", height: "350px" }}
            src={syllabus}
            alt="image"
          />
        </div>
        <br />
        <h4 style={{ color: "white",marginLeft:"0px" }}>
          For Registration{" "}
          <Link
            style={{ color: "Yellow" }}
            to="https://examinationservices.nic.in/examsys22/root/Home.aspx?enc=1Agc7dh0pU+tyeFB1Yuv8JnsNm0k7YT/LOSZqsCGzk4JZgNIJV9OdUB4MEiaeVz5"
          >
            Click Here
          </Link>
        </h4>
        <br />
        <div className="syllabusmain">
          <img
            style={{ width: "100%", height: "350px" }}
            src={syllabus2}
            alt="image"
          />
        </div>
      </div>
    </>
  );
}
