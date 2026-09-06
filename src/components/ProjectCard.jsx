import React from 'react'
import {Button} from './component'
import { BsArrowRight,BsGithub } from "react-icons/bs";
import {Skill} from './component'
import portfolio from '../assets/Projects/portfolio.png'


function ProjectCard(props) {
    
    
    
    
  return (
    <div index={props.index} className=' w-[90%] lg:h-auto p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 bg-white'>
        <div className='w-[90%] sm:w-[30%] h-70  rounded-xl '> <img className="h-full rounded-2xl" src={props.Image} alt={props.alt} /></div>
        <div className='w-[90%] sm:w-[60%] h-70  hidden sm:flex flex-col  gap-4  pt-4'> 
            <h2 className='text-3xl font-bold'>{props.Name}</h2>
            <ul className='flex gap-6'>
                {props.Tech.map((item,index)=>(
                    <li className=' min-w-14 bg-title p-2 rounded-4xl text-center text-[#052241] font-semibold text-xs' key={index}>{item}</li>
                )
                    )}
            </ul>
            <p>{props.Desc}</p>
            <div className='flex  gap-4'>
                <button className='w-40 h-12 rounded-xl bg-[#052241] text-white font-semibold flex items-center justify-center gap-3'>Live Demo <BsArrowRight /></button>
                  
                <button className='w-40 h-12 rounded-xl border-2 border-[#D8DADF] text-[#3d3e42] font-semibold bg-white flex items-center justify-center gap-3' >View Code <BsGithub /></button>
            </div>

        </div>
        <div className='sm:hidden w-full gap-6 flex flex-col items-center justify-center'>
            <h2 className='text-3xl font-bold'>{props.Name}</h2>
            <button className='w-[90%] h-12 rounded-xl bg-[#052241] text-white font-semibold flex items-center justify-center gap-3'>Live Demo <BsArrowRight /></button>
            
        </div>

                    {/* <Skill Link={html} alt="Css Icon" text="CSS 3" /> */}


    </div>
  )
}

export default ProjectCard
