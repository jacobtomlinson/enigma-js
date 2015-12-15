const iterator = require('./src/iterator')
const plugboard = require('./src/plugboard')
const rotor = require('./src/rotor')
const config = require('./src/config.js')

module.exports = {
  settings: {},

  load: function(settings) {
    // TODO Sanity check the settings
    this.settings = settings
  },

  process: function(input_string) {
    // String in
    input_string=input_string.replace(/ /g,'')

    output_string = ""
    chars = 0

    for (var i = 0, len = input_string.length; i < len; i++) {
      if ( config.valid_input.indexOf(input_string[i]) == -1 ) {
        throw new Error("Invalid character '" + input_string[i] + "' found in mesage '" + input_string + "'")
      }
      output_string += this.process_letter(input_string[i])
      chars++
      if (chars % this.settings.spacing == 0){
        output_string += " "
      }
    }

    return output_string
  },

  process_letter: function(letter) {

    // Letter in
    // TODO Test for a valid single letter

    // Iterate machine
    this.settings = iterator.iterate(this.settings)

    // Plugboard
    letter = plugboard.shift(this.settings.plugboard, letter, true)

    // Rotor 1
    letter = rotor.shift(this.settings, 1, letter, true)

    // Rotor 2
    letter = rotor.shift(this.settings, 2, letter, true)

    // Rotor 3
    letter = rotor.shift(this.settings, 3, letter, true)

    // Reflector
    letter = rotor.reflect(this.settings, letter)

    // Rotor 3
    letter = rotor.shift(this.settings, 3, letter, false)

    // Rotor 2
    letter = rotor.shift(this.settings, 2, letter, false)

    // Rotor 1
    letter = rotor.shift(this.settings, 1, letter, false)

    // Plugboard
    letter = plugboard.shift(this.settings.plugboard, letter, false)

    // Letter out
    return letter

  }

}
