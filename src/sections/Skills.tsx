export const Skills = () => {
  const mySkills = [
    'HTML5',
    'CSS3',
    'Javascript',
    'Typescript',
    'React',
    'Tailwind',
    'NodeJS',
    'Express',
    'PostgreSQL',
    'Mongoose',
    'PrismaORM',
    'GraphQL',
    'Apollo',
  ];
  return (
    <div className='flex flex-col items-center py-32 bg-neutral-100'>
      <h1 className='mb-4 text-4xl font-semibold text-center'>
        Technologies and Tools
      </h1>
      <div className='flex-wrap flex justify-center p-4'>
        {mySkills.map((skills) => (
          <button className='mr-3 my-3 btn no-animation btn-md bg-neutral-200 shadow-md'>
            {skills}
          </button>
        ))}
      </div>
    </div>
  );
};
