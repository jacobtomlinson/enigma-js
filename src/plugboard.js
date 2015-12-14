module.exports = {
  shift: function(plug_settings, letter, direction){
    new_letter = false
    for (i = 0; i < plug_settings.length; ++i) {
      if (letter == plug_settings[i].charAt(direction ? 0 : 1)){
        new_letter = plug_settings[i].charAt(direction ? 1 : 0)
      }
    }
    return new_letter || letter
  }
}
