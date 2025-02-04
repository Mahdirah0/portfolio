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
    <div className='text-center w-1/2 m-auto'>
      <div>
        <Headings.H1 className='text-xl'>
          Hi there! I'm Mahdi Rahman
        </Headings.H1>
        <Headings.H2>Software Developer</Headings.H2>
      </div>
      <p>
        Passionate software developer skilled in JavaScript, Python, React, and
        TypeScript. Strong problem-solving abilities and eager to turn ideas
        into functional applications. Committed to continuous learning and
        collaborative teamwork. Excited to make a meaningful impact in software
        development. Email me: mrahman2525@outlook.com
      </p>
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
    </div>
  );
};
