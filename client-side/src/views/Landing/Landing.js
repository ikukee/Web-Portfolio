/* eslint-disable no-mixed-operators */
import React, { useState } from 'react'
import "./landing.css"
import "../../components/info-bubble/info.css"
import { Info } from '../../components/info-bubble/info';
import { Projects } from '../../components/projects-bubble/projects';
import { Experience } from '../../components/experience-bubble/experience';
import 'font-awesome/css/font-awesome.min.css';
import "../../components/info-bubble/info.css"
export const Landing = () => {
  const [info, showInfo] = useState(true)
  const [projects, showProjects] = useState(false)
  const [experience, showExperience] = useState(false)

  const [textInfo, showTextInfo] = useState(false);
  const [textExp, showTextExp] = useState(false);
  const [textProject, showTextProject] = useState(false);
  const navigation_action = (i) => {
    switch (i) {
      case 1:
        showInfo(true); showProjects(false); showExperience(false)
        break;
      case 2:
        showExperience(true); showProjects(false); showInfo(false)
        break;
      case 3:
        showProjects(true); showExperience(false); showInfo(false)
        break;
      default:
    }
  }
  return (<>

    <div class="title-bar">
      <p class="title">ROMEO PORTFOLIO</p>

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

            <i className={`fa fa-user ${textInfo || info && "selected"}`} onClick={(e) => { navigation_action(1) }} onMouseEnter={(e) => showTextInfo(true)} onMouseLeave={(e) => showTextInfo(false)} style={{ fontSize: 30 }}></i>
          </div>
          <div>
            <i className={`fa fa-laptop ${textExp || experience && "selected"}`} onClick={(e) => { navigation_action(2) }} onMouseEnter={(e) => showTextExp(true)} onMouseLeave={(e) => showTextExp(false)} style={{ fontSize: 30 }}></i>
          </div>
          <div>
            <i className={`fa fa-folder-open ${textProject || projects && "selected"}`} onClick={(e) => { navigation_action(3) }} onMouseEnter={(e) => showTextProject(true)} onMouseLeave={(e) => showTextProject(false)} style={{ fontSize: 30 }}></i>
          </div>
        </div>
        <div class="content">
          <p className={textInfo || info ? "selected" : ""} onClick={(e) => { navigation_action(1) }} onMouseEnter={(e) => showTextInfo(true)} onMouseLeave={(e) => showTextInfo(false)} >Info</p>
          <p className={textExp || experience ? "selected" : ""} onClick={(e) => { navigation_action(2)}} onMouseEnter={(e) => showTextExp(true)} onMouseLeave={(e) => showTextExp(false)} >Experiences</p>
          <p className={textProject || projects ? "selected" : ""} onClick={(e) => { navigation_action(3)}} onMouseEnter={(e) => showTextProject(true)} onMouseLeave={(e) => showTextProject(false)}>Projects</p>
          {projects && <div class="date-items">
            <p class="date-item" onClick={() => window.location.href = "/#2024"}>2024</p>
            <p class="date-item" onClick={() => window.location.href = "/#2023"}>2023</p>
          </div>}
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
