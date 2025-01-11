import React from 'react';
import { SectionWrapper } from '../hoc';
import mail_icon from '../assets/email_envelope_white.png';
import github_icon from '../assets/github_icon_white.png';
import LinkedIn_icon from '../assets/linkedin-app-white-icon.png';

const Contact = () => {
  return (
  <div className="mx-auto">
  <h2 className="z-[1000] font-black inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-slate-300 md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px]">Contact</h2>
  <div className="lg:flex">
    <div className="flex ml-2 mt-6 lg:mr-20">
      <img src={mail_icon} alt="Email Icon" className="w-10 h-10 lg:w-16 lg:h-16" />
      <p className="text-[20px] lg:text-[24px] font-semibold mt-1 ml-3 lg:mt-3" >cadeychen7@gmail.com</p>
    </div>
    <div className="flex ml-2 mt-6 lg:mr-20">
      <img src={github_icon} alt="GitHub Icon" className="w-10 h-10 lg:w-16 lg:h-16" />
      <a className="text-[20px] lg:text-[24px] font-semibold mt-1 ml-3 underline lg:mt-3" href="https://github.com/Cadey-chen">Cadey-chen</a>
    </div>
    <div className="flex ml-2 mt-6">
      <img src={LinkedIn_icon} alt="LinkedIn Icon" className="w-10 h-10 lg:w-14 lg:h-14" />
      <a className="text-[20px] lg:text-[24px] font-semibold mt-1 ml-3 underline lg:mt-3" href="https://www.linkedin.com/in/cadey-chen">cadey-chen</a>
    </div>
  </div>
  </div>
  )
}

export default SectionWrapper(Contact, "contact");