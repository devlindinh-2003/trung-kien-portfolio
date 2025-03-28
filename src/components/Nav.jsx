'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { path: '#home', name: 'Home' },
  { path: '#about', name: 'About' },
  { path: '#projects', name: 'Projects' },
  { path: '#contact', name: 'Contact' },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = links.map((link) => {
        const section = document.querySelector(link.path);
        return { id: link.path, top: section?.offsetTop || 0 };
      });

      const currentSection = sections
        .reverse()
        .find((section) => scrollPosition >= section.top - 100);

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='flex items-center gap-6'>
      {links.map((link, index) => (
        <a
          href={link.path}
          key={index}
          className={`${
            activeSection === link.path
              ? 'text-green-600 border-b-2 border-green-600'
              : ''
          } capitalize font-medium hover:text-green-600 hover:border-b-2 hover:border-green-600 transition-all`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
