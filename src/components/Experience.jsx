import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../contents';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utilities/motion';

const ExperienceCard = ({ experience }) => (
  <li className="lg:px-10 mb-20 lg:mb-28 flex">
    <div className="flex">
        <div className="rounded-full w-12 h-12 bg-blue-100 ring-0 ring-white border-solid border-2 border-sky-100 lg:w-24 lg:h-24">
          <img src={experience.icon}
          alt={experience.company_name}
          className="w-[100%] h=[100%] object-fill"/>
        </div>
    </div>
    <div className="ml-3 lg:ml-10">
      <h3 className="mb-2 text-[20px] lg:text-[36px] font-bold">{experience.title}</h3>
      <h4 className="block mb-3 text-[18px] lg:text-[24px] font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-blue-200 to-cyan-200">{experience.date}</h4>
      <div className="mt-6 list-disc space-y-2">
          {experience.points.map((point, index) => (
            <p 
            key={`experience-point-${index}`}
            className="text-white lg:text-[22px]
            tracking-wider">{point}</p>
          ))}
      </div>
    </div>
  </li>
)

const Experience = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <motion.div variants={textVariant()}>
        <h2 className="mt-12 font-black inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-slate-300 md:text-[72px] sm:text-[54px] xs:text-[45px] text-[45px]">Work Experience</h2>
      </motion.div>
      <div className="mt-10 lg:mt-20 flex flex-col">
        <ol className="relative lg:px-18 sm:px-2">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "experience");