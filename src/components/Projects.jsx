import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { Tilt }from "react-tilt";
import { motion, useInView, useAnimation } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import { projects } from '../contents';
import { fadeIn, textVariant } from '../utilities/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, url }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // fire the animation
      mainControls.start("show");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 75 },
          show: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: index * 0.3 }}>
        <Tilt options={{max: 15, scale: 1, speed: 200}}
        className="bg-tertiary p-6 rounded-2xl sm:w-[360px] lg:w-[425px] w-full">
          <div className="relative w-full h-[230px] lg:h-[285px]">
            <a href={url} className="inline">
              <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"/>
              {url &&
                <div className="z-1000 absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div className="dark-blue w-12 h-12 rounded-full flex justify-center
                  items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              }
            </a>
          </div>

          <div className="mt-5">
            <a href={url}>
              <h3 className="font-bold underline text-[24px] lg:text-[30px] inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-blue-200 to-cyan-200 underline">{name}
              </h3>
            </a>
            <p className="mt-2 text-white text-[16px] lg:text-[19px] lg:leading-[28px]">{description}</p>
          </div>
            {source_code_link && <div className="mt-2"><a className="font-bold underline text-brightmint mt-3 text-[16px] lg:text-[20px]" href={source_code_link}>Source Code</a></div>}
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[16px] lg:text-[20px] font-semibold ${tag.color}`}>
                {tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="lg:w-screen lg:px-3">
      <h2 className="z-[1000] font-black inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-slate-300 md:text-[72px] sm:text-[54px] xs:text-[45px] text-[45px]">Projects</h2>
      <div className="mt-10 max-w-full w-full flex flex-wrap gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
          index={index}
          {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");