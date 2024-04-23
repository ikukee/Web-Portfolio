import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

export const Info = () => {
  return (
    <div>
      <TypeAnimation
        cursor={false}
        sequence={[
          // Same substring at the start will only be typed out once, initially
          1000,
          'Romeo M. Panis II \n\n',
          (el) => el.classList.remove(CURSOR_CLASS_NAME)
        ]}
        wrapper="span"
        speed={80}
        style={{ whiteSpace: 'pre-line', fontSize: '2em', display: 'block' }}


      />
      <TypeAnimation
        sequence={[
          2100,
          'A Fullstack Developer, creating robust and innovative application',
          (el) => el.classList.remove(CURSOR_CLASS_NAME)
        ]}
        wrapper="span"
        speed={70}
        style={{ whiteSpace: 'pre-line', fontSize: '1em', display: 'block' }}
        repeat={Infinity}
        s
      />

    </div>
  )
}
