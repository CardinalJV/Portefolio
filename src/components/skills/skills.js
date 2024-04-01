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
                        <h4>
                            React.js
                            <p>
                                #Sass#JSX
                            </p>
                        </h4>
                        <span>
                            <FontAwesomeIcon icon={faReact} className='icone' />
                        </span>
                    </li>
                    <li>
                        <h4>
                            Node.js
                            <p>
                                #Express#MongoDB
                            </p>
                        </h4>
                        <span>
                            <FontAwesomeIcon icon={faNode} className='icone' />
                        </span>
                    </li>
                    <li>
                        <h4>
                            Git/Github
                            <p>
                                #Add#Commit
                            </p>
                        </h4>
                        <span>
                            <FontAwesomeIcon icon={faGithub} className='icone' />
                        </span>
                    </li>
                </ul>

                <ul>
                    <h3>
                        Relationnelles
                    </h3>

                    <li>
                        <h4>
                        Adaptabilité
                        </h4>
                        <span>
                            <FontAwesomeIcon icon={faLightbulb} className='icone' />
                        </span>
                    </li>
                    <li>
                        <h4>
                        Autonomie
                        </h4>
                        <span>
                            <FontAwesomeIcon icon={faUser} className='icone' />
                        </span>
                    </li>
                    <li>
                        <h4>
                        Travail en équipe
                        </h4>
                        <span><FontAwesomeIcon icon={faUsers} className='icone' /></span>
                    </li>
                </ul>
            </div>
            <div className="white-space"></div>
        </div>
    );
};

export default skills;