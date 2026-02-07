
// ----------------------------------------------------
// 1. LES IMPORTATIONS
// ----------------------------------------------------
import React from "react"; // On importe React pour pouvoir définir et utiliser le composant.
import {Link} from "react-router-dom" // Importation de Link pour naviguer vers les détails sans recharger la page.


/** // DESTRUCTURATION
 * On récupère les données via les "Props" entre les accolades {}.
 * mesTaches : Le tableau d'objets venant de App.jsx.
 * onSupprime : La fonction de suppression venant de App.jsx.
 */
function Accueil({mesTaches, onSupprime}){

    return (
        /* Conteneur principal qui regroupe tout le contenu de la page d'accueil */
        <div>
            <h1>Bienvenue</h1>
            <h2>Liste des tâches</h2>
            <ul>
                {/* Méthode .map() pour transformer le tableau d'objets en éléments HTML.
                  - "tache" représente l'objet actuel (avec le titre, id, ect.).
                  - "index" représente la position (0, 1, 2...) dans le tableau.
                */}
                {mesTaches.map((tache, index) => (
                    /* La "key" est obligatoire pour aider React à suivre chaque élément de la liste */
                    <li key={index}>
                        {tache.title} {/* Afficher le titre de l'objet "tache"*/}
                        <Link to={`/DetailsTache/${index}`}>Détails</Link>

                        <button onClick={() => onSupprime(index)}> {/* Bouton supprimer*/}
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Accueil // On exporte le composant Accueil pour qu'il puisse être utilisé par le routeur dans App.jsx.