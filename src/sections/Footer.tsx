import React from 'react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconArrowBadgeUpFilled,
} from '@tabler/icons-react';
import { HashLink } from 'react-router-hash-link';
import {
  GITHUB_PROFILE_URL,
  LINKED_IN_PROFILE_URL,
  RESUME_PATH,
} from '../constants';
import { Link } from 'react-router-dom';

type Props = {
  morePage?: boolean;
};

export const Footer: React.FC<Props> = ({ morePage }) => {
  return (
    <footer
      className={
        morePage
          ? 'absolute bg-neutral w-full bottom-0 left-0 right-0'
          : 'footer bg-neutral'
      }
    >
      <div className='w-4/5 m-auto flex flex-col items-center p-4 text-neutral-content sm:flex-row sm:justify-between'>
        <div className='my-3 sm:my-0'>
          <div className='avatar placeholder'>
            <span className='bg-neutral-focus text-neutral-content rounded-full p-3'>
              MR
            </span>
          </div>
        </div>
        <div className='mb-3 sm:mb-0'>
          <HashLink smooth to={'#header'}>
            <button className='btn btn-neutral'>
              <IconArrowBadgeUpFilled />
            </button>
          </HashLink>
          <Link to={LINKED_IN_PROFILE_URL} target='_blank'>
            <button className='btn btn-neutral'>
              <IconBrandLinkedin />
            </button>
          </Link>
          <Link to={GITHUB_PROFILE_URL} target='_blank'>
            <button className='btn btn-neutral'>
              <IconBrandGithub />
            </button>
          </Link>
          <Link to={RESUME_PATH} target='_blank'>
            <button className='btn btn-neutral'>
              <IconFileCv />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
