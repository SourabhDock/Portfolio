import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import SocialIcon from './SocialIcon'

const HeroSection = () => {
  return (
    <div  className='bg-home-background w-screen h-162.5 flex flex-col justify-evenly items-center px-4 sm:px-10'>
            
            <div className='w-full sm:w-[90%] flex flex-col  items-center justify-center gap-4  '>
                <div className='bg-Hello-title py-1 px-4 text-white text-center font-bold font-nunito w-max rounded-2xl'>Aspiring Full Stack Developer</div>
                <h1 className='font-Scoutieu text-5xl font-semibold text-[#052241] text-center'> <span>Hello I'm</span> SOURABH</h1>
                <h2 className='font-Roboto text-sm font-semibold text-[#052241]'></h2>
                <p className='flex flex-col text-center text-xl max-w-2xl '>build modern, scalable and user friendly web applications that solves real world problems and create meaningful digital Experiences.</p>
                <div className='flex  gap-4 py-10'>
                    <a href='#project' className='w-40 h-12 rounded-xl bg-[#052241] text-white font-semibold flex items-center justify-center gap-3'>View My Work <BsArrowRight /></a>

                    <a href='#contact' className='w-40 h-12 rounded-xl border-2 border-[#D8DADF] text-[#3d3e42] font-semibold bg-white flex items-center justify-center gap-3' >Contact Me <BsArrowRight /></a>
                </div>

                <SocialIcon/>
            </div>

            

        
        </div>
  )
}

export default HeroSection
