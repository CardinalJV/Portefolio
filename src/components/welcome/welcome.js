import React from 'react';
import './welcome.css';
import { useSpring, animated } from 'react-spring';

const Welcome = ( { scrollToProjects, scrollToContacts }) => {
    const [{ translateY }, set] = useSpring(() => ({ translateY: 0 }));

    const handleScroll = () => {
        set({ translateY: window.scrollY });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <animated.div
            className="welcome"
            style={{ transform: translateY.interpolate((value) => `translateY(-${value}px)`) }}
        >
            <div className="contain">
                <h1>Bienvenue sur mon portefolio ! Je me nomme Viranaiken Jessy et je suis aspirant développeur iOS (mais aussi développeur web !).
                </h1>
                <span>
                    <button onClick={scrollToProjects}>Projets</button>
                    <button onClick={scrollToContacts}>Contacts</button>
                </span>
                <img src={process.env.PUBLIC_URL + "/images/logo/logo_welcome.png"}  alt="Mon logo" />
                
            </div>
            
        </animated.div >
    );
};

export default Welcome;