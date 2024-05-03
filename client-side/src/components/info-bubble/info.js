import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import "./info.css";
import 'font-awesome/css/font-awesome.min.css';
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

    </>
  )
}
