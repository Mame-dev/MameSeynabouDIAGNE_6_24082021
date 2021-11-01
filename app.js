/*Importation de Express*/
const express = require('express');

/*Création d'une application express*/
const app = express();

// Importation du package body-parser qui permet d'extraire l'objet JSON des requêtes POST
const bodyParser = require('body-parser');

// Importation du package Helmet vous aide à protéger votre application de certaines des vulnérabilités bien connues du Web en configurant de manière appropriée des en-têtes HTTP.
const helmet = require('helmet');

// On importe la route dédiée aux sauces
const saucesRoutes = require('./routes/sauces');

// On importe la route dédiée aux users
const userRoutes = require('./routes/user');

// Importation du package mongoose pour se connecter à la data base mongo Db
const mongoose = require('mongoose');

// Importation du package qui sert dans l'upload des images et permet de travailler avec les répertoires et chemin de fichier
const path = require('path');

//Import du package pour utiliser les variables d'environnement
const dotenv = require('dotenv')
const result = dotenv.config()

//* *****Connection à la base de données mongoDB***** *//
mongoose
    .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => res.status(401).json({
        error: new Error('Connexion à MongoDB échouée !!')
    }))
//.catch((error) => console.log('Connexion à MongoDB échouée !' + error));

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

// Middleware qui permet de transformer le corp de la requête en un objet JSON utilisable
app.use(bodyParser.json());

// Helmet aide à protéger de certaines des vulnérabilités bien connues du Web en configurant de manière appropriée des en-têtes HTTP.
app.use(helmet());

// Midleware qui permet de charger les fichiers qui sont dans le repertoire images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes dédiées aux sauces
app.use('/api/sauces', saucesRoutes);

// Routes dédiées aux users
app.use('/api/auth', userRoutes);

// Exportation de app.js pour pouvoir y accéder depuis un autre fichier
module.exports = app;