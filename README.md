# EG-PRO — Site vitrine

Site vitrine d'**EG-PRO**, société d'apport d'affaires et de mise en relation
dans l'univers des travaux, de la rénovation et de l'immobilier (Mulhouse &
Haut-Rhin). Fondateur : Eliott Guerreiro.

## Stack technique

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — thème piloté par variables CSS
- **Framer Motion** — animations & scroll « façon page produit Apple »
- **Lenis** — smooth scroll premium
- Curseur personnalisé animé, boutons magnétiques, slider avant/après, compteurs animés

## Démarrer en local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
npm start          # sert le build
```

## 🎨 Changer la couleur du site (ex : passer au vert)

**Un seul fichier à modifier** : `app/globals.css`, bloc `:root`.
Remplace les 5 variables `--brand-*` (format `R G B`, séparés par des espaces) :

```css
:root {
  --brand: 31 111 184;        /* couleur principale */
  --brand-bright: 42 138 214; /* accents / survol */
  --brand-dark: 15 63 110;    /* foncé */
  --brand-deep: 8 27 51;      /* fonds sombres */
  --brand-soft: 232 242 251;  /* fonds doux */
}
```

Tout le site (boutons, dégradés, fonds, curseur…) se met à jour automatiquement.
Pour comparer deux coloris, on peut garder chaque version sur une branche Git
dédiée (ex. `version-bleue`, `version-verte`).

## Structure

```
app/                  Pages (Accueil, Services, Investisseurs, Syndics,
                      Réalisations, À propos, Contact) + SEO (sitemap, robots)
components/           Composants UI & animations réutilisables
lib/site.ts           Tout le CONTENU du site (textes, services, FAQ, projets…)
public/images/        Images optimisées pour le web (logo, Eliott, projets)
_sources/             Fichiers sources originaux fournis par le client
```

## Éditer le contenu

Les textes, services, témoignages, FAQ et projets sont centralisés dans
**`lib/site.ts`** — pas besoin de toucher au code des pages pour les mettre à jour.

## Ajouter une réalisation

1. Dépose les images dans `public/images/projets/`
2. Ajoute une entrée dans le tableau `PROJECTS` de `lib/site.ts`
