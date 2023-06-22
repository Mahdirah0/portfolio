import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
  return (
    <header
      id='header'
      className='flex w-[1600px] m-auto items-center justify-between h-24'
    >
      <h1 className='mx-3 text-2xl'>Mahdi Rahman</h1>
      <nav>
        <ul className='flex '>
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
          <li>Contact Me</li>
        </ul>
      </nav>
    </header>
  );
};
