const PokemonController = require('../controllers/pokemon.controller');

module.exports = function(app) {
    app.post('/api/new', PokemonController.createPokemon);
    app.get('/api/pokemons', PokemonController.getAllPokemons);
    app.get('/api/pokemon/:id', PokemonController.getPokemonByID);
    app.put('/api/pokemon/:id', PokemonController.updatePokemonByID);
    app.delete('/api/pokemon/:id', PokemonController.deletePokemonByID);
}