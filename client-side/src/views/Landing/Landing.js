import React, { useState } from 'react'
import red from '../../assets/red.jpg'
import "./landing.css"

import 'font-awesome/css/font-awesome.min.css';
export const Landing = () => {
  const [info, showInfo] = useState(true)
  const [projects, showProjects] = useState(false)
  const [experience, showExperience] = useState(false)
  
  const [textInfo, showTextInfo] = useState(false);
  const [textExp, showTextExp] = useState(false);
  const [textProject, showTextProject] = useState(false);
  
  return (<>
    
    <div class="terminal-look">
      <div class="sidebar">
        <div class="side-icons">
          <div>
            <i className="fa fa-user"  onClick={(e)=>{showInfo(true);showProjects(false);showExperience(false)}} onMouseEnter={(e)=>showTextInfo(true)} onMouseLeave={(e)=>showTextInfo(false)} style={{ fontSize: 30 }}></i>
          </div>
          <div>
            <i className="fa fa-laptop" onClick={(e)=>{showExperience(true);showProjects(false);showInfo(false)}} onMouseEnter={(e)=>showTextExp(true)} onMouseLeave={(e)=>showTextExp(false)} style={{ fontSize: 30 }}></i>
          </div>
          <div>
            <i className="fa fa-folder-open" onClick={(e)=>{showProjects(true);showExperience(false);showInfo(false)}} onMouseEnter={(e)=>showTextProject(true)} onMouseLeave={(e)=>showTextProject(false)} style={{ fontSize: 30 }}></i>
          </div> 
        </div>
        <div class="content">
          <p className={textInfo || info ? "": "unselected"}  onClick={(e)=>{showInfo(true);showProjects(false);showExperience(false)}} onMouseEnter={(e)=>showTextInfo(true)} onMouseLeave={(e)=>showTextInfo(false)}>Info</p>
          <p className={textExp || experience ?"":"unselected"} onClick={(e)=>{showExperience(true);showProjects(false);showInfo(false)}} onMouseEnter={(e)=>showTextExp(true)} onMouseLeave={(e)=>showTextExp(false)}>Experiences</p>
          <p className={textProject || projects ? "":"unselected"} onClick={(e)=>{showProjects(true);showExperience(false);showInfo(false)}} onMouseEnter={(e)=>showTextProject(true)} onMouseLeave={(e)=>showTextProject(false)}>Projects</p>
        </div>
      </div>
      <div class="main">
        {info && <div>
          <h1>ROMEO M. PANIS</h1>
          
          </div>}
      </div>
    </div>

  </>)
}
