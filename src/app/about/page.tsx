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
  FaReact,
  FaMobile,
  FaNodeJs,
  FaExternalLinkAlt,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

// Experience
const experience = {
  icon: <FaBriefcase className='text-3xl text-green-500' />,
  title: 'My Experience',
  description:
    'My professional journey as a software engineer, focusing on web and mobile development with modern JavaScript frameworks.',
  items: [
    {
      company: 'FPT Software',
      position: 'Software Engineer',
      duration: '9/2023 - 12/2023',
      description:
        'Developed and maintained web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    },
  ],
};

// Education
const education = {
  icon: <FaGraduationCap className='text-3xl text-green-500' />,
  title: 'My Education',
  description:
    'My academic background and continuous learning journey through formal education and specialized online courses to stay current with industry trends.',
  items: [
    {
      institution: 'FPT University',
      degree: 'Bachelor of Software Engineering',
      duration: '2022 - 2025',
      link: '',
      description:
        'Focusing on software development methodologies, algorithms, and modern programming paradigms.',
    },
    {
      institution: 'Udemy',
      degree: 'The Complete JavaScript Course 2025: From Zero to Expert!',
      duration: '2023',
      link: 'https://www.udemy.com/certificate/UC-301710af-3afe-4f99-a39a-99b7887ff8da/',
      description:
        'Comprehensive JavaScript training covering ES6+, asynchronous programming, and modern development practices.',
    },
    {
      institution: 'Udemy',
      degree: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
      duration: '2023',
      link: 'https://www.udemy.com/certificate/UC-bd9d982e-1a72-45db-844d-10fa97851321/',
      description:
        'Backend development with Node.js, building RESTful APIs, and working with MongoDB databases.',
    },
    {
      institution: 'Udemy',
      degree: 'The Ultimate React Course 2024: React, Next.js, Redux & More',
      duration: '2024',
      link: 'https://www.udemy.com/certificate/UC-6c18df0c-02fe-434b-8726-1705308a26c0/',
      description:
        'Advanced React concepts including hooks, context API, Next.js, and state management with Redux.',
    },
  ],
};

// Skills
const skills = {
  icon: <FaTools className='text-3xl text-green-500' />,
  title: 'My Skills',
  description:
    "Technical skills I've developed throughout my career, focusing on frontend and mobile development technologies with a growing expertise in backend development.",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
      level: 'Advanced',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
      level: 'Advanced',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
      level: 'Advanced',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
      level: 'Advanced',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
      level: 'Intermediate',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
      level: 'Advanced',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
      level: 'Intermediate',
    },
    {
      icon: <FaMobile />,
      name: 'React Native',
      level: 'Intermediate',
    },
  ],
};

