var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array = array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}