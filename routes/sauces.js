/*Import de Express pour le router*/
const express = require('express');

// Appel du router avec la méthode mise à disposition par Express
const router = express.Router();

// Importation du middleware auth pour protéger les routes
const auth = require('../middleware/auth');

// Importation du middleware multer pour protéger les routes
const multer = require('../middleware/multer-config')

// On associe les fonctions aux différentes routes, on importe le controller
const sauceCtrl = require('../controllers/sauces');

router.get('/', auth, sauceCtrl.getAllSauce);

router.post('/', auth, multer, sauceCtrl.createSauce);

router.put('/:id', auth, multer, sauceCtrl.modifySauce);

router.delete('/:id', auth, sauceCtrl.deleteSauce);

router.post('/:id/like', auth, sauceCtrl.likeDislikeSauce);

router.get('/:id', auth, sauceCtrl.getOneSauce);

// Exportation du modèle userSchema
module.exports = router;