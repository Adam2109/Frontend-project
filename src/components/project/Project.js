import { NavLink } from "react-router-dom";
import "./style.css";

const Project = ({title, img, index}) => {
    return ( <NavLink to={`/project/${index}`}> <li class="project">
    
        <img src={img} alt={title} class="project__img" />
        <h3 class="project__title">{title}</h3>
    
</li>
</NavLink> );
}
 
export default Project;