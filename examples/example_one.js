var enigma = require('../index.js')

enigma.settings = {
  rotors: [
    {type: "I", offset: 10, position: "A"},
    {type: "II", offset: 18, position: "A"},
    {type: "III", offset: 06, position: "A"}
  ],
  plugboard: [
    "AB",
    "CD",
    "EF",
    "GH"
  ],
  reflector: "A"
}

console.log(
  enigma.process('A')
)
