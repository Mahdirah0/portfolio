import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { PROJECT_DATA } from '../constants/projectData';
import { Footer } from './Footer';

export const MoreProject = () => {
  return (
    <div className='relative min-h-screen'>
      <Header />
      <div className='flex flex-wrap justify-center pb-52 pt-10'>
        {PROJECT_DATA.map((item) => (
          <div
            key={item.name}
            className='card w-80 bg-base-100 shadow-xl m-5 lg:w-96'
          >
            <figure className='h-56'>
              <img src={`/images/${item.img}`} alt={item.name} />
            </figure>
            <div className='card-body'>
              <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                {item.name}
              </div>
              <div>
                <span className=''>Tech stack:</span>
                <div className='flex flex-wrap'>
                  {item.tech.map((tech, idx) => (
                    <span key={idx} className='badge badge-ghost mr-2 my-2'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className='card-actions'>
                <div className='mt-5'>
                  <Link to={item.sourceCodeUrl} target='_blank'>
                    <button className='btn btn-outline btn-xs sm:btn-sm'>
                      Source Code
                    </button>
                  </Link>
                  <Link to={item.websiteUrl} target='_blank'>
                    <button className='btn btn-neutral btn-xs mx-3 sm:btn-sm'>
                      Visit Website
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer morePage={true} />
    </div>
  );
};
