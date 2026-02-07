// ----------------------------------------------------
// 1. LES IMPORTATIONS
// ----------------------------------------------------
import { useState } from "react"; // Importe le Hook pour gérer l'état local du champ de saisie.
import { useNavigate } from "react-router-dom"; // Importe l'outil permettant de rediriger l'utilisateur vers une autre page.


// ----------------------------------------------------
// 2. LE COMPOSANT AJOUT TACHE
// ----------------------------------------------------
/**
 * Reçoit "mesTachesAjouter" (qui est la fonction setTacheAjouter de App.jsx).
 */
function AjoutTache ({mesTachesAjouter}) {
    // Initialisation du hook de navigation pour rediriger l'utilisateur après l'action.
    const navigate = useNavigate();
    // Déclare une variable d'état "Tache" pour stocker en temps réel le texte tapé dans l'input.
    const [Tache, setTache] = useState("");

    // Création d'un objet JavaScript structuré représentant la nouvelle tâche.
    const CreateTasks = () => {
        // On crée un objet pour le détail de la tâche
        const nouvelleTache = {
            id: Date.now(), // Utiliser l'heure pour créer un ID unique
            title: Tache,   // Texte tapé dans l'input
            description: "Description",
            statut: "A faire"
        };

        // Mise à jour de l'état global (dans App.jsx) :
        // Utilisation d'une fonction de rappel (callback) pour garantir qu'on ajoute l'objet
        // à la liste des "anciennesTaches" sans les écraser.
        mesTachesAjouter(anciennesTaches => [...anciennesTaches, nouvelleTache]);

        // une fois la tâche ajoutée:
        setTache(""); // On vide le champ de saisie (remise à zéro de l'input).
        navigate("/Accueil"); // Redirection automatique vers la page d'accueil pour voir la liste mise à jour.
    }


// ----------------------------------------------------
    // 3. LE RENDU VISUEL (JSX)
    // ----------------------------------------------------

    return (
        <div>

            <h1>Ajouter une tâche</h1>

            <input
                type="text"
                name="Saisir une tâche"
                placeholder="Ajouter une tâche"
                value={Tache} // Lie la valeur de l'input à la variable "Tache" (Binding)
                // Mise à jour l'état "Tache" à chaque fois que l'utilisateur tape un caractère.
                onChange={(e) => setTache(e.target.value)}
            />
            <button onClick={CreateTasks}>Ajouter</button>

        </div>
    );
}

export default AjoutTache;