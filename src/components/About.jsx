import React from 'react';
import { Tilt }from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utilities/motion';
import { SectionWrapper } from '../hoc';
import my_image from '../assets/cadey_in_ago_2.png';

const PhotoCard = () => {
  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("left", "spring", 0.5, 0.75)}
      className="w-full">
          <img src={my_image} alt="Cadey in AGO" className="w-full h-auto scale-125 lg:scale-150 rounded-full" />
      </motion.div>
    </div>
  )
}

const About = () => {
  return (
    <div className="container max-w-6xl mx-auto flex flex-wrap mt-16">
      <div className="h-full px-2 lg:w-1/2 lg:ml-10">
        <motion.div variants={textVariant()}>
          <h2 className="font-black md:text-[72px] sm:text-[54px] xs:text-[45px] text-[45px] inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-slate-300">About me</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 font-medium text-blue-white text-[18px] leading-[30px] lg:text-[22px] lg:max-w-4xl lg:leading-[36px]">
            Hello! I&apos;m Cadey Chen, a fourth year Computer Science student at U Waterloo :) 
            <br />
            <br />
            Ever since a young age, I&apos;ve been interested in applying historical data to understand our complex world. 
            During my internships, I got to build a range of software 
            that enable users to solve complex problems with their data. 
            Whether it is meticulously analyzing simulation results with regression analysis; 
            observing our eye and brain health through real-time eye tracking; or finding the root causes 
            of recurring outages within a complex infrastructure. 
          <br/>
        </motion.p>
      </div>
    <div className="h-full lg:w-1/3 mt-20 ml-20 lg:mt-28 lg:ml-32">
      <PhotoCard />
    </div>
    </div>
  )
}

export default SectionWrapper(About, "about");