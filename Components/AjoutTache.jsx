import {useState} from "react";
import {Link} from "react-router-dom";


function AjoutTache () {

    // Déclare une variable d'état "Tache" pour stocker le texte tapé dans l'input (vide au départ).
    const [Tache, setTache] = useState("");

    // Déclare un tableau "TacheAjouter" pour stocker la liste de toutes les tâches créées.
    const [TacheAjouter, setTacheAjouter] = useState([]);


    // La fonction qui s'exécute quand on clique sur "Ajouter"
    const CreateTasks = () => {

        /* const NouvelleTache = {
            id: Date.now(),
            title: Tache,
            description: "Description",
            statut: "A faire",
        }; */

        {/* Les 3 petits points sont les données d'avant et on rajoute de nouvelles données*/}
        setTacheAjouter([...TacheAjouter, Tache]); // On crée un nouveau tableau : [...ancienTableau, nouvelleDonnée] //Ajouter ce qui est écrit dans le champs de saisie
        setTache(""); // Vider le champs le saisie une fois cliquer sur ajouer
        SetNouvelleTache



    }


    // ----------------------------------------------------
// LE RENDU VISUEL - C'EST LA PARTIE "html"(JSX) DU COMPOSANT
// ----------------------------------------------------

    return (
        <div>

            <h1>Ajouter une tâche</h1>

            <input
                type="text"
                name="Saisir une tâche"
                placeholder="Ajouter une tâche"
                value={Tache} // Lie la valeur de l'input à la variable "Tache" (Binding)
                onChange={(e) => setTache(e.target.value)} // À chaque touche pressée, on met à jour "Tache"
            />

            <button onClick={CreateTasks}>Ajouter</button>

            <ul>
                {/* Parcours le tableau TacheAjouter pour créer un <li> pour chaque élément */}
                {TacheAjouter.map((Taches, index) => ( // Des qu'il y a .map, il faut ajouter 2 paramètres obligatoirement // Fonction fléchées

                    <li key={index}> {/* React a besoin d'une "key" unique pour chaque élément de liste */}
                        {Taches} {/* Affiche le nom de la tâche */}
                        {/*<Link to="/DetailsTache">Détails</Link>;*/}
                        <Link to={`/DetailsTache/${index}`}>Détails</Link>; {/* Lien vers la page de détails en passant l'index dans l'URL (ex: /DetailsTache/0) */}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default AjoutTache;