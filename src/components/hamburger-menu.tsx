import { Link } from 'react-router-dom';

export const HamburgerMenu = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/mahdi-rahman-14383420a/';

  return (
    <details className='dropdown dropdown-end'>
      <summary className='btn btn-ghost'></summary>
      <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48 text-black'>
        <li className=''>
          <Link to='/'>Home</Link>
        </li>
        <li className=''>
          {/* <HashLink smooth to={'#about'}> */}
          About
          {/* </HashLink> */}
        </li>
        <li className=''>
          {/* <HashLink smooth to={'#projects'}> */}
          Project
          {/* </HashLink> */}
        </li>
        <li className=''>
          <Link className='' to={linkedInUrl} target='_blank'>
            Contact Me
          </Link>
        </li>
      </ul>
    </details>
  );
};
