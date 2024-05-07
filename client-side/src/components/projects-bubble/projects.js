import React from 'react'
import nocsAMS from "../../assets/nocsams.jpg"
import "./projects.css"
import ebakwit from "../../assets/ebakwit.jpg"
import sbtf from "../../assets/sbtf.jpg"
import sbtf2 from "../../assets/sbtf2.jpg"
import githubIcon from "../../assets/icons8-github.svg"
export const Projects = () => {
  const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{  
        entry.target.classList.remove('show');
      }
    })
  })
  const hiddenItems = document.querySelectorAll('.projects');
  hiddenItems.forEach((el)=>{
    observer.observe(el);
  })
  return (<>
  <h1 id="2024">2024</h1>
      <div class="projects">
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
        <button onClick={(e)=>window.open("https://github.com/ikukee/NOCS_Internlogger-PUBLIC",'_blank').focus()}><img src={githubIcon}alt="github"/><p>View on Github</p></button>
      </div>
      <div class="projects">
        <h2>SBTF: Patient Record System</h2>
        <h5>Apri 2024 - April 2024</h5>
        <p>
          Developed using ReactJS/Firebase
        </p>
        <p>
          Is a patient record system it aims to provide a seamless backtrack records of multiple patient records.
        </p>
        <div class="attached-items">
          <div class="item-card">
            <img src={sbtf} style={{ height: "250px" }} />
          </div>
          <div class="item-card">
            <img src={sbtf2} style={{ height: "250px" }} />
          </div>
        </div>
        <button onClick={(e)=>window.open("https://github.com/ikukee/patient-records",'_blank').focus()}><img src={githubIcon}alt="github"/><p>View on Github</p></button>
      </div>
      <h1 id="2023">2023</h1>
      <div class="projects">
        <h2>Naga E-Bakwit</h2>
        <h5>August 2023 - December 2023</h5>
        <p>
          Developed using Ruby on Rails | POSTGRESQL
        </p>
        <p>
          Naga E-Bakwit is a capstone project to assist the City Social Welfare Development Office of Naga City. During Disasters, it aims to provide a seamless evacuee monitoring, disaster report generation, and evacuation center report.
          Providing CSWDO a tool to boost the efficiency and productivity of their relief operations during disasters.
        </p>
        <div class="attached-items">
          <div class="item-card">
            <img src={ebakwit} style={{ height: "250px" }} />
          </div>
        </div>
        <button onClick={(e)=>window.open("https://github.com/ikukee/E-bakwit",'_blank').focus()}><img src={githubIcon}alt="github"/><p>View on Github</p></button>
      </div>
      
  </>)
}
