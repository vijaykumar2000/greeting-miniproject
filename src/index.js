import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";

let currDate = new Date();
currDate = currDate.getHours();
let greetings = "";
const c1 ={};

if(currDate>=1 && currDate <12){
  greetings = "Good Morning";
  c1.color = "Green";
} else if (currDate>=12 && currDate <19){
  greetings = "Good Afternoon";
  c1.color = "orange";
}else{
  greetings ="Good Night";
  c1.color = "Red";
}

ReactDOM.render(
  <>
  <div>
    <h1 >Hello, <span style={c1}>{greetings}</span></h1>
    </div>
  </>,
  document.getElementById("root")
);