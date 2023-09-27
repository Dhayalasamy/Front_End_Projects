import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './UI/SectionTitle';

let state=false
const Projects = () => {
  
  const eventHandler =()=>{
    state=true;
  }
  return (
    <section className= {`py-10 align-element  `} id='projects ' onScroll={eventHandler}>
      <SectionTitle text='My Projects' />
      <div className={`py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 ${state ? 'translate-y-6' : ''} `}>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;