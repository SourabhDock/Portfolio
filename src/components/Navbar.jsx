import React, { useState } from 'react'
import { MdFileDownload } from 'react-icons/md'
import logo from '../assets/logo.png'

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <div id='top' className='w-screen h-20 flex items-center justify-between sm:px-20 px-8'>

      <div className='flex items-center gap-1 text-2xl font-bold'><img className='size-10' src={logo} alt="" />OURABH</div>
      <div className=' gap-4 hidden  lg:flex'> <a href='#'  >Home</a>
        <a href='#About'  >About</a>
        <a href='#Skills'  >Skills</a>
        <a href='#Experience'  >Experience</a>
        <a href='#contact'  >Contant us</a>
      </div>
      <div className='hidden sm:block'>
        <a href='https://drive.google.com/file/d/1QtKFSxRPrepuWKiqdRzYikKB3peBDf3b/view?usp=sharing' target='blank' className='w-40 h-12 rounded-xl bg-[#052241] text-white font-semibold flex items-center justify-center gap-3'>Live Demo <MdFileDownload /></a>
      </div>




      <button
        onClick={handleClick}
        className="flex flex-col items-center justify-evenly gap-2 sm:hidden"
      >
        <span
          className={`bg-red-500 block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${isOpen ? 'rotate-45 translate-y-3' : '-translate-y-0.5'
            }`}
        />
        <span
          className={`bg-red-500 block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'
            }`}
        />
        <span
          className={`bg-red-500 block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${isOpen ? '-rotate-45 -translate-y-3' : 'translate-y-0.5'
            }`}
        />
      </button>


    </div>
  )
}

export default Navbar
