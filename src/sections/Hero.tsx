import { Link } from 'react-router-dom';
import bgImage from '../assets/bg-image.jpg';
import {
  LINKED_IN_PROFILE_URL,
  GITHUB_PROFILE_URL,
  RESUME_PATH,
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
          <div className='flex items-center justify-center'></div>
        </div>
      </div>
    </div>
  );
};
