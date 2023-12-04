import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = (  {targetSectionContacts} ) => {

    return (
        <div className='footer' ref={targetSectionContacts} >

            <div className="img-contain">
                <img src="images/logo/logo_contacts.png" alt="Mon logo" />
                <h2>Contacts</h2>
                <p className="white-space"></p>
            </div>

            <div className="contain">
            <a href="https://www.linkedin.com/in/jessy-viranaiken-72351623b/" target="_blank">
                <p className='name'>Linkedin</p>
                <FontAwesomeIcon icon={faLinkedinIn} className='icone' />
            </a>
            <a href="https://github.com/CardinalJV" target="_blank" >
                <p className='name'>Github</p>
                <FontAwesomeIcon icon={faGithub} className='icone' />
            </a>
            <a href="mailto:jessy.viranaiken@icloud.com" >
                <p className='name'>Mail</p>
                <FontAwesomeIcon icon={faEnvelope} className='icone' />
            </a>

            
            </div>
            <p className="copyright"> 
            < FontAwesomeIcon icon={ faCopyright } />&nbsp;
            2023 - Viranaiken Jessy</p>
        </div>
    );
};

export default Footer;

/* <a href="https://www.linkedin.com/in/jessy-viranaiken-72351623b/" target="_blank">
                <p className='name'>Linkedin</p>
                <FontAwesomeIcon icon={faLinkedinIn} className='icone' />
            </a>
            <a href="https://github.com/CardinalJV" target="_blank" >
                <p className='name'>Github</p>
                <FontAwesomeIcon icon={faGithub} className='icone' />
            </a>
            <a href="mailto:jessy.viranaiken@icloud.com" >
                <p className='name'>Mail</p>
                <FontAwesomeIcon icon={faEnvelope} className='icone' />
            </a> */