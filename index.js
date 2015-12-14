const iterator = require('./src/iterator')
const plugboard = require('./src/plugboard')
const rotor = require('./src/rotor')

module.exports = {
  settings: {},

  process: function(letter) {

    // Letter in
    // TODO Test for a single letter

    // Iterate machine
    this.settings = iterator.iterate(this.settings)

    // Plugboard
    letter = plugboard.shift(this.settings.plugboard, letter, true)

    // Rotor 1
    letter = rotor.shift(
                    this.settings.rotors[0].type,
                    this.settings.rotors[0].offset,
                    letter )

    // Rotor 2
    letter = rotor.shift(
                    this.settings.rotors[1].type,
                    this.settings.rotors[1].offset,
                    letter )

    // Rotor 3
    letter = rotor.shift(
                    this.settings.rotors[2].type,
                    this.settings.rotors[2].offset,
                    letter )

    // Reflector
    letter = rotor.reflect(
                    this.settings.reflector,
                    letter )

    // Rotor 3
    letter = rotor.shift(
                    this.settings.rotors[2].type,
                    this.settings.rotors[2].offset,
                    letter )

    // Rotor 2
    letter = rotor.shift(
                    this.settings.rotors[1].type,
                    this.settings.rotors[1].offset,
                    letter )

    // Rotor 1
    letter = rotor.shift(
                    this.settings.rotors[0].type,
                    this.settings.rotors[0].offset,
                    letter )

    // Plugboard
    letter = plugboard.shift(this.settings.plugboard, letter, false)

    // Letter out
    return letter

  }

}
