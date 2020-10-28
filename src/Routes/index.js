const CharacterController = require('../controller/Character');

function Routes(app) {
    const Controller = new CharacterController();

    app.get('/character/find', function(req, res) {
        Controller.findCharacter(req, res);
    });
}

module.exports = Routes;