var enigma = require('../index.js')

var default_settings = {
  rotors: [
    {type: "VIII", ring: 13, position: "V"},
    {type: "VI",  ring: 08, position: "Z"},
    {type: "III",   ring: 01, position: "U"}
  ],
  plugboard: [
    "AN",
    "EZ",
    "HK",
    "IJ",
    "LR",
    "MQ",
    "OT",
    "PV",
    "SW",
    "UX"
  ],
  reflector: "B",
  spacing: 4
}

enigma.load(default_settings)

console.log(
  enigma.process('YKAE NZAP MSCH ZBFO CUVM RMDP YCOF HADZ IZME FXTH FLOL PZLF GGBO TGOX GRET DWTJ IQHL MXVJ WKZU ASTR')
)
