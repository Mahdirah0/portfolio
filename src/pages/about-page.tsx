import { Container, Header, Headings } from '../components';

export const AboutPage = () => {
  return (
    <Container>
      <Header />
      <Headings.H2>About Me</Headings.H2>
      <p className='prose '>
        Passionate software developer skilled in JavaScript, Python, React, and
        TypeScript. Strong problem-solving abilities and eager to turn ideas
        into functional applications. Committed to continuous learning and
        collaborative teamwork. Excited to make a meaningful impact in software
        development.
      </p>
      <p className='prose '>Email: mrahman2525@outlook.com</p>
    </Container>
  );
};
