function takeANumber(arr, name){
  arr.push(name)
  return `Welcome, ${name}. You are number ${arr.length} in line.`
  
}

function nowServing(arr){
  if(arr.length > 0){
    var customer = arr.shift()
    return `Currently serving ${customer}.`;
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(arr){
  var currLine = []
  return (arr.length > 0) 
  ? {
    for(i = 0; i < arr.length; i++){
      currLine.push(`${i+1}. ${arr[i]}`)
    }
    
    `The line is currently: ${currLine.join(', ')}`
  }
  : return "The line is currently empty."
}