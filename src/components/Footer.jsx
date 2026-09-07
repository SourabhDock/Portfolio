import React from 'react'
import { BsBalloonHeartFill } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";




function Footer() {
    return (
        <div className=' bg-[#021D3D] sm:h-80 w-full   box-border'>
            <div className='w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                    <path fill="#fff" fillOpacity="1"
                        d="M0,192L48,181.3C96,171,192,149,288,149.3C384,
                149,480,171,576,186.7C672,203,768,213,864,213.3C960,
                213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,
                128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,
                0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                    </path></svg>
            </div>

            <div className='flex sm:flex-row flex-col gap-4 relative justify-between p-10 sm:px-15 text-About-me-box-bg'>
                <p className='mt-1'>@2026 SOURABH ALL Right are Reserved.</p>
                <div className=' gap-4 hidden sm:flex'> <a href='#'  >Home</a>
                    <a href='#contact'  >About</a>
                    <a href='#Skills'  >Skills</a>
                    <a href='#Experience'  >Experience</a>
                    <a href='#contact'  >Contant us</a>
                </div>
                <p className='flex'>Made With  <BsBalloonHeartFill size={20} color='red' /> using React and Tailwind Css. </p>
            </div>
            
            <a href='#top' className='fixed right-2.5 top-[90%] opacity-50 hover:opacity-100  size-12 bg-white rounded-full flex justify-center items-center '><FaArrowUp size={30} color='black' /></a>

        </div>
    )
}

export default Footer
