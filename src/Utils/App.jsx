
// ----------------------------------------------------
// 1. LES IMPORTATIONS
// ----------------------------------------------------
import { useState } from 'react' // Importe le "Hook" useState pour créer des variables qui réagissent aux changements.
import Accueil from "../Pages/Accueil.jsx"; // Importe la page Accueil qui affiche la liste
import AjoutTache from "../Components/AjoutTache.jsx"; // Importe le composant contenant le formulaire d'ajout.
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Importation des outils de "react-router-dom" pour gérer le changement de pages sans recharger le navigateur.
import Navigation from "../Components/Navigation.jsx"; // Importe la barre de navigation (Navbar)
import DetailsTache from "../Components/DetailsTache.jsx"; // Importe la page affichant les détails d'une tâche
import Notfound from "../Pages/Page404.jsx"; // Importe la page 404


// ----------------------------------------------------
// 2. LE COMPOSANT PRINCIPAL (LE CERVEAU DE L'APP)
// ----------------------------------------------------

function App() {

    // Déclare un tableau "TacheAjouter" pour stocker la liste de toutes les tâches créées.
    const [TacheAjouter, setTacheAjouter] = useState([]);

    // Fonction de suppression - Elle prend l'index de la tâche et met à jour le tableau en filtrant l'élément
    const supprimerTache = (indexASupprimer) => {
        setTacheAjouter(TacheAjouter.filter((_, index) => index !== indexASupprimer));
    };


    // ----------------------------------------------------
    // 3. LE RENDU ET LE ROUTAGE
    // ----------------------------------------------------

    return (
        /* BrowserRouter active la surveillance de l'URL dans tout le navigateur */
    <BrowserRouter>
        <Navigation /> {/* On affiche la barre de navigation sur toutes les pages */}
        <Routes> {/* Le conteneur "Routes" va décider quel composant afficher selon l'URL (l'adresse) actuelle */}
            {/* Route Accueil : on lui passe le tableau de tâches et la fonction de suppression via les Props */}
            <Route path="/Accueil" element={<Accueil mesTaches={TacheAjouter} onSupprime={supprimerTache}/>} />
            {/* Route Ajout : on lui passe uniquement la fonction de mise à jour du tableau */}
            <Route path="/AjoutTache" element={<AjoutTache mesTachesAjouter={setTacheAjouter} />} />
            {/* Route Détails : utilise un paramètre dynamique ":index" pour identifier la tâche sélectionnée */}
            <Route path="/DetailsTache/:index" element={<DetailsTache mesTaches={TacheAjouter} />} />
            {/* Route 404 : le chemin "*" attrape toutes les URLs qui ne correspondent à aucune route ci-dessus */}
            <Route path="*" element={<Notfound />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App // Exporte App pour que React puisse l'afficher dans le navigateur.
