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
          <h1 className='mb-5 text-5xl font-semibold'>Hi there, I'm Mahdi</h1>
          <p className='mb-5 text-2xl'>Software Developer</p>
          <div className='flex items-center justify-center'>
            <button className='btn btn-neutral'>
              <Link to={linkedInUrl} target='_blank'>
                <IconBrandLinkedin />
              </Link>
            </button>
            <button className='btn btn-neutral mx-3'>
              <Link to={githubUrl} target='_blank'>
                <IconBrandGithub />
              </Link>
            </button>
            <button className='btn btn-neutral'>
              <IconFileCv />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
