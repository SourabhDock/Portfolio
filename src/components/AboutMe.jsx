import React from 'react'
import { IoMdPerson } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BsArrowRight } from 'react-icons/bs';
import { BsCodeSlash } from "react-icons/bs";






const AboutMe = () => {

    const Details = [
        { Icon: IoMdPerson, Lable: "Name", Name: 'Sourabh', color: '#A8E0FA' },
        { Icon: FaUserGraduate, Lable: "Graduation", Name: 'BCA, IGNOU', color: '#DCC5FC' },
        { Icon: MdOutlineMail, Lable: "Email ", Name: 'palSourabh788@gmail.com', color: '#FDD976' },
        { Icon: FaLocationDot, Lable: "Location", Name: 'New Delhi, India', color: '#4FD3AC' },
        { Icon: MdOutlineBusinessCenter, Lable: "Open to", Name: 'Intership & Job', color: '#F237A1' }
    ];

    



    return (
        <div id='About' className='w-screen md:h-3/6 flex flex-col sm:flex-row  py-20 items-center sm:justify-evenly gap-10 '>
            <div className='w-[90%] sm:w-[40%] flex flex-col gap-2'>
                <h2 className='  font-Scoutieu text-4xl sm:text-6xl font-bold'>Turning  <span className='flex gap-10' > Ideas Into Code <BsCodeSlash className='relative bottom-2' color='#8463EF' /></span> </h2>

                <p className='text-[#B0B5C0] font-Inter text-[18px] mt-1.5'>I'm a passionate Aspiring Full Stack Developer . I love building web applications using modern technologies and always excited to learn and explore new things in tech.</p>
                <p className='text-[#B0B5C0] font-Inter text-[18px] my-2.5'>When I'm not coding, I enjoy reading, talking with people and exploring new places.</p>
                <button className='bg-linear-to-r from-[#312696] to-[#042044] w-fit px-6 py-4 rounded-xl text-xl text-white flex items-center justify-between gap-2.5'>More About Me <BsArrowRight /></button>
            </div>

            <div className="sm:w-[40%] w-[90%] h-96 bg-[#F4F6FD] p-6 sm:p-10 shadow-xl rounded-2xl">
                {Details.map((detail, index) => {
                    const Icon = detail.Icon;

                    return (
                        <div
                            key={index}
                            className="flex items-center gap-6 mb-5"
                        >
                            {/* Icon */}
                            <div
                                className="size-12 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: detail.color }}
                            >
                                <Icon className="text-xl text-gray-800" />
                            </div>

                            {/* Details */}
                            <div>
                                <h3 className="text-sm text-gray-500">
                                    {detail.Lable}
                                </h3>

                                <div className="sm:text-xl font-medium text-gray-800">
                                    {detail.Name}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default AboutMe
