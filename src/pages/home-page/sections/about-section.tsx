import { Headings } from '@src/components';

export const AboutSection = () => {
  return (
    <section id='#about' className='py-10 rounded-md shadow-2xl p-5'>
      <Headings.H2 className='font-bold mb-5'>
        Software Developer solving problems through code, based in London, UK.
      </Headings.H2>
      <p className='mb-2'>
        I enjoy building efficient, scalable applications and continuouslyk
        learning new technologies to improve my craft. My focus is on writing
        clean, maintainable code and creating impactful solutions.
      </p>
      <p>
        I am proficient in React, TypeScript, NestJS, and PostgreSQL and
        currently learning AWS and Go to expand my skills.
      </p>
    </section>
  );
};
