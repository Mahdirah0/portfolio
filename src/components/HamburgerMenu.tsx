import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { IconMenu2 } from '@tabler/icons-react';

export const HamburgerMenu = () => {
  return (
    <details className='dropdown dropdown-end'>
      <summary className='btn btn-ghost'>
        <IconMenu2 />
      </summary>
      <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48 text-black'>
        <li className=''>
          <Link to='/'>Home</Link>
        </li>
        <li className=''>
          <HashLink smooth to={'#about'}>
            About
          </HashLink>
        </li>
        <li className=''>
          <HashLink smooth to={'#projects'}>
            Project
          </HashLink>
        </li>
        <li className=''>
          <HashLink smooth to={'#about'}>
            Contact Me
          </HashLink>
        </li>
      </ul>
    </details>
  );
};
