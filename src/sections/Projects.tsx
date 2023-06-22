import { ProjectData } from '../projectData';
import { ShowProjects } from '../components/ShowProjects';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const firstThreeProject = ProjectData.slice(0, 3);

  return (
    <div
      id='projects'
      className='m-auto mb-52 w-[1600px] flex flex-col items-center'
    >
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
      <button className='btn btn-neutral'>
        <Link to='view-more'>View More</Link>
      </button>
    </div>
  );
};
