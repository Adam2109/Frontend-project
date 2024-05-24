import Project from "../components/project/Project";


import { projects } from "./../helpers/projectsList";

const Projects = () => {
    return (  <main class="section">
    <div class="container">
        <h2 class="title-1">Projects</h2>
        <ul class="projects">
            
            {projects.map((project, index) =>{
                return <Project key={index} title={project.title} img={project.img} index={index}/>;
            })}


        </ul>
    </div>
</main>

);
}
 
export default Projects;