import Link from 'next/link';
import Nav from './Nav';
import { Button } from './ui/button';
import { FileDown } from 'lucide-react';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-zinc-900 bg-opacity-90 backdrop-blur-md shadow-md z-50 px-2 py-6 xl:py-8 text-white transition-all'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Name */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Devlin <span className='text-green-600'>.</span>
          </h1>
        </Link>

        {/* Desktop Nav + Download Resumet*/}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='/' className='hidden'>
            <Button className='bg-green-800 hover:bg-green-700'>
              <FileDown />
              Download Resume
            </Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
