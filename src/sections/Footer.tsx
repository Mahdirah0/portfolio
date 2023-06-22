import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconArrowBadgeUpFilled,
} from '@tabler/icons-react';
import { HashLink } from 'react-router-hash-link';

export const Footer = () => {
  return (
    <footer className='footer items-center p-4 bg-neutral text-neutral-content'>
      <div className='items-center grid-flow-col'>
        <div className='flex items-center'>
          <div className='avatar placeholder'>
            <span className='bg-neutral-focus text-neutral-content rounded-full p-3'>
              MR
            </span>
          </div>
          <h1 className='mx-3 text-xl'>Mahdi Rahman</h1>
        </div>
      </div>
      <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <div className='flex items-center justify-center'>
          <button className='btn btn-neutral sm:btn-sm md:btn-md mr-3'>
            <HashLink smooth to={'#header'}>
              <IconArrowBadgeUpFilled />
            </HashLink>
          </button>
          <button className='btn btn-neutral sm:btn-sm md:btn-md'>
            <IconBrandLinkedin />
          </button>
          <button className='btn btn-neutral mx-3 sm:btn-sm md:btn-md'>
            <IconBrandGithub />
          </button>
          <button className='btn btn-neutral sm:btn-sm md:btn-md'>
            <IconFileCv />
          </button>
        </div>
      </div>
    </footer>
  );
};
