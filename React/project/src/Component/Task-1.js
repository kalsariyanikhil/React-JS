import React from "react";
import "../Component/Task-1.css"
import img from "../img/about-6.jpg"



const A = new Date(2024, 4, 5, 9)
let time = A.getHours();
let Timing = "";

if (time < 12) {
    Timing = "GooD Morning"
} else if (time >= 12 && time < 19) {
    Timing = "GooD AfterNoon"
}
else {
    Timing = "GooD Night"
}

function Tag7() {
    return <div className="relative p-10">
        <img src={img} className="w-[450px] h-[500px] m-auto" alt=""/>
        <h1 className="text-grren-500 font-bold text-3xl absolute bottom-0 left-0 right-0 m-auto m-20">
          <span style={{color: "red"}} >Hello Mam - </span>  {Timing}
        </h1>
    </div>
}

export default Tag7;