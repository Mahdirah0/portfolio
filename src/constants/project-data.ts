export type ProjectItem = {
  name: string
  img: string
  tech: string[]
  description?: string
  websiteUrl?: string
  sourceCodeUrl?: string
  from?: string;
  to?: string;
}

export const WORK_EXPERIENCE: ProjectItem[] = [
  {
    name: 'Time Sushi',
    tech: ["Next.js", "Tanstack Query", "Unit Testing", "Tailwind", "API"],
    description: "Developed the commercial website using Next.js and Typescript. Showcasing Menu for the restaurant",
    websiteUrl: "https://www.timesushi.co.uk/",
    from: 'June 2023',
    to: 'Oct 2023',
    img: 'timesushi.png'
  }
]

export const PROJECT_DATA: ProjectItem[] = [
  {
    name: 'Movie Website',
    img: 'movie.png',
    tech: ['ReactJS', 'Responsive', 'Javascript', 'API'],
    description:
      'A web application created with ReactJS showcasing popular movies and series using MovieDB API.',
    websiteUrl: 'https://mahdirah0-movie-app.netlify.app/',
    sourceCodeUrl: 'https://github.com/Mahdirah0/movie-app',
  },
  {
    name: 'A* Visualizer',
    img: 'pathfinding.png',
    tech: ['HTML', 'CSS', 'Typescript', 'React'],
    description:
      'Finds the shortest path using A* algorithm, visualized using React',
    websiteUrl: 'https://mahdirah0-pathfinding.netlify.app',
    sourceCodeUrl: 'https://github.com/Mahdirah0/pathfinding',
  },
  {
    name: 'Explorer Landing Website',
    img: 'explore.png',
    tech: ['HTML', 'CSS', 'Javascript', 'Responsive'],
    description: 'Responsive website created with HTML, CSS and Javascript',
    websiteUrl: 'https://mahdirah0-explorer.netlify.app/',
    sourceCodeUrl: 'https://github.com/Mahdirah0/explore',
  },
  {
    name: 'Restaurant Landing Website',
    img: 'restaurant.png',
    tech: ['HTML', 'CSS', 'Javascript', 'Responsive'],
    websiteUrl: 'https://mahdirah0-restaurant.netlify.app',
    sourceCodeUrl: 'https://github.com/Mahdirah0/restaurant-website',
  },
  {
    name: 'Chess',
    img: 'chess.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    websiteUrl: 'https://mahdirah0-chess.netlify.app/',
    sourceCodeUrl: 'https://github.com/Mahdirah0/chess/',
  },
  {
    name: 'London Landing Website',
    img: 'london.png',
    tech: ['HTML', 'CSS', 'Javascript', 'Responsive'],
    description: 'A responsive website showing the beauty of London.',
    websiteUrl: 'https://mahdirah0-london.netlify.app/',
    sourceCodeUrl: 'https://github.com/Mahdirah0/london',
  },
  // {
  //   name: 'Resume Website',
  //   img: 'resume.png',
  //   tech: ['React', 'Typescript'],
  //   websiteUrl: 'https://mahdirah0-resume.netlify.app',
  //   sourceCodeUrl: 'https://github.com/Mahdirah0/resume',
  // },
  {
    name: 'Personal Portfolio',
    img: 'portfolio.png',
    tech: ['React', 'Typescript', 'Responsive'],
    websiteUrl: 'https://mahdirah0.netlify.app/',
    sourceCodeUrl: 'https://github.com/Mahdirah0/portfolio',
  },
  {
    name: 'Traveler Landing Website',
    img: 'travel.png',
    tech: ['HTML', 'CSS', 'Javascript', 'Responsive'],
    websiteUrl: 'https://mahdirah0-traveler.netlify.app/',
    sourceCodeUrl: 'https://github.com/Mahdirah0/traveler',
  },
];
