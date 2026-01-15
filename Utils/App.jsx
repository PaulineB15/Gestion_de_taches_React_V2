
import { useState } from 'react' // Importe le "Hook" useState pour créer des variables qui réagissent aux changements.
import reactLogo from '../src/assets/react.svg' // Importe l'image du logo React (pas utilisée ici, mais présente par défaut).
import viteLogo from '/vite.svg'
import Accueil from "../Pages/Accueil.jsx";
import AjoutTache from "../Components/AjoutTache.jsx"; // Importe le logo de Vite (l'outil qui fait tourner ton projet).
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom' // Importation des outils de "react-router-dom" pour gérer le changement de pages sans recharger le navigateur.
import Navigation from "../Components/Navigation.jsx";
import DetailsTache from "../Components/DetailsTache.jsx";


/* Composant principal qui active la gestion de l'historique de navigation du navigateur */
function App() {

    return (
    <BrowserRouter>
        <Navigation /> {/* On affiche la barre de navigation sur toutes les pages */}
        <Routes> {/* Le conteneur "Routes" va décider quel composant afficher selon l'URL (l'adresse) actuelle */}
            <Route path="/Accueil" element={<Accueil />} /> {/* Si l'URL est "/Accueil", on affiche le composant <Accueil /> */}
            <Route path="/AjoutTache" element={<AjoutTache />} />
            <Route path="/DetailsTache" element={<DetailsTache />} />
            <Route path="/DetailsTache/:index" element={<DetailsTache />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App // Exporte App pour que React puisse l'afficher dans le navigateur.
