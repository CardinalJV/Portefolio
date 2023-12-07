import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Notfound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Notfound = () => {

    const navigate = useNavigate();

    // Redirection vers la page d'accueil
    const handleNavigate = () => {
        navigate('/portefolio');
    };

    return (
        <div className='notfound-page'>
            <img src={process.env.PUBLIC_URL + "/images/logo/logo_notfound.png"} alt="Mon logo" />

            <div className="contain">
                <h5>404</h5>
                <p>Oups! La page que vous demandez n'existe pas, <br/>retournons à l'accueil.</p>
                <button onClick={handleNavigate}>
                <FontAwesomeIcon icon={faHouse} className='icone'  />
                <span>Home</span>
                </button>
            </div>


        </div>
    );
};

export default Notfound;