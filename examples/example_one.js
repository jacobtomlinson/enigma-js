var enigma = require('../index.js')

var default_settings = {
  rotors: [
    {type: "III", ring: 0, position: "A"},
    {type: "II",  ring: 0, position: "A"},
    {type: "I",   ring: 0, position: "A"}
  ],
  plugboard: [
    "AB",
    "CD",
    "EF",
    "GH"
  ],
  reflector: "B",
  spacing: 0
}

var input_string = 'HELLOWORLD'
var test_output  = 'XKACBBMTBF' // Generated using a working enigma machine for comparison

console.log(input_string)

// Encrypt
enigma.load(JSON.parse(JSON.stringify(default_settings)))
encrypted_message = enigma.process(input_string)

console.log(encrypted_message + ' (' + test_output + ')')

// Decrypt
default_settings.spacing = 0
enigma.load(JSON.parse(JSON.stringify(default_settings)))
decrypted_message = enigma.process(encrypted_message.replace(/ /g,''))

console.log(decrypted_message + ' (' + input_string + ')')
