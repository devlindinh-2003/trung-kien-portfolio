'use client';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/devlindinh-2003',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/devlindinh/',
    label: 'LinkedIn',
  },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/devlin_dinh/',
    label: 'Instagram',
  },
];

interface SocialsStylesProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsStylesProps) => {
  return (
    <TooltipProvider>
      <div className={containerStyles}>
        {socials.map((social, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <a
                target='_blank'
                href={social.path}
                rel='noopener noreferrer'
                className={iconStyles}
              >
                {social.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent side='top'>{social.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default Socials;
