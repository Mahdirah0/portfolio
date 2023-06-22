import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { ProjectData } from '../projectData';
import { Footer } from './Footer';

export const MoreProject = () => {
  return (
    <div>
      <Header />
      <div className='w-[1600px] m-auto mt-20 grid gap-8 grid-cols-4 grid-rows-4'>
        {ProjectData.map((item) => (
          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img src={`/images/${item.img}`} alt={item.name} />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{item.name}</h2>
              <div className='flex'>
                {item.tech.map((tech) => (
                  <h1 className='mr-3'>{tech}</h1>
                ))}
              </div>
              <div className='card-actions'>
                <div className='mt-5'>
                  <button className='btn btn-neutral btn-sm'>
                    <Link to={item.sourceCodeUrl}>Source Code</Link>
                  </button>
                  <button className='btn btn-neutral btn-sm mx-3'>
                    <Link to={item.url}>Visit Website</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
