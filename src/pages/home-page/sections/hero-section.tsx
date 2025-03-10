import {
  GithubSvgIcon,
  Headings,
  LinkedInSvgIcon,
  ResumeSvgIcon,
} from '@src/components';
import {
  GITHUB_PROFILE_URL,
  LINKED_IN_PROFILE_URL,
  RESUME_PATH,
} from '@src/constants';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className='h-[500px] lg:h-[600px] text-center flex justify-center flex-col space-y-3'>
      <div className='space-y-3 '>
        <div>
          <Headings.H1 className='md:text-8xl'>Hi, I'm Mahdi.</Headings.H1>
          <Headings.H1 className='md:text-8xl'>
            A Software Developer.
          </Headings.H1>
        </div>
        <p>
          I'm passionate about crafting experiences that are engaging,
          accessible, and user-centric.
        </p>
      </div>
      <div className='space-x-3'>
        <button>
          <Link to={LINKED_IN_PROFILE_URL} target='_blank'>
            <LinkedInSvgIcon />
          </Link>
        </button>
        <button>
          <Link to={GITHUB_PROFILE_URL} target='_blank'>
            <GithubSvgIcon />
          </Link>
        </button>
        <button>
          <Link to={RESUME_PATH} target='_blank'>
            <ResumeSvgIcon />
          </Link>
        </button>
      </div>
    </section>
  );
};
