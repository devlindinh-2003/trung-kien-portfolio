import Socials from '@/components/Socials';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

export default function Home() {
  return (
    <section className='h-full'>
      <div className='container mx-3 xl:mx-auto'>
        <div className='flex flex-col xl:flex-row  items-center justify-between xl:pt-8 xl:pb-24 '>
          {/* Text */}
          <div className='text-center xl:text-left'>
            <span className='text-xl'>Software Enginner</span>
            <h1 className='h1 mb-6'>
              Hello I&apos;m <br />{' '}
              <span className='text-green-600'>Trung Kien</span>
            </h1>
            <p className='max-w-[300px] mb-9 text-white/80 mr-3'>
              A professional dedicated to continuous learning, including new
              programming languages and technologies, to contribute effectively
              to team success.
            </p>

            {/* Download CV */}
            <div className='flex flex-col xl:flex-row items-center gap-8 mb-9'>
              <Button className='bg-green-700 text-grey-800'>
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div>Photo</div>
        </div>
      </div>
    </section>
  );
}
