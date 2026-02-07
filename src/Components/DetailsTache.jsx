// ----------------------------------------------------
// 1. LES IMPORTATIONS
// ----------------------------------------------------
// Importation du Hook "useParams" qui permet de lire les paramètres de l'URL (ex: l'index).
import { useParams } from "react-router-dom";

// ----------------------------------------------------
// 2. LE COMPOSANT DETAILS TâCHE
// ----------------------------------------------------
/**
 * On reçoit "mesTaches" (le tableau global) depuis App.jsx via les Props.
 */
function DetailsTache ({mesTaches}) {
    // useParams() extrait les variables de l'URL.
    // Récupère le paramètre "index": correspond au nom dans la route : path="/DetailsTache/:index" dans app.jsx
    const {index} = useParams();

    // Récupérer le paramètre "index" dans l'URL pour pointer vers la bonne case du tableau.
    // laTache contient l'objet complet {id, title, description, statut}.
    const laTache = mesTaches[index];

    return (
        <div>
            <h1>Détail de la tâche</h1>
                    {/* Propriétés de l'objet avec un point */}
                    <p>Titre : {laTache.title}</p>
                    <p>Description : {laTache.description}</p>
                    <p>Statut : {laTache.statut}</p>
                    <p>ID : {laTache.id}</p>
        </div>
    );
}
export default DetailsTache;


