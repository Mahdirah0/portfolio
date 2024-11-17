import { PROJECT_DATA } from '../constants';
import { ShowProjects } from '../components/show-projects';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const firstThreeProject = PROJECT_DATA.slice(0, 3);

  return (
    <div
      id='projects'
      className='bg-neutral-100 m-auto py-32  flex flex-col items-center'
    >
      <div className='mb-14'>
        <h1 className='mb-5 text-4xl font-bold'>Projects</h1>
      </div>
      <div className='w-full flex items-center flex-col'>
        <div>
          {firstThreeProject.map((item) => (
            <ShowProjects
              key={item.name}
              name={item.name}
              tech={item.tech}
              img={item.img}
              description={item.description}
              websiteUrl={item.websiteUrl}
              sourceCodeUrl={item.sourceCodeUrl}
            />
          ))}
        </div>
      </div>
      <Link to='view-more'>
        <button className='btn btn-primary bg-indigo-500 border-none text-white'>
          View More
        </button>
      </Link>
    </div>
  );
};
