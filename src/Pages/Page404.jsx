
// ----------------------------------------------------
// 1. LES IMPORTATIONS
// ----------------------------------------------------

import React from 'react';
// Importation de Link pour permettre à l'utilisateur de sortir de l'erreur.
import { Link } from 'react-router-dom';

function Notfound() {
    return (
        <div>
        <h1> Erreur Page 404</h1>
            {/* Faire un lien  un lien de secours pour ne pas laisser l'utilisateur bloqué sur une page vide.
    // Bonne pratique à faire ! */}
    <Link to="/Accueil">Retourner à l'accueil</Link>
        </div>
    );

}

export default Notfound;