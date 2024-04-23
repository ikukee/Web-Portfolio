import React from 'react'
import "./experience.css";
import nocsAMS from "../../assets/nocsams.jpg"
import { TypeAnimation } from 'react-type-animation';
export const Experience = () => {
    return (
        <div>
            <div class="item">
                <h2>Junior Fullstack and Junior System Administrator</h2>
                <h5>January 2024 - April 2024</h5>
                <ul>
                    <li>
                        Developed a web system using MERN Stack that helped the organization save thousands of dollars, and provided a seamless attendance monitoring system.
                    </li>
                    <li>
                        Deployed web application on a Server with RHEL OS (ALMA LINUX) Implemented server security features (ClamAV, Iptables, etc.)
                    </li>
                    <li>
                        Implemented web security features (CORS, Input validations, etc.)
                    </li>
                    <li>
                        Wrote technical documentation and coding practices to aid the future development and improvement of the application.
                    </li>
                </ul>
                <h4>RELEVANT SKILLS:</h4>
                <p>Docker, Linux commands, NodeJS, ReactJS, Javascript, MongoDB, REST API, Web security features, Architectural patterns.</p>
                <div class="attached-items">
                    <div class="item-card">
                        <img src={nocsAMS} style={{ height: "250px" }} />
                    </div>
                </div>
            </div>

        </div>
    )
}
