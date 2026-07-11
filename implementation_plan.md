# Redesign de la section Home

## Objectif
Moderniser entièrement la section d’accueil du site **LG La Base – Groupe Scout Loulendo Gabriel** tout en conservant la palette de couleurs (vert, orange, blanc, noir) et en offrant une expérience premium, fluide et responsive.

## Étapes principales

1. **Configuration Tailwind**
   - Ajouter les couleurs personnalisées (forest‑green, light‑green, scout‑orange, off‑white, light‑gray, soft‑black) dans `tailwind.config.js`.
   - Ajouter la police `Inter` (ou `Poppins`) via `@import` ou `@fontsource`.
   - Activer les nouvelles ombres (`shadow-lg`, `shadow-xl`), le backdrop‑blur et les gradients.

2. **Remplacement des emojis**
   - Installer `lucide-react` (`npm i lucide-react`).
   - Importer les icônes correspondantes : `Heart`, `Users`, `Calendar`, `Award`, `Globe`, `Leaf`, `Check`, etc.
   - Remplacer chaque occurrence d’un emoji dans `Home.jsx` (et autres fichiers si besoin) par l’icône importée.
   - Encadrer chaque icône d’un cercle avec un petit dégradé et une ombre douce.

3. **Refactorisation des « chips » de valeurs**
   - Créer un nouveau composant `ValueChip.jsx` qui reçoit `label`, `icon`, `color`.
   - Styles : `rounded-full`, `border border-white/20`, `bg-gradient-to-r`, `backdrop-blur-sm`, `shadow-md`.
   - Animations : `whileHover={{ scale:1.05 }}`, `whileTap={{ scale:0.95 }}`.
   - Gérer l’état actif via `useState` pour appliquer un style distinct (`border-2 border-white` + gradient plus fort).

4. **Refactorisation des cartes de valeurs**
   - Créer `ValueCard.jsx` :
     - Conteneur `rounded-xl shadow-lg p-6`.
     - Icône dans un cercle `bg-gradient-to-br from-green-600 to-green-500` avec taille 48‑64 px.
     - Titre, description.
     - Animations : `initial={{ opacity:0, y:20 }}` → `animate={{ opacity:1, y:0 }}` et `whileHover={{ y:-4, scale:1.03 }}`.
   - Utiliser ce composant dans la section « Valeurs » (remplacement du `FlipCard`).

5. **Mise à jour de la section Hero**
   - Conserver la bannière existante mais ajouter un `z-20` au conteneur et aux boutons (déjà fait).
   - Assurer que le logo‑marquee utilise un **masque de fondu** (`mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent)`) pour éviter la duplication.
   - Ajouter `pb-12 min-h-screen` déjà présent.

6. **Boutons d’appel à l’action**
   - Transformer les liens en **button‑like chips** avec les mêmes styles que les `ValueChip` (arrondis, gradient, glassmorphism).
   - Ajouter `whileHover` et `whileTap` via Framer Motion.
   - Garantir un `z-index` supérieur (`z-30`).

7. **Tests de responsivité**
   - Vérifier sur mobile (`sm:`), tablette (`md:`) et desktop (`lg:`) que les chips, cartes et le hero restent correctement alignés.
   - Ajuster les `gap`, `px`, `py` si besoin.

8. **Vérification et build**
   - Lancer `npm run dev` pour vérifier aucune erreur de compilation.
   - Inspecter les animations et l’accessibilité (contraste, focus). 
   - Commiter les modifications et pousser sur le repo.

## Artefacts à créer / modifier
- `tailwind.config.js` (ajout des couleurs & fonts).
- `src/pages/Home.jsx` (mise à jour du layout, import des icônes, utilisation des nouveaux composants).
- `src/components/ValueChip.jsx`.
- `src/components/ValueCard.jsx`.
- `src/assets/` (pas de changement d’image)
- `package.json` (ajout de `lucide-react`).

## Vérification
- Aucun composant ne doit chevaucher les prochains sections (margin‑bottom sur le Hero).
- Tous les boutons doivent être entièrement cliquables.
- Les icônes doivent être cohérentes et de la même taille.
- Les animations doivent durer entre 0.3 s et 0.5 s.
- Le site doit rester fonctionnel (routes, navigation).
