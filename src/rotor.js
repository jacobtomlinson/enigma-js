const config = require('./config.js')

module.exports = {
  shift: function(settings, rotor, letter, direction){

    var rotor_map = config.rotors[settings.rotors[rotor - 1].type].map
    var new_letter = false

    var position_offset = settings.rotors[rotor - 1].position.charCodeAt(0) - 65
    var ring_offset = settings.rotors[rotor - 1].ring

    letter = this.letter_maths(letter, position_offset)
    letter = this.letter_maths(letter, ring_offset)

    if (direction) {
      var pos = letter.charCodeAt(0) - 65
      new_letter = rotor_map[pos]
    } else {
      var pos = rotor_map.indexOf(letter)
      new_letter = String.fromCharCode(65 + pos)
    }

    new_letter = this.letter_maths(new_letter, -position_offset)
    new_letter = this.letter_maths(new_letter, -ring_offset)

    return new_letter
  },

  reflect: function(settings, letter){
    var reflector_map = config.reflectors[settings.reflector]
    var new_letter = false

    for (i = 0; i < reflector_map.length; ++i) {
      if(reflector_map[i].charAt(0) == letter){
        new_letter = reflector_map[i].charAt(1)
      } else if (reflector_map[i].charAt(1) == letter) {
        new_letter = reflector_map[i].charAt(0)
      }
    }

    return new_letter
  },

  letter_maths: function(letter, number){
    l_num = letter.charCodeAt(0) - 65
    l_num += 26
    l_num += number
    l_num %= 26
    letter = String.fromCharCode(65 + l_num)
    return letter
  }
}
