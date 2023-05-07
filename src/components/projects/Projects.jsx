import './Projects.css';
import Marker from '../ui/Marker';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section class="Projects">
      <Marker content="Projects" />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
}
