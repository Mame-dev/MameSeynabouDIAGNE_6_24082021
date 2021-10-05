// Importation du package mongoose
const mongoose = require('mongoose');

// Exportation de uniqueValidator
const uniqueValidator = require('mongoose-unique-validator');

// Création d'un schema mongoose pour l'utilisateur
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Package pour un email unique
userSchema.plugin(uniqueValidator);

// Exportation du modèle userSchema
module.exports = mongoose.model('user', userSchema);