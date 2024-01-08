import { PROJECT_DATA, WORK_EXPERIENCE } from '../constants';
import { ShowProjects } from '../components/ShowProjects';
import { Link } from 'react-router-dom';

export const WorkExperience = () => {
  return (
    <div id='projects' className='m-auto py-32 flex flex-col items-center'>
      <div className='mb-14'>
        <h1 className='mb-5 text-4xl font-bold'>Work Experience</h1>
      </div>
      <div className='w-full flex items-center flex-col'>
        <div>
          {WORK_EXPERIENCE.map((item) => (
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
    </div>
  );
};
