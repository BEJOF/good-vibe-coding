---
sidebar_position: 13
title: Workflow
slug: /workflow
---

Cette page concerne le workflow de réalisation du service.

# Stratégie et mise en place des fondations : 24h

## 1. Qualification : 15mn

Le client remplit le formulaire de qualification (c.f. formulaire de qualification) en 15mn.

Le formulaire rajoute une ligne dans un google sheet "formulaire" : https://docs.google.com/spreadsheets/d/1c1N5ZDBZinGqnMW9nq8GqF6xmiZnxaDkbXprYo1WPxE/edit?usp=sharing

Il contient les tabs "Acceptés" et "Déclinés".

n8n va traiter le formulaire :

- si décliné car le projet ne correspond pas aux critères de qualification, alors

    - le tab "Déclinés" du google sheet est mis à jour
    - un mail de refus est envoyé au client avec une proposition de modifier ses exigences pour bosser avec nous (via des suggestions).

- si accepté, alors

    - l'IA va identifier

        - des questions en préparation de l'entretien
        - un premier PRD ( qui contient des questions)
        - une ROADMAP (issue du PRD)
        - le temps de développement
        - le prix
        - des objections et des réponses

    - le tab "Acceptés" du google sheet est mis à jour avec les infos du formulaire et tout ce que l'IA a trouvé.
    - le client reçoit un mail de confirmation avec le lien vers l'agenda pour prendre rdv : https://cal.com/bejof/good-vibe-coding
    - nous recevons un mail de confirmation les infos du formulaire et les infos de l'IA plus le lien vers le google sheet
    - nous recevons un message sur slack avec les infos du formulaire et les infos de l'IA et un lien vers le google sheet
    - nous appellons le client ASAP pour faire connaissance et planifier un rdv s'il ne l'a pas déjà fait.

```texte title="Exemple de Prompt"
Tu es un product manager senior avec 15 ans d'expérience spécialisé dans le domaine [domaine du projet].

Un acteur du domaine a besoin d'une application web pour [ce qu'il veut].

Il m'a donné ces informations :

[les informations]

Dis-moi tout ce que tu sais sur le domaine, et pose moi des questions pour t'assurer que tu comprends bien le besoin, pour ensuite pouvoir écrire un CRD.
```

Tout est fait en 5mn pour un gros effet waouh sur la rapidité et le professionnalisme et la puissance de l'automatisation (lui montrer ce qu'on fait et qu'on l'utilise pour nous même).

Et l'appel est fait en moins d'une heure pour montrer la réactivité.

## 2 Entretien : 1hr

### 2.1 Prise d'informations : 45mn (2h45)

Basé sur les informations de qualification, récolter un maximium d'informations sur le projet.

Les questions doivent porter sur celles identifiées par l'IA lors de la qualification, plus d'autres au fil de la discussion.

Tout est noté sur ordinateur car ça sera réutilisé pour le maquettage.

### 2.2 Maquettage : 15mn (3h)

Avec le client,  maquettage avec [Stitch](https://stitch.withgoogle.com/) pour avoir les premières projections du client et premier effet waouh.

### 2.3 Closing : 15mn

- Explication du déroulé du développement
    - conditions de fonctionnement
    - support
    - feedbacks (TODO: à définir)
- résolution des objections
- envoie du contrat et attente de sa signature et de l'accompte.

Dès que le contrat est signé et que l'accompte est reçu, on passe à la suite !

## 3. Étude et PRD : 30mn

Demander à Gemini un maximum d'information sur le domaine du projet et définir un PRD.

```text title="Prompt pour Gemini"
Tu es un expert en Product Management depuis 20 ans, spécialisé dans le domaine [domaine du projet].

Un acteur du domaine a besoin d'une application web pour [ce qu'il veut].

Il m'a donné ces informations :

[les informations]

Dis-moi tout ce que tu sais sur le domaine, et pose moi des questions pour t'assurer que tu comprends bien le besoin, pour ensuite pouvoir écrire un PRD et une roadmap sous la forme d'issues github.
```

## 4. V0 : 30mn

Créer un repo github privé à partir du repo "template", ou d'un projet similaire et y mettre la Roadmap.

Utiliser Antigravity en mode plan avec Gemini 3 (flash ou pro) ou Claude Sonnet 4.5 avec la maquette et le PRD pour créer une version 0 de l'application web.

Stack technique :

- Github : repository
- supabase : tout ce dont on a besoin pour stocker les données et s'authentifier
- next.js : framework pour créer l'application web
- tailwindcss : css
- shadcn/ui : ui components
- framer-motion : animations
- Docker : containerization
- Jest : tests unitaires
- Cypress : tests fonctionnels
- opentelemetry : monitoring
- sentry : logging

Pusher le code sur github.

## 5. Déploiement : 30mn

- Hostinger : hébergement (utiliser le code SHUBAMSHARMA pour avoir -10%)
- Dokploy : déploiement (alternative gratuite à Vercel qui peut être lié à github)
- Rajouter une github action pour la CI/CD.

Une fois la solution déployée, on envoie un mail au client avec le lien vers l'application web.

# Construction intensive des fonctionnalités

- Se concentrer sur le MVP (ROADMAP), pas de nouvelles fonctionnalités, sinon, c'est une prestation supplémentaire.
- Faire une vidéo de présentation des avancements chaque jour et montrer la ROADMAP de 15mn.
- Proposer de prendre un feedback chaque jour à envoyer avant 10h le lendemain matin.

# Tests finaux, automatisations et mise en service.

- Faire une vidéo de présentation
- Préparer un contrat de support
- Appeler le client pour lui montrer l'outil et lui expliquer le contrat de support et s'il veut de l'automatisation ou un autre app

    - si support souhaité, envoie d'un contrat et attente de sa signature

- si le client paye la facture
    - livrer le code en priorité (.zip)
    - lui proposer du support (si oui, envoyer contrat et attente de signature pour démarrer)
    - lui proposer de l'hébergement (si nouveau choix, envoyer contrat et attente de signature pour démarrer et héberger sur une url de prod)
    - lui poser des questions sur son métier pour proposer des automatisations
    - demander un retour utilisateur

# Votre outil est prêt, vous pouvez l'utiliser