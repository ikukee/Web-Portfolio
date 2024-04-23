import { TypeAnimation } from 'react-type-animation';

import React from 'react'
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
export const LoaderTerminal = () => {
  return (<>
    <p><span className='green'>root@romeo-portfolio</span><span className='blue'>:~#</span>&nbsp;
      <TypeAnimation
          cursor={false}
          className={CURSOR_CLASS_NAME}
          sequence={[
            // Same substring at the start will only be typed out once, initially
            (el) => el.classList.remove(CURSOR_CLASS_NAME),
            1000,
            (el) => el.classList.add(CURSOR_CLASS_NAME),
            'npm run start',
            (el) => el.classList.remove(CURSOR_CLASS_NAME)
          ]}
          wrapper="span"
          speed={80}
          style={{ whiteSpace: 'pre-line', fontSize: '1em', display: 'inline-block',color:"white" }}


        /></p>
  </>)
}
