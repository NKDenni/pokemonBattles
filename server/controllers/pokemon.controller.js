const Pokemon = require('../models/pokemon.model');

module.exports = {

    createPokemon: (req, res) => {
        const { name, base_experience, height, weight, hp, attack, defense, special_defense, speed, sprites } = req.body;
        Pokemon.create({
            name,
            base_experience,
            height,
            weight,
            hp,
            attack,
            defense,
            special_defense,
            speed,
            sprites
        })
        .then(pokemon => res.json(pokemon))
        .catch(err => res.json(err));
    },
    getAllPokemons: (req, res) => {
        Pokemon.find({})
            .then(pokemons => res.json(pokemons))
            .catch(err => console.log(err));
        },
    getPokemonByID: (req, res) => {
        Pokemon.findOne({ _id: req.params.id })
            .then(pokemon => res.json(pokemon))
            .catch(err => res.json(err));
    },
    updatePokemonByID: (req, res) => {
        Pokemon.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true,  runValidators: true, context: 'query' })
            .then(updatedPokemon => res.json(updatedPokemon))
            .catch( err => res.json(err));
    },
    deletePokemonByID: (req, res) => {
        Pokemon.deleteOne({ _id: req.params.id })
            .then(deleteConfirmed => res.json(deleteConfirmed))
            .catch( err => res.json(err));
    }
}