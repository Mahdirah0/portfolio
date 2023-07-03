import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { ProjectData } from '../projectData';
import { Footer } from './Footer';

export const MoreProject = () => {
  return (
    <div className='relative min-h-screen'>
      <Header />
      <div className='flex flex-wrap justify-center pb-52 pt-10'>
        {ProjectData.map((item) => (
          <div className='card w-80 bg-base-100 shadow-xl m-5 lg:w-96'>
            <figure>
              <img src={`/images/${item.img}`} alt={item.name} />
            </figure>
            <div className='card-body'>
              <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                {item.name}
              </div>
              <div>
                <span className=''>Tech stack:</span>
                <div className='flex flex-wrap'>
                  {item.tech.map((tech) => (
                    <span className='badge badge-ghost mr-2 my-2'>{tech}</span>
                  ))}
                </div>
              </div>
              <div className='card-actions'>
                <div className='mt-5'>
                  <button className='btn btn-outline btn-xs sm:btn-sm'>
                    <Link to={item.sourceCodeUrl}>Source Code</Link>
                  </button>
                  <button className='btn btn-neutral btn-xs mx-3 sm:btn-sm'>
                    <Link to={item.url}>Visit Website</Link>
                  </button>
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