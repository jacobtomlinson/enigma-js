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

describe('Encrypt', function() {

  // All test strings have been generated using http://enigma.louisedade.co.uk/enigma.html

  describe('Message Types', function() {

    it("should encrypt 'HELLOWORLD' with default setting", function () {
      var new_settings = JSON.parse(JSON.stringify(default_settings))
      enigma.load(new_settings)
      assert.equal(enigma.process('HELLOWORLD'), 'XKACBBMTBF')
    })

    it("should encrypt 'TESTTESTTESTTEST' with default settings", function () {
      var new_settings = JSON.parse(JSON.stringify(default_settings))
      enigma.load(new_settings)
      assert.equal(enigma.process('TESTTESTTESTTEST'), 'OKPEXQVRGQJFNCFW')
    })

    it("should encrypt 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ' with default settings", function () {
      var new_settings = JSON.parse(JSON.stringify(default_settings))
      enigma.load(new_settings)
      assert.equal(enigma.process('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'BCJAHNTLJWBRXSNAXORSTNDEMFCGNUNYNTWSQYPBJDKDZFJUCSIU')
    })

  })

  describe('M3 Rotors', function() {

    it("should encrypt 'HELLOWORLD' with rotors I, II and IV", function () {
      var new_settings = JSON.parse(JSON.stringify(default_settings))
      new_settings.rotors[0].type = "IV"
      enigma.load(new_settings)
      assert.equal(enigma.process('HELLOWORLD'), 'NFGSZVMIJQ')
    })

    it("should encrypt 'HELLOWORLD' with rotors I, II and V", function () {
      var new_settings = JSON.parse(JSON.stringify(default_settings))
      new_settings.rotors[0].type = "V"
      enigma.load(new_settings)
      assert.equal(enigma.process('HELLOWORLD'), 'UBHPIMPKFW')
    })

    it("should encrypt 'HELLOWORLD' with rotors I, IV and V", function () {
      var new_settings = JSON.parse(JSON.stringify(default_settings))
      new_settings.rotors[0].type = "V"
      new_settings.rotors[1].type = "IV"
      enigma.load(new_settings)
      assert.equal(enigma.process('HELLOWORLD'), 'OZHADGADIO')
    })

  })

  describe('M4 Rotors', function() {

    it("should encrypt 'HELLOWORLD' with rotors I, II, III and β", function () {
      var new_settings = JSON.parse(JSON.stringify(default_settings))
      new_settings.rotors.push(
        {type: "β", ring: 0, position: "A"}
      )
      new_settings.reflector = "B Dünn"
      enigma.load(new_settings)
      assert.equal(enigma.process('HELLOWORLD'), 'YQORPUNEAY')
    })

    it("should fail to encrypt with a standard rotor in fourth position", function () {
      var new_settings = JSON.parse(JSON.stringify(default_settings))

      new_settings.rotors.push(
        {type: "I", ring: 0, position: "A"}
      )
      new_settings.reflector = "B Dünn"

      enigma.load(new_settings)

      assert.throws(function(){enigma.process('HELLOWORLD')}, Error);
    })

    it("should fail to encrypt with a non-standard rotor in positions 1-3", function () {
      var new_settings = JSON.parse(JSON.stringify(default_settings))
      new_settings.rotors[0].type = "β"
      enigma.load(new_settings)

      assert.throws(function(){enigma.process('HELLOWORLD')}, Error);
    })

    it("should fail to encrypt with standard reflector in a four rotor machine", function () {
      var new_settings = JSON.parse(JSON.stringify(default_settings))
      new_settings.rotors.push(
        {type: "β", ring: 0, position: "A"}
      )
      enigma.load(new_settings)

      assert.throws(function(){enigma.process('HELLOWORLD')}, Error);
    })

    it("should fail to encrypt with non-standard reflector in a three rotor machine", function () {
      var new_settings = JSON.parse(JSON.stringify(default_settings))
      new_settings.reflector = "B Dünn"
      enigma.load(new_settings)

      assert.throws(function(){enigma.process('HELLOWORLD')}, Error);
    })

  })

})
