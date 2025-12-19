---
sidebar_position: 13
title: Workflow
slug: /workflow
---

Cette page concerne le workflow de réalisation du service.

# Stratégie et mise en place des fondations : 24h

## 1. Qualification : j0 : 15mn

Le client remplit le formulaire de qualification (c.f. formulaire de qualification) en 15mn.

- n8n décline le projet si le client ne correspond pas aux critères de qualification.
- n8n envoie un email de confirmation de la qualification au client au client et à nous "Good Vibe Coding".

## 2. Prise de RDV : j0 : 15mn

Si confirmation, on doit planifier un rdv avec le client dans l'heure.
n8n peut également déjà pouvoir suggérer des choses à faire, et déjà un premier CRD, qu'on lira pour préparer la maquette.

```texte title="Prompt"
Tu es un product manager senior avec 15 ans d'expérience spécialisé dans le domaine [domaine du projet].

Un acteur du domaine a besoin d'une application web pour [ce qu'il veut].

Il m'a donné ces informations :

[les informations]

Dis-moi tout ce que tu sais sur le domaine, et pose moi des questions pour t'assurer que tu comprends bien le besoin, pour ensuite pouvoir écrire un CRD.
```

:::warning[Question]
Est-ce qu'on envoit ce pré-traitement au client pour l'effet waouh ?
:::

On l'appelle pour fixer un rdv d'1hr pour le contexte et maquette.

### 2 Contexte : 45mn (2h45)

Basé sur les informations de qualification, récolter un maximium d'informations sur le projet avant de saluer le client

## Maquettage : 15mn (3h)

Avec le client, maquettage avec [Stitch](https://stitch.withgoogle.com/) pour avoir les premières projections du client et premier effet waouh.

## 3. Étude et PRD : j0

Demander à Gemini un maximum d'information sur le domaine du projet

Prompt pour Gemini :

Tu es un expert en Product Management depuis 20 ans, spécialisé dans le domaine [domaine du projet].

Un acteur du domaine a besoin d'une application web pour [ce qu'il veut].

Il m'a donné ces informations :

[les informations]

Dis-moi tout ce que tu sais sur le domaine, et pose moi des questions pour t'assurer que tu comprends bien le besoin, pour ensuite pouvoir écrire un PRD.

## 5. Maquette : j0

Utiliser [Stitch](https://stitch.withgoogle.com/) pour créer une maquette de l'application web.

## 6. V0 : j0

Utiliser Antigravity en mode plan avec Gemini 3 (flash ou pro) ou Claude Sonnet 4.5 avec la maquette et le PRD pour créer une version 0 de l'application web.

Stack technique :

- supabase : tout ce dont on a besoin pour stocker les données et s'authentifier
- next.js : framework pour créer l'application web
- tailwindcss : css
- shadcn/ui : ui components
- framer-motion : animations
- Docker : containerization

## 7. Déploiement : j0

- Hostinger : hébergement (utiliser le code SHUBAMSHARMA pour avoir -10%)
- Dokploy : déploiement (alternative gratuite à Vercel qui peut être lié à github)
