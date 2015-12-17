# Enigma [![Build Status](https://travis-ci.org/jacobtomlinson/enigma-js.svg)](https://travis-ci.org/jacobtomlinson/enigma-js)

An enigma machine emulator.

Build using the specification at http://www.codesandciphers.org.uk/enigma/index.htm.

Currently implements an M3 enigma machine using rotors I, II, III, IV and V.

## Install

```bash
npm install enigma-js
```

## Usage

```JavaScript
var enigma = require('enigma-js')

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

// Outputs "XKAC BBMT BF"
```

## Contibuting

### Testing

```bash
npm install --dev
gulp test
```
