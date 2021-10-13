const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    name: { 
        type: String, 
        validate: {
            validator: async function(name) {
              if (this instanceof mongoose.Query){
                var pokemon = await this.model.findOne({ name });      //If this is from an update/PUT query, then just return true
                return true;
              } else{
                var pokemon = await this.constructor.findOne({ name });  // else this was a POST query
              }
              if(pokemon) {
                if(this.values !== pokemon.values) {
                  return true;
                }
                return false;
              }
              return true;
            },
            message: props => 'The specified pokemon name already exist.'
          },
        required: [true, 'Pokemon name is required'], 
        minlength: [3, 'The pokemon name must be at least 3 characters long. Got {VALUE} characters instead.']
    },
    base_experience: { type: Number, required: [true, 'base_experience is required.'], min: [1, 'The base_experience must be at least 1. Got {VALUE}.']
    },
    height: { type: Number, required: [true, 'height is required.'], min: [1, 'The height must be at least 1. Got {VALUE}.']
    },
    weight: { type: Number, required: [true, 'weight is required.'], min: [1, 'The weight must be at least 1. Got {VALUE}.']
    },
    hp: { type: Number, required: [true, 'hp is required.'], min: [1, 'The hp must be at least 1. Got {VALUE}.']
    },
    attack: { type: Number, required: [true, 'attack is required.'], min: [1, 'The attack must be at least 1. Got {VALUE}.']
    },
    defense: { type: Number, required: [true, 'defense is required.'], min: [1, 'The defense must be at least 1. Got {VALUE}.']
    },
    special_defense: { type: Number, required: [true, 'special_defense is required.'], min: [1, 'The special_defense must be at least 1. Got {VALUE}.']
    },
    speed: { type: Number, required: [true, 'speed is required.'], min: [1, 'The speed must be at least 1. Got {VALUE}.']
    },
    sprites: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Pokemon', PokemonSchema);