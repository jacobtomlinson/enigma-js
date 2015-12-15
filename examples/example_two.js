var enigma = require('../index.js')

var default_settings = {
  rotors: [
    {type: "III", ring: 0, position: "A"}, // Right
    {type: "II",  ring: 0, position: "A"}, // Middle
    {type: "I",   ring: 0, position: "A"}  // Left
  ],
  plugboard: [
    "AB",
    "CD",
    "EF",
    "GH"
  ],
  reflector: "B",
  spacing: 4
}

enigma.load(default_settings)

console.log(
  enigma.process('HELLOWORLD')
)
