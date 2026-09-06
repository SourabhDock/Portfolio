import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import SupportmanImage from '../assets/SupportmanImage.png'
import { PiStarFourFill } from "react-icons/pi";
import { GoNorthStar } from "react-icons/go";
import { PiShootingStarThin } from "react-icons/pi";

const Support = () => {
    return (
        <div className='w-full h-auto flex items-center mt-12 overflow-hidden justify-center rounded-2xl'>
            <div className='w-11/12 h-auto flex justify-between py-4 px-16 bg-linear-to-r from-[#45337F] to-showcase-bar rounded-2xl'>
                <div className='flex flex-col w-[40%] gap-3 items-start justify-center'>
                    <h2 className='text-4xl font-Comfortaa text-white font-bold'>
                        Let's Create
                    </h2>
                    <h2 className='text-4xl font-Comfortaa text-white font-bold'>Something Amazing</h2>
                    <p  className='text-[#8c93a5] font-Scoutieu text-xl'>I'm always open to new opportunities and exciting projects.</p>
                    <div className="buttonbox">
                        <button className='flex place-items-center gap-4 text-2xl text-white bg-linear-to-r from-[#9A60F6] to-[#7A67F7] px-4 py-3 rounded-xl'>
                            Get In Touch <BsArrowRight />
                        </button>
                    </div>
                </div>
                <div className='relative flex justify-center w-[40%] h-auto '>
                    <GoNorthStar color='rgb(70 82 123)' size={22} className='absolute -left-10 top-1/2 ' />
                    <PiStarFourFill color='#EABD69' size={26} className='absolute top-26 left-10' />
                    
                    <PiShootingStarThin size={42} color='white' className='absolute top-30 left-22 opacity-10' />
                    <PiStarFourFill color='#F1B453'  className='absolute right-12 top-10 ' size={46} />
                    <img className='size-72 '  src={SupportmanImage} alt="man Image" />
                </div>

            </div>



        </div>
    )
}

export default Support
