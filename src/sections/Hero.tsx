import { Link } from 'react-router-dom';
import bgImage from '../assets/bg-image.jpg';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconFileCv,
} from '@tabler/icons-react';

const HeroStyles = {
  backgroundImage: `url(${bgImage})`,
};

export const Hero = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/mahdi-rahman-14383420a/';
  const githubUrl = 'https://github.com/Mahdirah0';

  return (
    <div id='hero' className='hero h-[950px]' style={HeroStyles}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>
            Hello there, I'm Mahdi Rahman
          </h1>
          <div className='flex items-center justify-center'>
            <button className='btn btn-neutral sm:btn-sm md:btn-md'>
              <Link to={linkedInUrl} target='_blank'>
                <IconBrandLinkedin />
              </Link>
            </button>
            <button className='btn btn-neutral mx-3 sm:btn-sm md:btn-md'>
              <Link to={githubUrl} target='_blank'>
                <IconBrandGithub />
              </Link>
            </button>
            <button className='btn btn-neutral sm:btn-sm md:btn-md'>
              <IconFileCv />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
