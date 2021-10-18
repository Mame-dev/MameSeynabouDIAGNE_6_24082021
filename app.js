/*Import de Express*/
const express = require('express');

/*Création d'une application express*/
const app = express();

// Importation du package body-parser qui permet d'extraire l'objet JSON des requêtes POST
const bodyParser = require('body-parser');

// On importe la route dédiée aux sauces
const saucesRoutes = require('./routes/sauces');

// On importe la route dédiée aux users
const userRoutes = require('./routes/user');

// Importation du package mongoose pour se connecter à la data base mongo Db
const mongoose = require('mongoose');

const path = require('path');

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

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes dédiées aux sauces
app.use('/api/sauces', saucesRoutes);

// Routes dédiées aux users
app.use('/api/auth', userRoutes);

module.exports = app;