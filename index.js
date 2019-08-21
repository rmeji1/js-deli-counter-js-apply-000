var counter = 0 
function takeANumber(currentLineOfPeople){
  currentLineOfPeople.push( ++counter ) 
  return `Welcome. You are number ${counter}.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0 ) {
    return "There is nobody waiting to be served!"
  }
  
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(currentLineOfPeople){
  if (currentLineOfPeople.length === 0 ) {
    return "The line is currently empty."
  }
  
  var lineAsString = "The line is currently: "
  
  for (var k = 0 ; k < currentLineOfPeople.length - 1; k++){
    lineAsString += `${k + 1}. ${currentLineOfPeople[k]}, `
  }
  
  return lineAsString + `${currentLineOfPeople.length}. ${currentLineOfPeople.slice(-1)}`
}