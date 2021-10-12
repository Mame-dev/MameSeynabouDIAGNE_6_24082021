/*Import de Express pour le router*/
const express = require('express');

// Appel du router avec la méthode mise à disposition par Express
const router = express.Router();

// On associe les fonctions aux différentes routes, on importe le controller
const sauceCtrl = require('../controllers/sauce');

router.post('/', sauceCtrl.createSauce);

router.put('/:id', );

router.delete('/:id', );

router.get('/:id', );

router.get('/');

// Exportation du modèle userSchema
module.exports = router;