// import { useState } from 'react'
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Footer } from './sections/Footer';
import { WorkExperience } from './sections/WorkExperience';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
