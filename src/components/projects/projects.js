import React, { useRef, useState } from 'react';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronLeft, faChevronRight, faCircleChevronDown, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode, faGithub } from '@fortawesome/free-brands-svg-icons';
import projets from '../../data/projets.json';

const Projects = ({ targetSectionProjects }) => {
    const [indexProject, setIndexProject] = useState(0);

    const toLeft = () => {
        if (indexProject === 0) {
            setIndexProject(projets.length - 1 )
        } else {
            setIndexProject(indexProject - 1)
        }
    };

    const toRight = () => {
        if (indexProject === projets.length - 1) {
            setIndexProject(0)
        } else {
            setIndexProject(indexProject + 1)
        }
    };

    const renderTags = (tags) => {
        return tags.map((tag, index) => (
            <li className='tags-item' key={index}>#{tag}</li>
        ));
    };

    const renderCompetence = (competences) => {
        return competences.map((competence, index) => (
            <li className='competence-item' key={index}>{competence}</li>
        ));
    };

    return (
        <div className='projects' ref={targetSectionProjects} >

            <div className="img-contain">
                <img src="images/logo/logo_projects.png" alt="" />
                <h2>Projets</h2>
                <span className='white-space'></span>
            </div>

            <article>

                <span className='type-projet'>
                    {projets[indexProject].type}
                </span>

                <div className="header-projects">
                    <h3>
                        {projets[indexProject].name}
                    </h3>
                    <p className='description'>{projets[indexProject].description}</p>
                </div>

                <span className="to-left">
                    <FontAwesomeIcon icon={faChevronLeft} className="icone-to-left" onClick={toLeft}/>
                </span>

                <div className="capture-contain">
                    <img src={projets[indexProject].picture} alt="Capture du projet Kaza" />
                    {renderTags(projets[indexProject].tags)}
                </div>

                <div className="info">
                    <ul>
                        <h4>Compétences évaluées:</h4>
                        {renderCompetence(projets[indexProject].competences)}
                    </ul>
                </div>

                <span className="to-right">
                    <FontAwesomeIcon icon={faChevronRight} className="icone-to-right" onClick={toRight}/>
                </span>

                <span className='buttons'>
                    <button>
                        <a href={projets[indexProject].lien_repo} target="_blank">
                            Lien vers Github
                            <FontAwesomeIcon icon={faGithub} className="icone"/>
                        </a>
                    </button>

                    <button>
                        <a href={projets[indexProject].lien_page} target="_blank">
                            Lien vers la page
                            <FontAwesomeIcon icon={faWindowMaximize} className="icone"/>
                        </a>
                    </button>
                </span>

            </article>
        </div>
    );
};

export default Projects;