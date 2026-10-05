# Portfolio — Matias Verguet--Bailly

Front-end statique en **Astro + Tailwind CSS**, réalisé à partir des maquettes fournies.

## Démarrer

Node.js 22.12+ (Node.js 24 recommandé).

```sh
npm ci
npm run dev
```

Ouvrir l’adresse indiquée dans le terminal (habituellement `http://localhost:4321`).

```sh
npm run check    # Vérification Astro et TypeScript
npm run build    # Génération statique dans dist/
npm run preview  # Aperçu du site généré
```

## Pages

- `/` : accueil, compétences, présentation et aperçu des projets.
- `/projets` : liste statique, filtrable par catégorie.
- `/about` : présentation, parcours, outils et méthode.
- `/contact` : coordonnées et formulaire ouvrant un email prérempli.

Pas de PocketBase, d’envoi de formulaire côté serveur ou de fiches projet individuelles pour cette première version. Les cartes ne comportent donc pas de liens vers des pages inexistantes. Aucun profil social n’est lié sans connaître son adresse exacte.

## Modifier le contenu

Les coordonnées, les dates de stage, les compétences et les projets se trouvent dans `src/data/portfolio.ts`. Les dates de stage proviennent de la maquette et doivent être actualisées avant publication. Les textes complémentaires des compétences et de la méthode sont une première proposition à relire.

Les styles partagés et responsive sont dans `src/styles/global.css`. Tailwind CSS est intégré via son plugin Vite ; ses classes utilitaires sont disponibles dans tous les composants. Les composants communs se trouvent dans `src/components/` et le document HTML dans `src/layouts/Layout.astro`.

## Assets

Le logo et l’avatar fournis sont dans `public/images/`. Les trois dossiers de projets sont provisoirement extraits de la maquette : remplacer ces images par des exports séparés permettra de supprimer le quadrillage incorporé. La page À propos réutilise l’avatar fourni en attendant l’export du portrait tramé et de la carte présents dans la maquette. Oswald est embarquée localement et sert de police condensée de substitution ; fournir la police originale permettra d’affiner la fidélité.

## Suite prévue

Brancher PocketBase sur les données de projets, ajouter les fiches détaillées puis un véritable service d’envoi pour le formulaire. Aucune clé secrète ne doit être placée dans les fichiers publics ou committée.
