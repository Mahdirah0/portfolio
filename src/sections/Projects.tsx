import { ProjectData } from '../projectData';
import { ShowProjects } from '../components/ShowProjects';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const firstThreeProject = ProjectData.slice(0, 3);

  return (
    <div id='projects' className='m-auto py-32  flex flex-col items-center'>
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
              url={item.url}
              sourceUrl={item.sourceCodeUrl}
            />
          ))}
        </div>
      </div>
      <button className='btn btn-primary bg-indigo-500 border-none text-white'>
        <Link to='view-more'>View More</Link>
      </button>
    </div>
  );
};
