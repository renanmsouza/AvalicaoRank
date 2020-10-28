const axios = require('axios');
const querystring = require('querystring');

class Character {
    findCharacter(parametros) {
        return new Promise(async (resolve, reject) => {
            const url = 'https://rickandmortyapi.com/api/character/?' + querystring.stringify(parametros);
        
            try {
                const result = await axios.get(url);
                resolve(result.data.results);
            }
            catch(e) {
                reject(e);
            }
        })              
    }
}

module.exports = Character;