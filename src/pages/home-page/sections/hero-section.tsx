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
import { buttonVariants } from '@src/components/ui/button';

const LabelContent = ({ svg: Svg, name }: { svg: any; name: string }) => {
  return (
    <div className='flex space-x-1 align-middle items-center justify-center'>
      <Svg />
      <span>{name}</span>
    </div>
  );
};

const heroLinks = [
  {
    path: LINKED_IN_PROFILE_URL,
    label: <LabelContent svg={LinkedInSvgIcon} name='LinkedIn' />,
  },
  {
    path: GITHUB_PROFILE_URL,
    label: <LabelContent svg={GithubSvgIcon} name='GitHub' />,
  },
  {
    path: RESUME_PATH,
    label: <LabelContent svg={ResumeSvgIcon} name='Resume' />,
  },
];

export const HeroSection = () => {
  return (
    <section className='mx-1 h-[400px] lg:h-[500px] text-center flex justify-center flex-col space-y-3 lg:space-y-8'>
      <div className='space-y-5 lg:space-y-12'>
        <div>
          <Headings.H1 className='md:text-8xl'>Hi, I'm Mahdi.</Headings.H1>
          <Headings.H1 className='md:text-8xl'>
            A Software Developer.
          </Headings.H1>
        </div>
        <p className='lg:text-lg italic'>
          I'm passionate about crafting experiences that are engaging,
          accessible, and user-centric.
        </p>
      </div>
      <div className='space-x-5 flex justify-center'>
        {heroLinks.map(({ label, path }) => (
          <Link
            className={buttonVariants({ variant: 'outline' })}
            to={path}
            target='_blank'
          >
            {label}
          </Link>
        ))}
        {/* <Link
          className={badgeVariants({ variant: 'outline' })}
          to={LINKED_IN_PROFILE_URL}
          target='_blank'
        >
          <span>
            <LinkedInSvgIcon />
            LinkedIn
          </span>
        </Link>
        <Link
          className={badgeVariants({ variant: 'outline' })}
          to={GITHUB_PROFILE_URL}
          target='_blank'
        >
          <
          <GithubSvgIcon />
        </Link>
        <Link
          className={badgeVariants({ variant: 'outline' })}
          to={RESUME_PATH}
          target='_blank'
        >
          <ResumeSvgIcon />
        </Link> */}
      </div>
    </section>
  );
};
