import React, { useState } from 'react'
import red from '../../assets/red.jpg'
import "./landing.css"
export const Landing = () => {
  const [info, showInfo] = useState(false)
  const [projects, showProjects] = useState(false)
  const [contact, showContact] = useState(false)
  const [positions, setPositions] = useState([])
  const [counter, setCounter] = useState(0)
  const handleClick = (x) => {
    if (x === "info") {
      setCounter((x) => ++x);
      showInfo(true)
    } else if (x === "proj") {
      setCounter((x) => ++x);
      showProjects(true)
    } else if (x === "cont") {
      setCounter((x) => ++x);
      showContact(true)
    }
  }
  return (<>
    <div class="terminal-look">
      <div class="content-area">
        <p><span class="green">root@RomeoPanisII:</span><span class="blue"> ~</span>$ help</p>
        <p>Click any of these following commands:</p>
        <p>{counter}</p>
        <p onClick={(e) => { handleClick("info") }}><span class="blue">Info</span></p>
        <p onClick={(e) => { handleClick("proj") }}><span class="blue">Projects</span></p>
        <p onClick={(e) => { handleClick("cont") }}><span class="blue">Contact_me</span></p>
        {info && <p>TEST</p>}
        {positions}
      </div>

    </div>
  </>)
}
