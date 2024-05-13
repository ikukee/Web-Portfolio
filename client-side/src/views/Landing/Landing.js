/* eslint-disable no-mixed-operators */
import React, { useState, useEffect } from 'react'
import "./landing.css"
import "../../components/info-bubble/info.css"
import { Info } from '../../components/info-bubble/info';
import { Projects } from '../../components/projects-bubble/projects';
import { Experience } from '../../components/experience-bubble/experience';
import 'font-awesome/css/font-awesome.min.css';
import "../../components/info-bubble/info.css";
export const Landing = () => {
  const [info, showInfo] = useState(true)
  const [projects, showProjects] = useState(false)
  const [experience, showExperience] = useState(false)

  const [textInfo, showTextInfo] = useState(false);
  const [textExp, showTextExp] = useState(false);
  const [textProject, showTextProject] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(true);
  const navigation_action = (i) => {
    switch (i) {
      case 1:
        showInfo(true); showProjects(false); showExperience(false);
        setArrowVisible(true)
        break;
      case 2:
        showExperience(true); showProjects(false); showInfo(false);
        setArrowVisible(true);
        break;
      case 3:
        showProjects(true); showExperience(false); showInfo(false);
        setArrowVisible(true);
        break;
      default:
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.main');
      const scrollPosition = container.scrollTop;

      // Adjust this value as needed
      const threshold =
        container.scrollHeight - container.clientHeight - 200; // 20px above the bottom of the container

      if (scrollPosition >= threshold) {
        setArrowVisible(false);
      } else {
        setArrowVisible(true);
      }
    };
    handleScroll();
    const container = document.querySelector('.main');
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [info, projects, experience]);
  return (<>

    <div class="title-bar">
      <svg class="load"
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        preserveAspectRatio="x200y200 meet"
        viewBox="40 15 100 150"
        id="svg2"
        version="1.1">
        <g stroke-width="0.3" fill="#fff" stroke="#fff" fill-rule="nonzero">

          <path d="M 113.5,45.5 C 116.207,50.9135 118.873,56.2469 121.5,61.5C 122.167,61.5 122.5,61.8333 122.5,62.5C 121.318,66.5773 121.651,70.5773 123.5,74.5C 123.815,78.3714 123.482,82.0381 122.5,85.5C 122.19,84.2617 121.69,84.2617 121,85.5C 118.299,97.6525 112.132,107.652 102.5,115.5C 101.427,116.251 101.26,117.251 102,118.5C 111.833,128.333 121.667,138.167 131.5,148C 122.173,148.5 112.839,148.666 103.5,148.5C 90.1728,135.006 77.0061,121.339 64,107.5C 63.5001,89.8365 63.3334,72.1698 63.5,54.5C 70.5,61.1667 77.5,67.8333 84.5,74.5C 84.5,82.8333 84.5,91.1667 84.5,99.5C 84.4701,100.497 84.9701,101.164 86,101.5C 94.6137,97.9037 99.6137,91.5704 101,82.5C 100.722,83.4158 100.222,84.0825 99.5,84.5C 100.342,79.213 100.676,73.8797 100.5,68.5C 101.097,68.2648 101.43,67.7648 101.5,67C 100.999,63.9515 99.6661,61.4515 97.5,59.5C 93.7971,52.8074 88.1304,48.8074 80.5,47.5C 73.7186,45.8701 67.0519,46.5368 60.5,49.5C 56.1667,44.5 51.5,39.8333 46.5,35.5C 62.3562,24.9862 79.0228,23.8195 96.5,32C 102.905,35.5724 108.572,40.0724 113.5,45.5 Z" />
          <path d="M 113.5,45.5 C 108.572,40.0724 102.905,35.5724 96.5,32C 79.0228,23.8195 62.3562,24.9862 46.5,35.5C 45.6618,35.1583 45.3284,34.4916 45.5,33.5C 59.9311,25.0382 75.2645,23.2048 91.5,28C 101.018,31.2385 108.351,37.0718 113.5,45.5 Z" />
          <path d="M 80.5,47.5 C 76.9581,47.1872 73.6248,47.5206 70.5,48.5C 68.1944,48.9926 65.861,49.3259 63.5,49.5C 62.3478,50.625 61.3478,50.625 60.5,49.5C 67.0519,46.5368 73.7186,45.8701 80.5,47.5 Z" />
          <path d="M 70.5,48.5 C 73.6248,47.5206 76.9581,47.1872 80.5,47.5C 88.1304,48.8074 93.7971,52.8074 97.5,59.5C 96.8333,59.1667 96.1667,58.8333 95.5,58.5C 88.8707,51.0222 80.5374,47.6889 70.5,48.5 Z" />
          <path d="M 113.5,45.5 C 117.734,49.9676 120.401,55.301 121.5,61.5C 118.873,56.2469 116.207,50.9135 113.5,45.5 Z" />
          <path d="M 95.5,58.5 C 96.1667,58.8333 96.8333,59.1667 97.5,59.5C 97.5,60.1667 97.5,60.8333 97.5,61.5C 96.0937,61.0269 95.427,60.0269 95.5,58.5 Z" />
          <path d="M 97.5,59.5 C 99.6661,61.4515 100.999,63.9515 101.5,67C 101.43,67.7648 101.097,68.2648 100.5,68.5C 99.2638,66.351 98.2638,64.0177 97.5,61.5C 97.5,60.8333 97.5,60.1667 97.5,59.5 Z" />
          <path d="M 122.5,62.5 C 123.272,66.4517 123.605,70.4517 123.5,74.5C 121.651,70.5773 121.318,66.5773 122.5,62.5 Z" />
          <path d="M 84.5,99.5 C 91.8306,96.8361 96.8306,91.8361 99.5,84.5C 100.222,84.0825 100.722,83.4158 101,82.5C 99.6137,91.5704 94.6137,97.9037 86,101.5C 84.9701,101.164 84.4701,100.497 84.5,99.5 Z" />

          <path d="M 122.5,85.5 C 120.1,98.6456 113.433,108.979 102.5,116.5C 102.5,116.167 102.5,115.833 102.5,115.5C 112.132,107.652 118.299,97.6525 121,85.5C 121.69,84.2617 122.19,84.2617 122.5,85.5 Z" />
          <path d="M 102.5,115.5 C 102.5,115.833 102.5,116.167 102.5,116.5C 112.812,127.146 123.145,137.813 133.5,148.5C 123.522,149.499 113.522,149.832 103.5,149.5C 103.5,149.167 103.5,148.833 103.5,148.5C 112.839,148.666 122.173,148.5 131.5,148C 121.667,138.167 111.833,128.333 102,118.5C 101.26,117.251 101.427,116.251 102.5,115.5 Z" />
          <path d="M 63.5,120.5 C 71.5749,130.079 80.2415,139.246 89.5,148C 80.657,148.17 71.9903,148.67 63.5,149.5C 62.1812,140.405 62.1812,130.738 63.5,120.5 Z" />
          <path d="M 63.5,149.5 C 71.9903,148.67 80.657,148.17 89.5,148C 80.2415,139.246 71.5749,130.079 63.5,120.5C 72.7853,129.118 82.1186,138.452 91.5,148.5C 82.1904,149.498 72.8571,149.832 63.5,149.5 Z" />
        </g>
      </svg>

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

            <i className={`fa fa-user ${textInfo || info ? "selected" : ""}`} onClick={(e) => { navigation_action(1) }} onMouseEnter={(e) => showTextInfo(true)} onMouseLeave={(e) => showTextInfo(false)} style={{ fontSize: 30 }}></i>
          </div>
          <div>
            <i className={`fa fa-laptop ${textExp || experience ? "selected" : ""}`} onClick={(e) => { navigation_action(2) }} onMouseEnter={(e) => showTextExp(true)} onMouseLeave={(e) => showTextExp(false)} style={{ fontSize: 30 }}></i>
          </div>
          <div>
            <i className={`fa fa-folder-open ${textProject || projects ? "selected" : ""}`} onClick={(e) => { navigation_action(3) }} onMouseEnter={(e) => showTextProject(true)} onMouseLeave={(e) => showTextProject(false)} style={{ fontSize: 30 }}></i>
          </div>
        </div>
        <div class="content">
          <p className={textInfo || info ? "selected" : "unselected"} onClick={(e) => { navigation_action(1) }} onMouseEnter={(e) => showTextInfo(true)} onMouseLeave={(e) => showTextInfo(false)} >Info</p>
          <p className={textExp || experience ? "selected" : "unselected"} onClick={(e) => { navigation_action(2) }} onMouseEnter={(e) => showTextExp(true)} onMouseLeave={(e) => showTextExp(false)} >Experiences</p>
          <p className={textProject || projects ? "selected" : "unselected"} onClick={(e) => { navigation_action(3) }} onMouseEnter={(e) => showTextProject(true)} onMouseLeave={(e) => showTextProject(false)}>Projects</p>
          {projects && <div class="date-items">
            <p class="date-item" onClick={() => window.location.href = "/#2024"}>2024</p>
            <p class="date-item" onClick={() => window.location.href = "/#2023"}>2023</p>
          </div>}
        </div>

      </div>

      <div class="main" >
        {info && <Info />}
        {experience && <Experience />}
        {projects && <Projects />}
        <svg className={`arrows ${arrowVisible ? '' : 'hidden'}`}>
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>

    </div>

  </>)

}
