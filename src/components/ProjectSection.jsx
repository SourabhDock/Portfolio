import React from 'react'
import ProjectCard from './ProjectCard'
import portfolio from '../assets/Projects/portfolio.png'
import Tunewave from '../assets/Projects/TuneWave.png'


const ProjectSection = () => {

  const projects=[
    
    { Image:'https://i.pinimg.com/1200x/37/8c/34/378c341e44532dd6399d7c8ddc8bde57.jpg', Name:'Health Management System' ,Tech:['Java','Spring Boot', 'MySql', 'React','Tailwind Css'],Desc:'A Complete Health Management with Patient, doctor, appointment, management ,authentication and authorization.'}
    ,{ Image:Tunewave ,Name:'Music Web app',Tech:['React','Tailwind Css','Java','Spring Boot'],Desc:'Soon Updated'},
      {Image:portfolio ,Name:'Portfolio',Tech:['React','Tailwind Css'],Desc:'Updated Soon'}
  ]

  const projectList= projects.map((project,index)=>{
    
    return(
      <ProjectCard key={index} index={index} Image={project.Image} Tech={project.Tech} Desc={project.Desc} />
    )
  })

 
  

  return (


    <div id='project' className='w-full flex items-center flex-col gap-4  p-20 bg-[#FEEFE0]'>
      <div className='flex flex-col items-center justify-center gap-3'>
            <div className='bg-[#6E5AEE] py-0.5 px-5 text-xl text-About-me-box-bg text-center font-bold font-nunito w-max rounded-2xl'>My Projects </div>
            <h1 className='text-6xl font-bold font-Inter text-[#042044]'>Featured Work </h1>
            <p className='text-[#686c74] text-xl font-Inter'>Here are Some of my recent Projects. Each Project teach something new.</p>

           </div>
      {projectList}
      
    </div>
  )
}

export default ProjectSection
