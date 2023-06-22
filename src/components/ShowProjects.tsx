import { Link } from 'react-router-dom';

type Props = {
  img: string;
  name: string;
  tech: string[];
  description: string;
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
    <div className='flex mb-16'>
      <div className='w-[700px] drop-shadow-lg'>
        <img
          src={`/images/${img}`}
          className='w-[700px] h-[400px] rounded-md'
          alt={name}
        />
      </div>
      <div className='mx-52'>
        <div className='w-[500px]'>
          <h1 className='text-3xl font-bold mb-5'>{name}</h1>
          <p className='prose mb-1'>{description}</p>
          <div className='mt-2'>
            <p className='mb-3'>Stack used:</p>
            <div>
              {tech.map((item) => (
                <h1 className='mr-3 btn no-animation btn-sm'>{item}</h1>
              ))}
            </div>
          </div>
          <div className='mt-7'>
            <button className='btn btn-neutral btn-sm'>
              <Link to={sourceUrl} target='_blank'>
                Source Code
              </Link>
            </button>
            <button className='btn btn-neutral btn-sm mx-3'>
              <Link to={url} target='_blank'>
                Visit Website
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
