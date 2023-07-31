import { Link } from 'react-router-dom';

type Props = {
  img: string;
  name: string;
  tech: string[];
  description?: string;
  url: string;
  sourceUrl: string;
};

export const ShowProjects: React.FC<Props> = ({
  name,
  tech,
  img,
  description,
  sourceUrl,
  url,
}) => {
  return (
    <div className='max-w-[300px] sm:max-w-md mx-auto mb-24 bg-white rounded-xl shadow-md md:mx-2 md:max-w-4xl 2xl:min-w-[66rem]'>
      <div className='md:flex'>
        <div className='md:shrink-0'>
          <img
            className='h-56 w-full object-fill rounded-t-md md:rounded-l-md md:rounded-r-none md:h-full md:w-96 2xl:min-w-[30rem]'
            src={`/images/${img}`}
            alt={name}
          />
        </div>
        <div className='p-8 2xl:px-14'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            {name}
          </div>
          {description && <p className='mt-2 text-slate-500'>{description}</p>}
          <div className='mt-2 '>
            <span className=''>Tech stack:</span>
            <div>
              {tech.map((tech) => (
                <span className='badge badge-ghost mr-2 my-2'>{tech}</span>
              ))}
            </div>
          </div>
          <div className='mt-14'>
            <Link to={sourceUrl} target='_blank'>
              <button className='btn btn-outline btn-xs sm:btn-sm'>
                Source Code
              </button>
            </Link>
            <Link to={url} target='_blank'>
              <button className='btn btn-neutral btn-xs ml-2 sm:btn-sm'>
                Visit Website
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
