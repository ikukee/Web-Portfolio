import React from 'react'
import red from '../../assets/red.jpg'
import "./landing.css"
export const Landing = () => {
  return (<>
    <div class="splash-header">
      <img src={red} className='my_picture' alt="my_picture" />
      <div class="splash-content">
        <h1>ROMEO M. PANIS II</h1>
        <p></p>
      </div>
    </div>
  </>)
}
