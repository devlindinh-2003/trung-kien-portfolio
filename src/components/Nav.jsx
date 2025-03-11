'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' },
];
const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className='flex items-center gap-6'>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              'text-green-600 border-b-2 border-green-600'
            } capitalize font-medium hover:text-green-600 hover:border-b-2 hover:border-green-600 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
