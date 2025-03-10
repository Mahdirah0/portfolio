import { Link } from 'react-router-dom';
import { RESUME_PATH } from '@src/constants';

const links = [
  {
    path: '/',
    label: 'Mahdi',
  },
  {
    path: '/#about',
    label: 'About',
  },
  {
    path: '/projects',
    label: 'Projects',
  },
  {
    path: RESUME_PATH,
    target: '_blank',
    label: 'Resume',
  },
];

export const Header = () => {
  return (
    <header>
      <div className='rounded-md flex justify-center space-x-2 my-10 py-5  shadow-2xl'>
        <nav className=''>
          <ul className='flex space-x-3 md:space-x-10'>
            {links.map((item) => (
              <li key={item.label}>
                <Link to={item.path} target={item.target}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
