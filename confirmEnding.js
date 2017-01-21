
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var lastLetter = str.substring(str.length - 1);
  var lastLetterTarget = target.substring(str.length - 1);
  if (lastLetter == lastLetterTarget) {
      return true;
      }
  return false;
}

confirmEnding("Open sesame", "n");
