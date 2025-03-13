'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaReact,
  FaMobile,
  FaMobileAlt,
  FaNodeJs,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

// Education

// Experince
const experience = {
  icon: '',
  title: 'My experience',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.',
  items: [
    {
      company: 'FPT Software',
      position: 'Software Engineer',
      duration: '9/2023 - 12/2023',
    },
  ],
};

// Education
const education = {
  icon: '',
  title: 'My education',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.',
  items: [
    {
      institution: 'FPT University',
      degree: 'Bachelor of Software Engineering',
      duration: '2022 - 2025',
      link: '',
    },
    {
      institution: 'Udemy',
      degree: 'The Complete JavaScript Course 2025: From Zero to Expert!',
      duration: '2023',
      link: 'https://www.udemy.com/certificate/UC-301710af-3afe-4f99-a39a-99b7887ff8da/',
    },
    {
      institution: 'Udemy',
      degree: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
      duration: '2023',
      link: 'https://www.udemy.com/certificate/UC-bd9d982e-1a72-45db-844d-10fa97851321/',
    },
    {
      institution: 'Udemy',
      degree: 'The Ultimate React Course 2024: React, Next.js, Redux & More',
      duration: '2024',
      link: 'https://www.udemy.com/certificate/UC-6c18df0c-02fe-434b-8726-1705308a26c0/',
    },
  ],
};

// Skills
const skills = {
  title: 'My skills',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.',
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'reactJs',
    },
    {
      icon: <SiNextdotjs />,
      name: 'nextJs',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaMobile />,
      name: 'React native',
    },
  ],
};

const AboutPage = () => {
  return (
    <motion.div
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px] w-full'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className='min-h-[70vh] w-full px-4 xl:px-0'>
            <TabsContent value='experience'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 mb-3'
                        >
                          <span className='text-green-600'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[260px] min-h-[60[px] text-center lg:text-left mb-9'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded full bg-green-600'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  {' '}
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 mb-3'
                        >
                          <span className='text-green-600'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-auto min-h-[60px] text-center lg:text-left mb-9'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center justify-between gap-2'>
                            <div className='flex items-center gap-3'>
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-green-600'></span>
                              <p className='text-muted-foreground'>
                                {item.institution}
                              </p>
                            </div>

                            {item.link && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <a
                                      href={item.link}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='text-green-600 hover:text-green-500 transition-colors'
                                    >
                                      <FaExternalLinkAlt className='w-4 h-4' />
                                    </a>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Open certification</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {skills.description}
                </p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mt-5'>
                {skills.skilllist.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-green-600 transition-all duration-300'>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default AboutPage;
