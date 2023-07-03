import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { useState, useEffect } from 'react';
import { HamburgerMenu } from './HamburgerMenu';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const Header = () => {
  const { width } = useWindowDimensions();
  const linkedInUrl = 'https://www.linkedin.com/in/mahdi-rahman-14383420a/';

  return (
    <header id='header' className=' bg-neutral text-white'>
      <div className='flex w-4/5 m-auto items-center justify-between h-24'>
        <h1 className='text-2xl'>
          <Link to='/'>Mahdi Rahman</Link>
        </h1>
        {width < 635 ? (
          <HamburgerMenu />
        ) : (
          <nav>
            <ul className='flex'>
              <li className='mr-5'>
                <Link to='/'>Home</Link>
              </li>
              <li className='mr-5'>
                <HashLink smooth to={'#about'}>
                  About
                </HashLink>
              </li>
              <li className='mr-5'>
                <HashLink smooth to={'#projects'}>
                  Project
                </HashLink>
              </li>
              <li>
                <Link to={linkedInUrl} target='_blank'>
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
