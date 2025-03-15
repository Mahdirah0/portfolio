import { Link } from 'react-router-dom';
import { RESUME_PATH } from '@src/constants';
import { Badge } from './ui/badge';

const links = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/#about',
    label: 'About',
  },
  {
    path: '/projects',
    label: 'Projects',
  },
  // {
  //   path: RESUME_PATH,
  //   target: '_blank',
  //   label: 'Resume',
  // },
];

export const Header = () => {
  return (
    <header className=''>
      <div className=' flex justify-center space-x-2  py-5'>
        <nav className='bg-black text-white rounded-3xl m-3 py-3 px-10'>
          <ul className='flex space-x-3 md:space-x-10'>
            {links.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
