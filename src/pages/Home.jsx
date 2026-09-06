import React from 'react'
import { BsArrowRight, BsGithub } from 'react-icons/bs'

import {Show} from '../components/component'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Support from '../components/Support'
import ProjectSection from './ProjectSection'
import Experience from '../components/Experience'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer'

const Home = () => {

    
    return (

        <div className='bg-home-background overflow-hidden flex flex-col items-center justify-center'>
        
        <Navbar/>
        <HeroSection/>
        <Show/>
        <AboutMe/>
        <Skills/>
        <Support/>
        <ProjectSection/>
        <Experience/>
        <Contact/>
        <Footer/>
      

        </div>
    )
}

export default Home
