import React from "react"; // On importe React pour pouvoir définir et utiliser le composant.
import AjoutTache from "../Components/AjoutTache.jsx"; // On importe le composant "AjoutTache" pour pouvoir l'insérer à l'intérieur de l'accueil.


function Accueil(){

    return (
        /* Conteneur principal qui regroupe tout le contenu de la page d'accueil */
        <div>
    <h1>Accueil</h1>{/* Titre principal de la page */}
            <h2>Liste des tâches</h2> {/* Sous-titre pour la section qui affichera la liste des tâches */}
            <AjoutTache />

        </div>
    );

}

export default Accueil // On exporte le composant Accueil pour qu'il puisse être utilisé par le routeur dans App.jsx.