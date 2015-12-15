const config = require('./config.js')

module.exports = {
  iterate: function(settings) {

    // Shift rotor 1
    settings.rotors[0].position = this.increment_rotor(settings.rotors[0].position)

    // Shift rotor 2
    if (config.rotors[settings.rotors[0].type].step.indexOf(settings.rotors[0].position) > -1 ) {
      settings.rotors[1].position = this.increment_rotor(settings.rotors[1].position)
    }
    
    // Shift rotor 3
    if (config.rotors[settings.rotors[1].type].step.indexOf(settings.rotors[1].position) > -1 ) {
      settings.rotors[2].position = this.increment_rotor(settings.rotors[2].position)
    }

    return settings
  },

  increment_rotor: function(letter){
    if (letter == 'Z') {
      letter = 'A'
    } else {
      var pos = letter.charCodeAt(0) - 65
      pos++
      letter = String.fromCharCode(65 + pos)
    }
    return letter
  }
}
