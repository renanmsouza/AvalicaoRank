const CharacterModel = require('../../model/Character');

class Character {

    async findCharacter(req, res) {
        const Model = new CharacterModel();
        const parametros = req.body;

        const pagesize = parametros.pagesize;
        const page = parametros.page;

        await Model.findCharacter(parametros)
            .then((results) => {
                res.status(200).json(results.slice( (page - 1) * pagesize, (page * pagesize)));        
                        
            })
            .catch((err) => {
                res.status(400).json(err);
            }) 
    }     
}

module.exports = Character;