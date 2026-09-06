import React from 'react'
import { FaBriefcase } from "react-icons/fa6";



function Experience() {

    const experiences = [
        {
            Role: "Office Executive", company: "World choice Pvt ltd.", Period: 'Sept-2025  Sept-2026', desc: 'Build and Maintain website , worked with Wordpress & Elementor, front end testing and OTA  Onboarding'
        },
        {
            Role: "Student", company: 'Sun foundation', Period: 'Jan-2025  July-2025', desc: 'In Institute i learn frontend and Backend.'
        },
        {
            Role: 'Student', company: 'IGNOU', Period: 'June-2023  July-2027', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quidem quo in in eos sunt quo. Do in veniam sunt ad ut placeat tempor et dolor quos.'
        }
    ];

    const experiencelist = experiences.map((experience, index) => {


        return (


            <div
                key={index}
                className="relative grid grid-cols-[40px_140px_1fr] gap-x-5 pb-0"
            >
                {/* Timeline */}
                <div className="relative flex justify-center">
                    {/* Circle */}
                    <div className="z-10 mt-0 h-6 w-6 rounded-full border-[5px] border-[#152B55] bg-white" />

                    {/* Vertical Line */}
                    {(
                        <div className="absolute top-6 bottom-0 w-0.5 bg-[#B8C2D9]" />
                    )}
                </div>

                {/* Date */}
                <div className="pt-1 text-[16px] font-semibold text-[#243FA3]">
                    {experience.Period}
                </div>

                {/* Experience Content */}
                <div>
                    <h3 className="text-[17px] font-bold text-[#152B55]">
                        {experience.Role}
                    </h3>

                    <p className="mt-1 text-[16px] font-semibold text-[#152B55]">
                        {experience.company}
                    </p>

                    <p className="mt-4 mb-4 max-w-2xl text-[14px] leading-6 text-gray-600">
                        {experience.desc}
                    </p>
                </div>
            </div>
        )
    })




    return (
        <section id='Experience' className='w-full min-h-125  p-20  grid grid-cols-5   rounded-2xl box-border'>
            <div className='bg-[#F1EBFB] col-span-1 h-full py-16 rounded-tl-2xl rounded-bl-2xl flex flex-col  items-center justify-between'>
                <div className='bg-[#DDDCFD]  size-25 p-0 flex items-center justify-center rounded-full  ' >
                    <FaBriefcase size={40} color='#705CF5' />
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 170" width="148" height="170">
                        <g fill="none" stroke="#50638B" strokeWidth="3.2"
                            strokeLinecap="round" strokeLinejoin="round">
                            {/* <!-- Main curved stroke --> */}
                            <path d="M22 139
                                C39 136, 58 121, 61 101
                                C63 88, 54 76, 45 74
                                C37 72, 34 78, 39 85
                                C46 95, 60 99, 73 94
                                C91 87, 101 70, 101 51
                                C101 43, 100 35, 97 29"/>

                            {/* <!-- Arrow head --> */}
                            <path d="M97 29 L88 36" />
                            <path d="M97 29 L110 34" />
                        </g>
                    </svg>

                </div>
            </div>

            <div className='bg-[#F1EBFB] col-span-4 flex flex-col py-15 h-full rounded-tr-2xl rounded-br-2xl'>
                <div>
                    <div className='mb-10 ml-4 flex flex-col gap-5'>
                        <span className='px-4 py-2 mb-1 max-w-fit bg-[#7D57F3] rounded-4xl text-About-me-box-bg font-Comfortaa' >Experience</span>
                        <h2 className='font-Roboto text-3xl font-semibold text-view-my-work' >My Journey</h2>
                    </div>
                </div>

                <div>
                    {experiencelist}
                </div>
            </div>

        </section>


    )
}

export default Experience
