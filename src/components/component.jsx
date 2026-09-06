import React from 'react'
import { BsArrowRight } from 'react-icons/bs'


export const Button = (props) => {
    return (

        <button className=' h-12 rounded-xl bg-[#052241] text-white font-semibold flex items-center justify-center gap-3'>{props.text} <BsArrowRight /></button>

    )
}

export const Skill = ({ Link, alt, text }) => {

    return (
        <div className='w-80 h-40 rounded-xl bg-white'>
            <img className='size-10' src={Link} alt={alt} />
            <h3 className='text-2xl' >{text}</h3>


        </div>
    )
}

export const Show = () => {

    return (
        <div className='w-screen flex justify-center'>
            <div className='bg-[#052241] flex items-center justify-evenly w-[90%] max-w-[90%] h-30  rounded-xl'>
                <div className='border-1-0'>
                    <div className='font-Roboto text-2xl text-white'>10+</div>
                    <h3 className='text-sm text-white'>Projects</h3>

                </div>

                <div className="w-px h-20 bg-gray-300"></div>

                <div>
                    <div className='font-Roboto text-2xl text-white'>+</div>
                    <h3 className='text-sm text-white'>Projects</h3>

                </div>
                <div className="w-px h-20 bg-gray-300"></div>
                <div>
                    <div className='font-Roboto text-2xl text-white'>1+ Year</div>
                    <h3 className='text-sm text-white'>Experience</h3>

                </div>
                <div className="w-px h-20 bg-gray-300"></div>
                <div>
                    <div className='font-Roboto h size-9 text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
                        <path
                            d="M25 10C10 10 10 40 25 40C35 40 42 25 50 25C58 25 65 40 75 40C90 40 90 10 75 10C65 10 58 25 50 25C42 25 35 10 25 10Z"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg></div>
                    <h3 className='text-sm text-white'>Projects</h3>

                </div>

            </div>
        </div>
    )
}



