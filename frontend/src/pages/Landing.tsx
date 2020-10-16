import React from 'react';
import '../styles/global.css';
import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';
import {FiArrowRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Landing(){
    return(
        <div id="page-landing">
      <div className="content-wrapper">
      <img src={logoImg} alt='happy'></img>
      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia
de muitas crianças.</p>
      </main>

      <div className="location">
        <strong>Serra Negra</strong>
        <span>São Paulo</span>
      </div>

      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
      </Link>
      
      </div>
    </div>
  );
}


export default Landing;