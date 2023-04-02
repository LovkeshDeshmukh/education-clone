import React, { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import "../Calculator.css";

const Calculator = () => {
  const [first, setFirst] = useState("");
  return (
    <>
      <div className="maincalc">
        <div className="calc_history">
          <div className="cal_darkmode">
           <LightModeIcon style={{color:'orange'}}/>
            <div className="cal_slider">
              <div className="cal_slider_ball"
              ></div>
            </div>
            <DarkModeIcon style={{color:'grey'}}/>
          </div>
        </div>
        <div className="calc_input_btn">
          <input
            // !dir="rtl"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            className="iptcalc"
          />
          <div className="calc_btn">
            <button onClick={() => setFirst(first + "Sin")}>Sin</button>
            <button>Cos</button>
            <button>tan</button>
            <button>Deg</button>
            <button>Rad</button>
            <button
              style={{ backgroundColor: "#8EA7E9" }}
              onClick={() => {
                setFirst(first + "7");
              }}
            >
              7
            </button>
            <button
              style={{ backgroundColor: "#8EA7E9" }}
              onClick={() => {
                setFirst(first + "8");
              }}
            >
              8
            </button>
            <button
              style={{ backgroundColor: "#8EA7E9" }}
              onClick={() => {
                setFirst(first + "9");
              }}
            >
              9
            </button>
            <button
              onClick={() => {
                setFirst(first + "+");
              }}
            >
              +
            </button>
            <button onClick={() => setFirst(first.slice(0, first.length - 1))}>
              Back
            </button>
            <button> sin⁻¹</button>
            <button>cos⁻¹</button>
            <button>tan⁻¹</button>
            <button>π</button>
            <button>e</button>
            <button
              style={{ backgroundColor: "#8EA7E9" }}
              onClick={() => {
                setFirst(first + "4");
              }}
            >
              4
            </button>
            <button
              style={{ backgroundColor: "#8EA7E9" }}
              onClick={() => {
                setFirst(first + "5");
              }}
            >
              5
            </button>
            <button
              style={{ backgroundColor: "#8EA7E9" }}
              onClick={() => {
                setFirst(first + "6");
              }}
            >
              6
            </button>
            <button
              onClick={() => {
                setFirst(first + "-");
              }}
            >
              -
            </button>
            <button>Ans</button>
            <button>xʸ</button>
            <button>x³</button>
            <button>x²</button>
            <button>eˣ</button>
            <button>10ˣ</button>
            <button
              style={{ backgroundColor: "#8EA7E9" }}
              onClick={() => {
                setFirst(first + "1");
              }}
            >
              1
            </button>
            <button
              style={{ backgroundColor: "#8EA7E9" }}
              onClick={() => {
                setFirst(first + "2");
              }}
            >
              2
            </button>
            <button
              style={{ backgroundColor: "#8EA7E9" }}
              onClick={() => {
                setFirst(first + "3");
              }}
              s
            >
              3
            </button>
            <button
              onClick={() => {
                setFirst(first + "*");
              }}
            >
              *
            </button>
            <button>M+</button>
            <button>y√x</button>
            <button>3√x</button>
            <button>√x</button>
            <button>ln</button>
            <button>log</button>
            <button
              style={{ backgroundColor: "#8EA7E9" }}
              onClick={() => {
                setFirst(first + "0");
              }}
            >
              0
            </button>
            <button style={{ backgroundColor: "#8EA7E9" }}>.</button>
            <button>EXP</button>
            <button
              onClick={() => {
                setFirst(first + "/");
              }}
            >
              /
            </button>
            <button>M-</button>
            <button>(</button>
            <button>)</button>
            <button>1/x</button>
            <button>%</button>
            <button>n!</button>
            <button>±</button>
            <button>RND</button>
            <button style={{ backgroundColor: "#8EA7E9" }}>AC</button>
            <button
              onClick={() => setFirst(eval)}
              style={{ backgroundColor: "#8EA7E9" }}
            >
              =
            </button>
            <button>MR</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
