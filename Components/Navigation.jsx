import React from 'react'; // On importe la bibliothèque React pour pouvoir créer le composant.

// On importe "NavLink" qui est une version spéciale de "Link" pour les menus de navigation.
// NavLink permet, par exemple, d'ajouter automatiquement une classe "active" au lien cliqué.
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        /* Conteneur principal de la barre de navigation */
        <div>
            <nav>
                <NavLink to="/Accueil">Accueil</NavLink> {/* Crée un lien vers la route "/Accueil". React changera la page sans recharger tout le navigateur. */}
                <NavLink to="/AjoutTache">Ajout tâches</NavLink> {/* Crée un lien vers la route "/AjoutTache" définie dans ton fichier App.jsx */}
                <NavLink to="/DetailsTache">Détail tâche</NavLink> {/* Crée un lien vers la route de base pour les détails d'une tâche */}
            </nav>
        </div>
    );
}

export default Navigation;