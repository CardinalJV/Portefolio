import React, { useRef } from 'react';
import Skills from '../../components/skills/skills.js';
import Projects from '../../components/projects/projects.js';
import Footer from '../../components/footer/footer.js';
import './Home.css';
import Welcome from '../../components/welcome/welcome.js';

const Home = () => {

    const targetSectionProjects = useRef(null);
    const targetSectionContacts = useRef(null);

    const scrollToProjects = () => {
        if (targetSectionProjects.current) {
            targetSectionProjects.current.scrollIntoView({ behavior: 'smooth' });
        } 
    };

    const scrollToContacts = () => {
        if (targetSectionContacts.current) {
            targetSectionContacts.current.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <div className='home-page'>
            < Welcome scrollToProjects={scrollToProjects} scrollToContacts={ scrollToContacts}/>
            < Skills />
            < Projects targetSectionProjects={targetSectionProjects} />
            < Footer targetSectionContacts={targetSectionContacts}/>
        </div>
    );
};

export default Home