'use client';

import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';

const links = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-green-600' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <SheetTitle className='hidden'>Menu</SheetTitle>

        {/* logo */}
        <div className='mt-23 mb-20 text-center text-2xl'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold'>
              Trung Kien <span className='text-green-600'>.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className='flex items-center flex-col justify-center gap-8'>
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
