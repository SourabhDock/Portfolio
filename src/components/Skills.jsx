import React from 'react'


import { Skill } from './component'
import { useState } from 'react';
import Html5 from '../assets/skillIcon/Html5.png'
import Css3 from '../assets/skillIcon/Css3.png'
import Javascript from '../assets/skillIcon/Javascript.png'
import react from '../assets/skillIcon/React.png'
import TailwindCss from '../assets/skillIcon/TailwindCss.png'
import Java from '../assets/skillIcon/Java.png'
import Springboot from '../assets/skillIcon/Spring-boot.png'
import Mysql from '../assets/skillIcon/Mysql.png'
import Git from '../assets/skillIcon/Git.png'
import Github from '../assets/skillIcon/Github.png'
import VsCode from '../assets/skillIcon/VsCode.png'
import Intellij from '../assets/skillIcon/Intellij.png'
import Postman from '../assets/skillIcon/postman.png'


const Skills = () => {

    const [Domain, setDomain] = useState("All");

    const skillList = [
        { key: 1, Icon: Html5, Name: 'HTML5', domain: ['All', 'Frontend'] },
        { key: 2, Icon: Css3, Name: 'Css', domain: ['All', 'Frontend'] },
        { key: 3, Icon: Javascript, Name: 'Javascript', domain: ['All', 'Frontend'] },
        { key: 4, Icon: react, Name: 'React', domain: ['All', 'Frontend'] },
        { key: 5, Icon: TailwindCss, Name: 'Tailwind', domain: ['All', 'Frontend'] },
        { key: 6, Icon: Java, Name: 'Java', domain: ['All', 'Backend'] },
        { key: 7, Icon: Springboot, Name: 'Spring boot', domain: ['All', 'Backend'] },
        { key: 8, Icon: Mysql, Name: 'MySQL', domain: ['All', 'Database'] },
        { key: 9, Icon: Git, Name: 'Git', domain: ['All', 'Tools'] },
        { key: 10, Icon: Github, Name: 'GitHub', domain: ['All', 'Tools'] },
        { key: 11, Icon: VsCode, Name: 'VS Code', domain: ['All', 'Tools'] },
        { key: 12, Icon: Postman, Name: 'PostMan', domain: ['All', 'Tools'] },
        { key: 13, Icon: Intellij, Name: 'Intellij', domain: ['All', 'Tools'] },

    ];



    const skillset = skillList.filter((skill) =>

        skill.domain.includes(Domain)

    );



    const skillrenderlist = skillset.map(skill =>


        <li className='flex items-center flex-col justify-items-center p-4 gap-1 mb-3  w-40  rounded-xl border-2 border-white bg-white' key={skill.key}>

            <img className='size-10' src={skill.Icon} alt="logo" />
            <p className='text-xl'>{skill.Name}</p>
        </li>
    )







    return (
        <div id='Skills' className='flex flex-col items-center justify-center p-4 sm:p-20 '>
            <div className='flex flex-col items-center justify-center gap-3'>
            <div className='bg-[#6E5AEE] py-0.5 px-5 text-xl text-About-me-box-bg text-center font-bold font-nunito w-max rounded-2xl'>My Skills </div>
            <h1 className='text-2xl sm:text-6xl font-bold font-Inter text-[#042044]'>Technologies I Work With </h1>
            <p className='text-[#686c74] text-sm sm:text-xl text-center font-Inter'>A Combination of Technologies that I used to build Web Applications.</p>

           </div>

            <div className='mt-4  flex flex-wrap items-center justify-center  gap-2.5'>
                <label onClick={() => setDomain("All")} className="px-4 py-1 text-[#A7A8B1]   has-checked:text-white has-checked:bg-About-me-title has-checked:rounded-2xl">
                    <input type="radio" name="skill-option" defaultChecked  value="All" className='sr-only' />
                    <span>All</span>
                </label>
                <label onClick={() => setDomain("Frontend")} className='px-4 py-1 text-[#A7A8B1] has-checked:text-white has-checked:bg-About-me-title has-checked:rounded-2xl' >
                    <input type="radio" name='skill-option' value="Frontent" className='sr-only' />
                    <span>Frontend</span>
                </label>
                <label onClick={() => setDomain("Backend")} className='px-4 py-1 text-[#A7A8B1] has-checked:text-white has-checked:bg-About-me-title has-checked:rounded-2xl' >
                    <input type="radio" name='skill-option' value="Backend" className='sr-only' />
                    <span>Backend</span>
                </label>
                <label onClick={() => setDomain("Database")} className='px-4 py-1 text-[#A7A8B1] has-checked:text-white has-checked:bg-About-me-title has-checked:rounded-2xl' >
                    <input type="radio" name='skill-option' value="Database" className='sr-only' />
                    <span>Database</span>
                </label>
                <label onClick={() => setDomain("Tools")} className='px-4 py-1 text-[#A7A8B1] has-checked:text-white has-checked:bg-About-me-title has-checked:rounded-2xl' >
                    <input type="radio" name='skill-option' value="Tools" className='sr-only' />
                    <span>Tools</span>
                </label>
            </div>

            {/* skill-boxes-container */}
            <div className='mt-10'>

                <ul key={skillset.key} className='grid grid-cols-2 sm:grid-cols-6 gap-x-6 gap-y-2 place-content-center'>{skillrenderlist}</ul>

            </div>




        </div>
    )
}

export default Skills
