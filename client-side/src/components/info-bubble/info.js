import React from 'react'
import "./info.css";
import 'font-awesome/css/font-awesome.min.css';
import cIcon from "../../assets/c++Icon.png"
import postgres from "../../assets/postgres.png"
import mysql from "../../assets/mysql.png"
import firebase from "../../assets/firebase.png"
import vue from "../../assets/icons8-vue-js-48.png"
import mongodb from "../../assets/mongodb.png"
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
import docker from "../../assets/docker.png"
import webpack from "../../assets/webpack.png"

export const Info = () => {

  return (
    <>
      

      <p class="info-name" ><span>ROMEO</span> <span>PANIS II</span></p>
      <p class="desc">Continous Learning and Continous Development</p>
      
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
              <img src={python} alt="python" />
            </div>
            <div class="tile">
              <img src={rubyIcon} alt="ruby" />
            </div>
          </div>
          <h1>Stacks</h1>
          <div class="table">
            <div class="tile">
              <img src={nodeIcon} alt="nodejs" />
            </div>
            <div class="tile">
              <img src={reactIcon} alt="reactjs" />
            </div>
            <div class="tile">
              <img src={expressIcon} alt="express" />
            </div>
            <div class="tile">
              <img src={nextJSIcon} alt="nextjs" />
            </div>
            <div class="tile">
              <img src={rubyRails} alt="rubyonrails" />
            </div>
            <div class="tile">
              <img src={vue} alt="vue" />
            </div>
          </div>
        </div>
        <div class="column">
          <h1>Tools</h1>
          <div class="table">
            <div class="tile">
              <img src={vscodeIcon} alt="vscode" />
            </div>
            <div class="tile">
              <img src={postman} alt="postman" style={{ width: "50px", height: "50px" }} />
            </div>
            <div class="tile">
              <img src={docker} alt="docker" />
            </div>
          </div>
          <h1>Others</h1>
          <div class="table">
            <div class="tile">
              <img src={awsIcon} alt="aws" />
            </div>
            <div class="tile">
              <img src={mongodb} alt="mongodb" />
            </div>
            <div class="tile">
              <img src={mysql} alt="mysql" />
            </div>
            <div class="tile">
              <img src={postgres} alt="postgres" />
            </div>
            <div class="tile">
              <img src={firebase} alt="firebase" />
            </div>

            <div class="tile">
              <img src={webpack} alt="webpack" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
