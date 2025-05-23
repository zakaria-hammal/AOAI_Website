# Structure du Site Web du Club

## Pages Principales
1. **Accueil** (`/`)
   - Hero section avec slogan et appel à l'action
   - Présentation du club
   - Événements à venir
   - Témoignages de membres

2. **À Propos** (`/about`)
   - Histoire du club
   - Mission et valeurs
   - Équipe dirigeante
   - FAQ

3. **Événements** (`/events`)
   - Liste des événements à venir
   - Calendrier
   - Archives des événements passés
   - Formulaire d'inscription aux événements

4. **Blog** (`/blog`)
   - Articles récents
   - Catégories
   - Recherche
   - Page d'article individuel (`/blog/[slug]`)

5. **Galerie** (`/gallery`)
   - Photos des événements
   - Vidéos
   - Projets des membres

6. **Contact** (`/contact`)
   - Formulaire de contact
   - Informations de contact
   - Carte/localisation
   - Réseaux sociaux

7. **Adhésion** (`/membership`)
   - Avantages
   - Tarifs
   - Formulaire d'adhésion

## Composants Partagés
1. **Layout**
   - Header avec navigation
   - Footer avec liens et copyright
   - SEO et métadonnées

2. **UI Components**
   - Boutons
   - Cartes
   - Formulaires
   - Modales
   - Alertes
   - Badges

3. **Sections Réutilisables**
   - Hero section
   - Grille d'événements
   - Liste d'articles
   - Galerie d'images
   - Témoignages
   - Newsletter signup

## Structure des Dossiers
```
club-website/
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── app/
│   │   ├── page.tsx (Accueil)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── events/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── membership/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ...
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── EventGrid.tsx
│   │       └── ...
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   └── data/
│       ├── events.ts
│       ├── blog-posts.ts
│       └── team.ts
└── ...
```

Cette structure suit les meilleures pratiques de Next.js 14+ avec le App Router, en organisant clairement les pages, composants et données statiques pour un site de club entièrement frontend.
