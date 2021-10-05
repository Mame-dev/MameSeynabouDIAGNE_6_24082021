// Importation du package express
const express = require('express');

// Appel du router disponible par Express
const router = express.Router();

// Importation du package express
const userCtrl = require('../controllers/user');

// Ajout Utilisateur à la base de donnée à l'inscription
router.post('/signup', userCtrl.signup);

// Ajout Utilisateur à la base de donnée à la connexion
router.post('/login', userCtrl.login);

// Exportation du router
module.exports = router;