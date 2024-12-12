import { Link } from 'react-router-dom';
import { LINKED_IN_PROFILE_URL, RESUME_PATH } from '../constants';

import { useState, useEffect } from 'react';
// import { HamburgerMenu } from './HamburgerMenu';

const links = [
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/projects',
    label: 'Projects',
  },
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useWindowDimensions = () => {
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
};

export const HamburgerMenu = () => {
  return (
    <details className='dropdown dropdown-end'>
      <summary className='btn btn-ghost'></summary>
      <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48 text-black'>
        {links.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
        <li>
          <Link to={RESUME_PATH} target='_blank'>
            Resume
          </Link>
        </li>
      </ul>
    </details>
  );
};

export const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header>
      <div className='flex items-center justify-between h-24'>
        <h2 className='text-xl'>
          <Link to='/'>MAHDI RAHMAN</Link>
        </h2>
        <div className='flex space-x-5'>
          {width < 635 ? (
            <HamburgerMenu />
          ) : (
            <nav>
              <ul className='flex space-x-5'>
                {links.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <Link to={RESUME_PATH} target='_blank'>
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
