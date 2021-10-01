/*Import de Express*/
const express = require('express');

/*Création d'une application express*/
const app = express();

// Importation du package mongoose pour se connecter à la data base mongo Db
const mongoose = require('mongoose');

//* *****Connection à la base de données mongoDB***** *//
mongoose
    .connect('mongodb+srv://mame-dev:ibPMTCMyFucQQtaQ@cluster0.pwnck.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

/*Ces headers permettent :
 * d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
 * d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
 * d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.)*/

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

/*DEBUT MIDDLEWARE */
app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({
        message: 'Votre requête a bien été reçue !'
    });
    next();
});

app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
});

/*FIN MIDDLEWARE*/

module.exports = app;