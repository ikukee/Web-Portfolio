/* eslint-disable no-mixed-operators */
import React, { useState } from 'react'
import red from '../../assets/red.jpg'
import "./landing.css"
import "../../components/info-bubble/info.css"
import { Info } from '../../components/info-bubble/info';
import { Projects } from '../../components/projects-bubble/projects';
import { Experience } from '../../components/experience-bubble/experience';
import 'font-awesome/css/font-awesome.min.css';
export const Landing = () => {
  const [info, showInfo] = useState(true)
  const [projects, showProjects] = useState(false)
  const [experience, showExperience] = useState(false)

  const [textInfo, showTextInfo] = useState(false);
  const [textExp, showTextExp] = useState(false);
  const [textProject, showTextProject] = useState(false);

  return (<>
    <div class="title-bar">
      <p>Romeo's Portfolio</p>
      <div class="contact-icons">
        <div onClick={(e) => window.open("https://linkedin.com/in/romeo-panis-ii", '_blank').focus()}>
          <p class="cont"><i class="fa fa-linkedin"></i></p>
        </div>
        <div onClick={(e) => window.open("https://wa.me/639155939354", '_blank').focus()}>
          <p class="cont"> <i class="fa fa-whatsapp"></i></p>
        </div>
        <div onClick={(e) => window.open("https://github.com/ikukee", '_blank').focus()}>
          <p class="cont"><i class="fa fa-github"></i></p>
        </div>
        <div onClick={(e) => window.open("https://mail.google.com/mail/u/0/?fs=1&to=rmpanis2@gmail.com&su=&tf=cm", '_blank').focus()}>
          <p class="cont"><i class="fa fa-google fa-2xl"></i></p>
        </div>
      </div>
    </div>
    <div class="terminal-look">
      <div class="sidebar">
        <div class="side-icons">
          <div>

            <i className={`fa fa-user ${textInfo || info && "selected"}`} onClick={(e) => { showInfo(true); showProjects(false); showExperience(false) }} onMouseEnter={(e) => showTextInfo(true)} onMouseLeave={(e) => showTextInfo(false)} style={{ fontSize: 30 }}></i>
          </div>
          <div>
            <i className={`fa fa-laptop ${textExp || experience && "selected"}`} onClick={(e) => { showExperience(true); showProjects(false); showInfo(false) }} onMouseEnter={(e) => showTextExp(true)} onMouseLeave={(e) => showTextExp(false)} style={{ fontSize: 30 }}></i>
          </div>
          <div>
            <i className={`fa fa-folder-open ${textProject || projects && "selected"}`} onClick={(e) => { showProjects(true); showExperience(false); showInfo(false) }} onMouseEnter={(e) => showTextProject(true)} onMouseLeave={(e) => showTextProject(false)} style={{ fontSize: 30 }}></i>
          </div>
        </div>
        <div class="content">
          <p className={textInfo || info ? "" : "unselected"} onClick={(e) => { showInfo(true); showProjects(false); showExperience(false) }} onMouseEnter={(e) => showTextInfo(true)} onMouseLeave={(e) => showTextInfo(false)}>Info</p>
          <p className={textExp || experience ? "" : "unselected"} onClick={(e) => { showExperience(true); showProjects(false); showInfo(false) }} onMouseEnter={(e) => showTextExp(true)} onMouseLeave={(e) => showTextExp(false)}>Experiences</p>
          <p className={textProject || projects ? "" : "unselected"} onClick={(e) => { showProjects(true); showExperience(false); showInfo(false) }} onMouseEnter={(e) => showTextProject(true)} onMouseLeave={(e) => showTextProject(false)}>Projects</p>
          {projects && <>
            <p class="date-item" onClick={() => window.location.href = "/#2024"}>2024</p>
            <p class="date-item" onClick={() => window.location.href = "/#2023"}>2023</p>
          </>}
        </div>
      </div>
      <div class="main">
        {info &&
          <Info />
        }
        {experience &&
          <Experience />
        }
        {projects &&
          <Projects />
        }
      </div>
    </div>

  </>)
}
