import Link from 'next/link';
import Nav from './Nav';
import { Button } from './ui/button';
import { FileDown } from 'lucide-react';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='px-2 py-8 xl:py-12 text-white'>
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
