import { TextAnimate } from '@/components/magicui/text-animate';
import Photo from '@/components/Photo';
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
              <TextAnimate
                delay={1}
                animation='scaleUp'
                by='character'
                once
                className='h1 text-green-600'
              >
                Trung Kien
              </TextAnimate>
              {/* <span className='text-green-600'>Trung Kien</span> */}
            </h1>
            <p className='max-w-[300px] mb-9 text-white/80 mr-3'>
              A professional dedicated to continuous learning, including new
              programming languages and technologies, to contribute effectively
              to team success.
            </p>

            {/* Download CV */}
            <div className='flex flex-col xl:flex-row items-center gap-8 mb-9'>
              <Button className='bg-green-700 text-grey-800 hover:bg-green-600 cursor-pointer'>
                <a
                  href='/cv.pdf'
                  className='flex flex-row items-center gap-2'
                  download
                >
                  <span>Download CV</span>
                  <FiDownload />
                </a>
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials
                  containerStyles='flex gap-4 '
                  iconStyles='w-10 h-10 border border-green-700 rounded-full flex justify-center items-center text-green-400 text-base items-center hover:bg-green-700 hover:text-white'
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
