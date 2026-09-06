import React from 'react'
import Github from '../assets/SocialIcon/Github.png'
import LinkedIn from '../assets/SocialIcon/LinkedIn.png'
import x from '../assets/SocialIcon/X.png'
import Insta from '../assets/SocialIcon/Insta.png'

const SocialIcon = () => {
  return (
    <div className='max-w-56 w-56 flex items-center justify-between'>
        <a href='https://github.com/SourabhDock' target='blank'><img className=' size-9 ' src={Github} alt="Github logo" /></a>
        <a href='www.linkedin.com/in/sourabh-pal-'  target='blank'><img className=' size-9 ' src={LinkedIn} alt="LinkedIn logo" /></a>
        <a href='' target='blank'><img className=' size-9 ' src={x} alt="X logo" /></a>
        <a href='' target='blank'><img className=' size-9 ' src={Insta} alt="Insta logo" /></a>
        {/* <span><img src="" alt="" /></span> */}
    </div>
  )
}

export default SocialIcon
