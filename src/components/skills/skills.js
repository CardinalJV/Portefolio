import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode, faGithub } from '@fortawesome/free-brands-svg-icons';

const skills = () => {
    return (

        <div className='skills'>

            <span className="img-contain">
                <img src={process.env.PUBLIC_URL + "/images/logo/logo_skills.png"} alt="Mon logo" />
                <h2>Compétences</h2>
                <p className="white-space"></p>
            </span>

            <div className="ul-contain">
                <ul>
                    <h3>
                        Techniques
                    </h3>

                    <li>
                        React.js
                        <span>
                            <FontAwesomeIcon icon={faReact} className='icone' />
                        </span>
                    </li>
                    <li>
                        Node.js
                        <span>
                            <FontAwesomeIcon icon={faNode} className='icone' />
                        </span>
                    </li>
                    <li>
                        Git/Github
                        <span>
                            <FontAwesomeIcon icon={faGithub} className='icone' />
                        </span>
                    </li>
                </ul>

                <ul>
                    <h3>
                        Relationnel
                    </h3>

                    <li>
                        Adaptabilité
                        <span>
                            <FontAwesomeIcon icon={faLightbulb} className='icone' />
                        </span>
                    </li>
                    <li>
                        Autonomie
                        <span>
                            <FontAwesomeIcon icon={faUser} className='icone' />
                        </span>
                    </li>
                    <li>
                        Travail en équipe
                        <span><FontAwesomeIcon icon={faUsers} className='icone' /></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default skills;