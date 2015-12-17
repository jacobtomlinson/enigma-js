var assert = require('assert')
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
  spacing: 0
}

describe('Encrypt and Decrypt', function() {

  it("should encrypt 'HELLOWORLD' with default setting and decrypt back to 'HELLOWORLD'", function () {
    var original = 'HELLOWORLD'

    enigma.load(JSON.parse(JSON.stringify(default_settings)))
    var encrypted = enigma.process(original)

    enigma.load(JSON.parse(JSON.stringify(default_settings)))
    var decrypted = enigma.process(encrypted)

    assert.equal(original, decrypted)
  })

  it("should encrypt 'HELLOWORLD' with rotors I, II and IV and decrypt back to 'HELLOWORLD'", function () {
    var original = 'HELLOWORLD'

    var new_settings = JSON.parse(JSON.stringify(default_settings))
    new_settings.rotors[0].type = "IV"

    enigma.load(JSON.parse(JSON.stringify(new_settings)))
    var encrypted = enigma.process(original)

    enigma.load(JSON.parse(JSON.stringify(new_settings)))
    var decrypted = enigma.process(encrypted)

    assert.equal(original, decrypted)
  })

  it("should encrypt 'HELLOWORLD' with rotors I, II and V and decrypt back to 'HELLOWORLD'", function () {
    var original = 'HELLOWORLD'

    var new_settings = JSON.parse(JSON.stringify(default_settings))
    new_settings.rotors[0].type = "V"

    enigma.load(JSON.parse(JSON.stringify(new_settings)))
    var encrypted = enigma.process(original)

    enigma.load(JSON.parse(JSON.stringify(new_settings)))
    var decrypted = enigma.process(encrypted)

    assert.equal(original, decrypted)
  })

  it("should encrypt 'HELLOWORLD' with rotors I, V and II and decrypt back to 'HELLOWORLD'", function () {
    var original = 'HELLOWORLD'

    var new_settings = JSON.parse(JSON.stringify(default_settings))
    new_settings.rotors[0].type = "II"
    new_settings.rotors[1].type = "V"

    enigma.load(JSON.parse(JSON.stringify(new_settings)))
    var encrypted = enigma.process(original)

    enigma.load(JSON.parse(JSON.stringify(new_settings)))
    var decrypted = enigma.process(encrypted)

    assert.equal(original, decrypted)
  })

})
