module.exports = {
  rotors: {
    "I"     : { map: "EKMFLGDQVZNTOWYHXUSPAIBRCJ", step: "R"},
    "II"    : { map: "AJDKSIRUXBLHWTMCQGZNPYFVOE", step: "F"},
    "III"   : { map: "BDFHJLCPRTXVZNYEIWGAKMUSQO", step: "W"},
    "IV"    : { map: "ESOVPZJAYQUIRHXLNFTGKDCMWB", step: "K"},
    "V"     : { map: "VZBRGITYUPSDNHLXAWMJQOFECK", step: "A"},
    "VI"    : { map: "JPGVOUMFYQBENHZRDKASXLICTW", step: "AN"},
    "VII"   : { map: "NZJHGRCXMYSWBOUFAIVLPEKQDT", step: "AN"},
    "VIII"  : { map: "FKQHTLXOCBJSPDZRAMEWNIUYGV", step: "AN"},
    "β"     : { map: "LEYJVCNIXWPBQMDRTAKZGFUHOS", step: ""},
    "γ"     : { map: "FSOKANUERHMBTIYCWLQPZXVGJD", step: ""}
  },

  reflectors: {
    "B":	['AY', 'BR', 'CU', 'DH', 'EQ', 'FS', 'GL', 'IP', 'JX', 'KN', 'MO', 'TZ', 'VW'],
    "C":	['AF', 'BV', 'CP', 'DJ', 'EI', 'GO', 'HY', 'KR', 'LZ', 'MX', 'NW', 'TQ', 'SU'],
    "B Dünn":	['AE', 'BN', 'CK', 'DQ', 'FU', 'GY', 'HW', 'IJ', 'LO', 'MP', 'RX', 'SZ', 'TV'],
    "C Dünn":	['AR', 'BD', 'CO', 'EJ', 'FN', 'GT', 'HK', 'IV', 'LM', 'PW', 'QZ', 'SX', 'UY']
  },

  valid_input: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
