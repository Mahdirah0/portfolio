import { Link } from 'react-router-dom';
import bgImage from '../assets/bg-image.jpg';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconFileCv,
} from '@tabler/icons-react';
import {
  LINKED_IN_PROFILE_URL,
  GITHUB_PROFILE_URL,
  RESUME_URL,
} from '../constants';

const HeroStyles = {
  backgroundImage: `url(${bgImage})`,
};

export const Hero = () => {
  return (
    <div id='hero' className='hero h-[950px]' style={HeroStyles}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-semibold'>Hi there, I'm Mahdi</h1>
          <p className='mb-5 text-2xl'>Software Developer</p>
          <div className='flex items-center justify-center'>
            <Link to={LINKED_IN_PROFILE_URL} target='_blank'>
              <button className='btn btn-neutral'>
                <IconBrandLinkedin />
              </button>
            </Link>
            <Link to={GITHUB_PROFILE_URL} target='_blank'>
              <button className='btn btn-neutral mx-3'>
                <IconBrandGithub />
              </button>
            </Link>
            <Link to={RESUME_URL} target='_blank'>
              <button className='btn btn-neutral'>
                <IconFileCv />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
