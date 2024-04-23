import React from 'react'
import nocsAMS from "../../assets/nocsams.jpg"
import "./projects.css"
export const Projects = () => {
  
  return (<>
      <div class="item">
        <h2>NOCS AMS: Attendance Monitoring System</h2>
        <h5>January 2024 - April 2024</h5>
        <p>
          Developed using MongoDB,Express,ReactJS, and NodeJS also known as the MERN stack,
        </p>
        <p>
          It is specifically tailored to aid Network Operations and Computer Services in monitoring, attendance checking, and attendance report generation.
          To provide a seamless process of monitoring and attendance checking, boosting the efficiency of providing attendance reports, and date time record generation.
        </p>
        <div class="attached-items">
          <div class="item-card">
            <img src={nocsAMS} style={{ height: "250px" }} />
          </div>
        </div>
        <button onClick={(e)=>window.open("https://github.com/ikukee/NOCS_Internlogger-PUBLIC",'_blank').focus()}> View Github REPOSITORY</button>
      </div>
  </>)
}
