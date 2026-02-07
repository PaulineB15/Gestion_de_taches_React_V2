// ----------------------------------------------------
// 1. LES IMPORTATIONS
// ----------------------------------------------------

import React from 'react'; // On importe la bibliothèque React pour pouvoir créer le composant.
// On importe "NavLink" qui est une version spéciale de "Link" pour les menus de navigation.
// Contrairement à une balise <a> classique, NavLink ne recharge pas la page entière.
// Il permet aussi d'ajouter un style particulier (ex: gras ou couleur) quand le lien est actif.
import {NavLink} from "react-router-dom";

// ----------------------------------------------------
// 2. LE COMPOSANT DE NAVIGATION
// ----------------------------------------------------
function Navigation() {
    return (
        /* Conteneur <div> englobe toute la structure de la navigation */
        <div>
            <nav>
                <ul>
                    <li>
                {/* NavLink vers la route "/Accueil" : React affiche le composant <Accueil /> sans rafraîchir le navigateur */}
                <NavLink to="/Accueil">Accueil</NavLink>
                    </li>
                    <li>
                {/* NavLink vers la route "/AjoutTache" : permet d'accéder au formulaire de création de tâches */}
                <NavLink to="/AjoutTache">Ajout tâches</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;