import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

export const Info = () => {
  const [cmd, showCmd] = useState(false);
  return (
    <div>
      <p><span className='green'>root@romeo-portfolio</span><span className='blue'>:~</span>#&nbsp;
      <TypeAnimation
          cursor={false}
          className={CURSOR_CLASS_NAME}
          sequence={[
            // Same substring at the start will only be typed out once, initially
            1000,
            'whoami',
          ]}
          wrapper="span"
          speed={80}
          style={{ whiteSpace: 'pre-line', fontSize: '1em', display: 'inline-block' }}


        />
      
      
      </p>
      <div style={{ marginLeft: "2rem" }}>
        <TypeAnimation
          cursor={false}
          className={CURSOR_CLASS_NAME}
          sequence={[
            // Same substring at the start will only be typed out once, initially
            2000,
            'Romeo M. Panis II \n\n',
            (el) => el.classList.remove(CURSOR_CLASS_NAME)
          ]}
          wrapper="span"
          speed={80}
          style={{ whiteSpace: 'pre-line', fontSize: '2em', display: 'block' }}


        />
        <TypeAnimation
          cursor={false}
          className={CURSOR_CLASS_NAME}
          sequence={[
            3100,
            'A software engineer experienced in developing web applications through NodeJS, ReactJS, and Ruby on Rails.\n  Developed MERN Stack Web Application during my internship, wrote technical documentation, and implemented coding practices and web application architectural patterns.',
            (el) => el.classList.remove(CURSOR_CLASS_NAME),
            1000,
            () => showCmd(true)
          ]}
          wrapper="span"
          speed={80}
          style={{ whiteSpace: 'pre-line', fontSize: '1em', display: 'block' }}
          repeat={Infinity}
          
        />
      </div>
      {cmd && <p><span className='green'>root@romeo-portfolio</span><span className='blue'>:~</span>$</p>}
    </div>
  )
}
