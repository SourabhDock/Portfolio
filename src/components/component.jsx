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

const stats = [
  { number: "10+", label: "Projects Completed" },
  { number: "2+", label: "Years Learning" },
  { number: "100%", label: "Dedication" },
  { number: "∞", label: "Willingness to Learn" },
];



export const Show = () => {

    return (
       <section className="w-[90%] bg-[#06244a] px-6 py-6 rounded-2xl">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center py-3
              ${index !== 0 ? "md:border-l md:border-white/20" : ""}
              ${index === 2 ? "border-t border-white/20 md:border-t-0" : ""}
              ${index === 3 ? "border-t border-white/20 md:border-t-0" : ""}
            `}
          >
            <span className="text-3xl font-bold text-white md:text-4xl">
              {item.number}
            </span>

            <span className="mt-2 text-sm font-medium text-white/80 md:text-base">
              {item.label}
            </span>
          </div>
        ))}

      </div>
    </section>
    )
}



