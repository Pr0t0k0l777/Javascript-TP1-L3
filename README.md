# Compte-Rendu TP – Technologie du Web (JavaScript)

## Auteur
- Nom : Lebeau 
- Prénom : Evan
- Module : Technologie du Web  
- Enseignant : Robert Tomczak  
- Année universitaire : 2025-2026  

---

## Structure du projet :  

├── index.html
├── style.css
├── script.js
├── images/
└── README.md

---

## Introduction
Dans ce TP, l’objectif était de se familiariser avec **JavaScript** et la manipulation du **DOM** pour créer des pages web interactives.  
Le projet se divise en deux grandes parties :  
- un **convertisseur de devises** (euros ↔ dollars US et australiens),  
- un ensemble de **formulaires interactifs** permettant de tester différents comportements côté client.  

Tout a été réalisé en **JavaScript pur**, avec une base en HTML et CSS, sans utiliser de frameworks externes.  
Cela a permis de mettre en pratique les notions vues en cours et de mieux comprendre comment JavaScript peut rendre une page web dynamique et réactive.

---

## Fonctionnalités développées

### Convertisseur de devises
- **Version avec bouton** : l’utilisateur entre un montant en euros et, en cliquant sur "Convertir", obtient l’équivalent en USD et AUD.  
- **Version automatique** : dès qu’un champ est modifié, les autres sont recalculés instantanément.  
  - Pour éviter les boucles infinies, chaque fonction ne met à jour que les champs nécessaires.  

### Formulaires et interactions
- **Validation Oui/Non** : si la saisie est incorrecte, un message apparaît.  
- **Gestion du volume** : ajout d’une case "Mute" qui désactive ou réactive le slider du volume.  
- **Sélection de date** : la date choisie est affichée dans la console.  
- **Barres de progression** : deux barres qui avancent automatiquement de 5 % par seconde et se réinitialisent une fois pleines.  
- **Ajout dynamique** : insertion d’une image (logo UPHF) et modification du lien Wikipédia en version française.  

---

## Difficultés rencontrées et solutions
- **Champs vides dans le convertisseur** : renvoyaient `NaN` → solution : utiliser `parseFloat() || 0`.  
- **Conversions automatiques en boucle** → découpage du code en fonctions ciblées pour éviter les recalculs inutiles.  
- **Gestion des labels et sliders** : utilisation de `nextSibling` et gestion des événements `input` / `change`.  
- **Progression continue des barres** : usage de `setInterval` et remise à zéro conditionnelle.  
- **Affichage des sections au démarrage** : tout est caché par défaut avec `display = "none"`, puis affiché selon les choix de l’utilisateur.  

---

## Commentaires personnels
Globalement, le TP s’est bien passé : toutes les fonctionnalités principales ont été implémentées et fonctionnent correctement.  
Ce que je pourrais améliorer :  
- rendre le convertisseur plus robuste (meilleure gestion des erreurs),  
- soigner davantage le CSS et l’aspect visuel,  
- ajouter plus de commentaires dans le code pour clarifier la logique.  

Ce TP m’a surtout appris à manipuler le DOM, gérer les événements et structurer mon code pour éviter les pièges classiques (boucles, erreurs d’input, etc.).

---

## Auto-évaluation
Je pense avoir respecté les consignes et bien structuré mon travail. Le code est fonctionnel et les objectifs sont atteints.  
Pour les prochains projets, je veux :  
- rendre mon code plus modulaire,  
- intégrer plus de tests avant de finaliser,  
- accorder plus de temps à la mise en forme visuelle avec le CSS.  
---

## Installation et exécution
1. Cloner le dépôt :
   ```bash
   git clone https://github.com/Pr0t0k0l777/Javascript-TP1-L3
   

