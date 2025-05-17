import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Opsss... Página não encontrada!</p>
      <Link to="/home" className="notfound-link">Voltar para a Home</Link>
    </div>
  );
};

export default NotFound;