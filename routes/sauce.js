/*Import de Express*/
const express = require('express');

// Appel du router avec la méthode mise à disposition par Express
const router = express.Router();

// On associe les fonctions aux différentes routes, on importe le controller
const saucesCtrl = require('../controllers/sauce');

// Exportation du modèle userSchema
module.exports = router;