//Vérification des tokens
const jwt = require('jsonwebtoken');

//Exportation de middleware
module.exports = (req, res, next) => {
    try {
        //Récupérer le token dans le headerAuthorization de la requête
        const token = req.headers.authorization.split(' ')[1];
        //Décoder le token avec la fonction "verify", 
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        //On récupère le userId de notre token
        const userId = decodedToken.userId;
        //Vérifier que le userId correspond a la requête
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};