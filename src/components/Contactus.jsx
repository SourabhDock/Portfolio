import 'react'
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import SocialIcon from './SocialIcon';




function Contact() {

    const Contacts=[
        {Icon: MdMailOutline, text:'palsourabh788@gmail.com'},
        {Icon: GrLocation , text:'New Delhi, India'}
    ]

    const contactlist= Contacts.map((contact, index)=>{
        return(
            <div key={index} >
                <span  className='flex gap-2 items-center mt-2 text-[#4e5779] text-xl font-Inter'> {<contact.Icon color='#8463EF' size={24} />}  {contact.text}</span>
            </div>
        )
    })

    return (
        <div id='contact' className='grid grid-cols-2 gap-14 bg-Hello-title w-[90%] h-1/2 px-20 py-9  rounded-2xl box-border'>
            <div  className='col-span-1'>
                <div className='mb-10 ml-4 flex flex-col gap-5'>
                    <span className='px-5 py-1 mb-1 max-w-fit bg-[#7D57F3] rounded-4xl text-center text-About-me-box-bg font-semibold  font-Comfortaa' >Get In Touch</span>
                    <h2 className='font-Roboto text-4xl font-bold text-view-my-work' >Let's Work Together!</h2>
                    <p className='font-Inter text-[#4e5779] text-xl'>Have a Project open in mind or just want to say hi? Feel free to reach out. I'd love to hear from you !</p>
                </div>
                <div className='flex flex-col pl-4 gap-7'>
                    <div>
                    {contactlist}
                    </div>
                    <SocialIcon/>

                </div>
                
            </div>
            <div className='col-span-1 '>

                <div> 
                    <form action="" id='form' className='flex flex-col justify-center items-center gap-2'>
                        <input id='name' name='Name' type="text" placeholder='Enter Your Name1' className='bg-white w-[80%] p-3 rounded-xl border-2 text-[#9e9391] border-[#9e9391] focus:outline-[#9e9391]' />
                        <input id='Email' name='Email' type="text" placeholder='Enter Your email ' className='bg-white w-[80%] p-3  rounded-xl border-2 text-[#9e9391] border-[#9e9391] focus:outline-[#9e9391]' />
                        <textarea  name="Description" id="Description" cols="10" rows="9" placeholder='Enter Your message here' className='bg-white w-[80%] rounded-xl p-2 text-[#9e9391] border-2 border-[#9e9391] focus:outline-[#9e9391] '></textarea>
                        <button  className='flex items-center justify-center text-center gap-2 bg-[#021D3D] w-[80%] p-4 rounded-xl text-white text-xl '>Send Message <FaArrowRightLong size={20}/> </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
