export const Skills = () => {
  const mySkills = [
    'HTML5',
    'CSS3',
    'Javascript',
    'Typescript',
    'React',
    'Tailwind',
    'NodeJS',
    'Api',
    'Express',
    'PostgreSQL',
    'Mongoose',
    'PrismaORM',
    'GraphQL',
    'Apollo',
  ];
  return (
    <div className='w-[1600px] m-auto flex flex-col items-center mb-32'>
      <h1 className='mb-14 text-5xl font-bold'>Skills</h1>
      <div className='flex-wrap'>
        {mySkills.map((skills) => (
          <button className='mr-3 my-3 btn no-animation btn-md'>
            {skills}
          </button>
        ))}
      </div>
    </div>
  );
};
