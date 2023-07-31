import { SKILLS } from '../constants';

export const Skills = () => {
  return (
    <div className='flex flex-col items-center py-32 bg-neutral-100'>
      <h1 className='mb-4 text-4xl font-semibold text-center'>
        Technologies and Tools
      </h1>
      <div className='flex-wrap flex justify-center p-4'>
        {SKILLS.map((skills) => (
          <button
            key={skills}
            className='mr-3 my-3 btn no-animation btn-md bg-neutral-200 shadow-md'
          >
            {skills}
          </button>
        ))}
      </div>
    </div>
  );
};
