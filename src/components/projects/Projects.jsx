import './Projects.css';
import Marker from '../ui/Marker';
import ProjectCard from './ProjectCard';
// Project Images
import Acta from '../../assets/acta.png';
import Assetica from '../../assets/assetica.png';
import Resumize from '../../assets/resumize.png';
import Portfolio from '../../assets/portfolio.png';
import Leafe from '../../assets/leafe.png';

export default function Projects() {
  return (
    <section className="Projects">
      <Marker content="Projects" />
      {projects.map((project) => (
        <ProjectCard
          name={project.name}
          description={project.description}
          url={project.url}
          img={project.img}
        />
      ))}
    </section>
  );
}

var projects = [
  {
    name: 'Acta',
    description:
      'A full stack single-page blog application with CRUD capabilities & user authentication. Built with React, Express.js, Firebase, and MySQL.',
    url: 'https://github.com/Luzefiru/Acta',
    img: Acta,
  },
  {
    name: 'Assetica',
    description:
      'A full stack inventory management web application for the modern consumer. Built with EJS, Express.js, and MongoDB.',
    url: 'https://github.com/Luzefiru/Assetica',
    img: Assetica,
  },
  {
    name: 'Resumize',
    description:
      'A CV creator & .pdf Exporter web application for eager jobseekers. Built with React and Firebase.',
    url: 'https://github.com/Luzefiru/Resumize',
    img: Resumize,
  },
  {
    name: 'Portfolio',
    description:
      'A creative portfolio page showcasing my best web development projects. Built with React.',
    url: 'https://github.com/Luzefiru/Portfolio',
    img: Portfolio,
  },
  {
    name: 'Leafe',
    description: 'A UI/UX case study for a minimalistic story writing mobile application. Created with Figma.',
    url: 'https://www.behance.net/gallery/198834831/Leafe-Mobile-Writing-App-UIUX-Case-Study',
    img: Leafe
  }
];
