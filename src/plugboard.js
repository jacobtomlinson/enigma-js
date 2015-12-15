module.exports = {
  shift: function(plug_settings, letter, direction){
    var new_letter = false
    for (i = 0; i < plug_settings.length; ++i) {
      if (letter == plug_settings[i].charAt(0)){
        new_letter = plug_settings[i].charAt(1)
      } else if (letter == plug_settings[i].charAt(1)) {
        new_letter = plug_settings[i].charAt(0)
      }
    }

    return new_letter || letter
  }
}
