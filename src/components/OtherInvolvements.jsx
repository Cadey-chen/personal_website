import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { other_involvements } from '../contents';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utilities/motion';

const ExperienceCard = ({ involvement }) => (
  <li className="lg:px-10 mb-16 lg:ms-6 flex">
    <div className="flex">
        <div className="rounded-full w-12 h-12 bg-blue-100 ring-0 ring-white border-solid border-2 border-sky-100 lg:w-24 lg:h-24">
          <img src={involvement.icon}
          alt={involvement.company_name}
          className="w-[100%] h=[100%] object-fill"/>
        </div>
    </div>
    <div className="ml-3 lg:ml-10">
      <h3 className="mb-2 text-[20px] lg:text-[36px] font-bold text-blue-white">{involvement.title}</h3>
      <h4 className="block mb-3 text-[18px] lg:text-[24px] font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-blue-200 to-cyan-200">{involvement.company_name}</h4>
      <h4 className="block mb-3 text-[18px] lg:text-[22px] font-semibold mint-text">{involvement.date}</h4>
      <ul className="mt-5 text-white list-disc ml-5 space-y-2">
          {involvement.points.map((point, index) => (
            <li 
            key={`experience-point-${index}`}
            className="text-blue-white lg:text-[20px]
            pl-1 tracking-wider">{point}</li>
          ))}
      </ul>
    </div>
  </li>
)

const OtherInvolvements = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div variants={textVariant()}>
        <h2 className="font-black inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-slate-300 md:text-[72px] sm:text-[54px] xs:text-[45px] text-[45px]">Other Involvements</h2>
      </motion.div>
      <div className="mt-10 lg:mt-20 flex flex-col">
        <ol className="relative lg:px-18 sm:px-2">
          {other_involvements.map((involvement, index) => (
            <ExperienceCard key={index} involvement={involvement} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default SectionWrapper(OtherInvolvements, "otherInvolvements");