const AboutPage = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  return (
    <motion.div
      className='min-h-screen flex items-center justify-between  px-4 sm:px-6 bg-black py-32'
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: 'easeIn',
        },
      }}
    >
      <div className='container mx-auto max-w-7xl'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-10 w-full'
        >
          {/* Tabs Navigation */}
          <div className='w-full xl:w-1/4'>
            <TabsList className='flex flex-col w-full gap-3 p-1 bg-black/50 backdrop-blur-sm rounded-xl border border-green-500/20'>
              <TabsTrigger
                value='experience'
                className='flex items-center gap-3 text-lg py-4 data-[state=active]:bg-green-500/10 data-[state=active]:text-green-500 transition-all duration-300'
              >
                <FaBriefcase className='text-xl' />
                Experience
              </TabsTrigger>
              <TabsTrigger
                value='education'
                className='flex items-center gap-3 text-lg py-4 data-[state=active]:bg-green-500/10 data-[state=active]:text-green-500 transition-all duration-300'
              >
                <FaGraduationCap className='text-xl' />
                Education
              </TabsTrigger>
              <TabsTrigger
                value='skills'
                className='flex items-center gap-3 text-lg py-4 data-[state=active]:bg-green-500/10 data-[state=active]:text-green-500 transition-all duration-300'
              >
                <FaTools className='text-xl' />
                Skills
              </TabsTrigger>
            </TabsList>

            {/* Profile Summary */}
            <div className='mt-8 p-6 rounded-xl bg-[#121214] border border-green-500/10 hidden xl:block'>
              <h3 className='text-xl font-semibold mb-3 text-white/90'>
                About Me
              </h3>
              <p className='text-white/60 mb-4'>
                A passionate software engineer specializing in modern web and
                mobile development, constantly learning and exploring new
                technologies to create exceptional digital experiences.
              </p>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></div>
                <span className='text-green-500 text-sm'>
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className='w-full xl:w-3/4 min-h-[70vh]'>
            {/* Experience Tab */}
            <TabsContent
              value='experience'
              className='focus-visible:outline-none focus-visible:ring-0'
            >
              <motion.div
                className='flex flex-col gap-8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className='flex items-center gap-4'>
                  {experience.icon}
                  <h2 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent'>
                    {experience.title}
                  </h2>
                </div>

                <p className='text-white/70 text-lg max-w-3xl'>
                  {experience.description}
                </p>

                <ScrollArea className='h-[450px] pr-4'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {experience.items.map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        variants={fadeIn}
                        initial='initial'
                        animate='animate'
                        className='bg-gradient-to-br from-[#1a1a1f] to-[#232329] p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 shadow-lg hover:shadow-green-500/5'
                      >
                        <span className='text-green-500 font-medium inline-block mb-3 px-3 py-1 bg-green-500/10 rounded-full text-sm'>
                          {item.duration}
                        </span>
                        <h3 className='text-xl font-bold text-white mb-3'>
                          {item.position}
                        </h3>
                        <p className='text-white/60 text-sm mb-4'>
                          {item.description ||
                            'Worked on various projects using modern web technologies.'}
                        </p>
                        <div className='flex items-center gap-3'>
                          <span className='w-2 h-2 rounded-full bg-green-500'></span>
                          <p className='text-white/80 font-medium'>
                            {item.company}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent
              value='education'
              className='focus-visible:outline-none focus-visible:ring-0'
            >
              <motion.div
                className='flex flex-col gap-8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className='flex items-center gap-4'>
                  {education.icon}
                  <h2 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent'>
                    {education.title}
                  </h2>
                </div>

                <p className='text-white/70 text-lg max-w-3xl'>
                  {education.description}
                </p>

                <ScrollArea className='h-[450px] pr-4'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {education.items.map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        variants={fadeIn}
                        initial='initial'
                        animate='animate'
                        className='bg-gradient-to-br from-[#1a1a1f] to-[#232329] p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 shadow-lg hover:shadow-green-500/5'
                      >
                        <span className='text-green-500 font-medium inline-block mb-3 px-3 py-1 bg-green-500/10 rounded-full text-sm'>
                          {item.duration}
                        </span>
                        <h3 className='text-xl font-bold text-white mb-2 line-clamp-2'>
                          {item.degree}
                        </h3>
                        <p className='text-white/60 text-sm mb-4 line-clamp-3'>
                          {item.description}
                        </p>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-3'>
                            <span className='w-2 h-2 rounded-full bg-green-500'></span>
                            <p className='text-white/80 font-medium'>
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
                                    className='text-green-500 hover:text-green-400 transition-colors p-2 bg-green-500/10 rounded-full'
                                  >
                                    <FaExternalLinkAlt className='w-4 h-4' />
                                  </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View Certificate</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent
              value='skills'
              className='focus-visible:outline-none focus-visible:ring-0'
            >
              <motion.div
                className='flex flex-col gap-8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className='flex items-center gap-4'>
                  {skills.icon}
                  <h2 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent'>
                    {skills.title}
                  </h2>
                </div>

                <p className='text-white/70 text-lg max-w-3xl'>
                  {skills.description}
                </p>

                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-4'>
                  {skills.skilllist.map((skill, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={fadeIn}
                      initial='initial'
                      animate='animate'
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[160px] bg-gradient-to-br from-[#1a1a1f] to-[#232329] rounded-xl flex flex-col justify-center items-center group border border-green-500/10 hover:border-green-500/30 transition-all duration-300 shadow-lg hover:shadow-green-500/5'>
                            <div className='text-5xl group-hover:text-green-500 transition-all duration-300 mb-4'>
                              {skill.icon}
                            </div>
                            <span className='text-white/80 group-hover:text-white transition-all duration-300 capitalize text-sm'>
                              {skill.name}
                            </span>
                            <span className='text-xs text-green-500/80 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                              {skill.level}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>
                              {skill.name} - {skill.level}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default AboutPage;
