import React from 'react'
import {FaReact,FaPython,FaHtml5 ,FaCss3, FaGithub} from 'react-icons/fa'
import {SiNextdotjs,SiExpress,SiMysql,SiJavascript, SiMongodb, SiTypescript} from 'react-icons/si'

function AnimatedBg() {
  return (
    <div class="area">
      <ul class="circles">
        <li className='animated-box'>{<FaReact className='animated-icon'/>}</li>
        <li className='animated-box'>{<FaPython className='animated-icon'/>}</li>
        <li className='animated-box'>{<SiMongodb className='animated-icon'/>}</li>
        <li className='animated-box'>{<SiExpress className='animated-icon'/>}</li>
        <li className='animated-box'>{<SiMysql className='animated-icon'/>}</li>
        <li className='animated-box'>{<SiJavascript className='animated-icon'/>}</li>
        <li className='animated-box'>{<SiTypescript className='animated-icon'/>}</li>
        <li className='animated-box'>{<FaHtml5 className='animated-icon'/>}</li>
        <li className='animated-box'>{<FaCss3 className='animated-icon'/>}</li>
        <li className='animated-box'>{<SiNextdotjs className='animated-icon'/>}</li>
        <li className='animated-box'>{<FaGithub className='animated-icon'/>}</li>
      </ul>
    </div>
  )
}

export default AnimatedBg