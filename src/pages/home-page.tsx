import { Container, Header, Headings } from '../components';

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <div className='text-center w-1/2 m-auto'>
        <div>
          <Headings.H1>Hi there! I'm Mahdi Rahman</Headings.H1>
          <Headings.H2>Software Developer</Headings.H2>
        </div>
        <p>
          Passionate software developer skilled in JavaScript, Python, React,
          and TypeScript. Strong problem-solving abilities and eager to turn
          ideas into functional applications. Committed to continuous learning
          and collaborative teamwork. Excited to make a meaningful impact in
          software development. Email me: mrahman2525@outlook.com
        </p>
        <div>
          <button>LinkedIn</button>
          <button>Github</button>
          <button>Resume</button>
        </div>
      </div>
    </Container>
  );
};
