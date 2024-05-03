import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import "./info.css";
import 'font-awesome/css/font-awesome.min.css';
import cIcon from "../../assets/c++Icon.png"
import nodeIcon from "../../assets/nodeIcon.png"
import jsIcon from "../../assets/jsIcon.png"
import rubyIcon from "../../assets/rubyIcon.png"
import python from "../../assets/python.png"
import expressIcon from "../../assets/expressIcon.png"
import reactIcon from "../../assets/reactIcon.png"
import nextJSIcon from "../../assets/nextJsIcon.png"
import rubyRails from "../../assets/rubyRailsIcon.png"
import vscodeIcon from "../../assets/vscodeIcon.png"
import postman from "../../assets/postman.png"
import awsIcon from "../../assets/awsIcon.png"
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

export const Info = () => {

  return (
    <>

      <p class="info-name">ROMEO PANIS II</p>
      <p>Continous Learning and Continous Development</p>
      <h3>CONTACT:</h3>
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
      <div class="row">
        <div class="column">
          <h1>Programming Languages</h1>
          <div class="table">
            <div class="tile">
              <img src={cIcon} alt="c++" />
            </div>
            <div class="tile">
              <img src={jsIcon} alt="javascript" />
            </div>
            <div class="tile">
              <img src={python} alt="python"/>
            </div>
            <div class="tile">
              <img src={rubyIcon} alt="ruby"/>
            </div>
          </div>
          <h1>Frameworks</h1>
          <div class="table">
            <div class="tile">
              <img src={nodeIcon} alt="nodejs"/>
            </div>
            <div class="tile">
              <img src={reactIcon} alt="reactjs"/>
            </div>
            <div class="tile">
              <img src={expressIcon} alt="express"/>
            </div>
            <div class="tile">
              <img src={nextJSIcon} alt="nextjs" />
            </div>
            <div class="tile">
              <img src={rubyRails}alt="rubyonrails" />
            </div>
          </div>
        </div>
        <div class="column">
          <h1>Tools</h1>
          <div class="table">
            <div class="tile">
              <img src={vscodeIcon} alt="vscode"/>
            </div>
            <div class="tile">
              <img src={postman }  alt="postman"/>
            </div>
          </div>
          <h1>Others</h1>
          <div class="table">
            <div class="tile">
              <img src={awsIcon} alt="aws"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
