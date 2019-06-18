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
  ? `The line is currently: ${ arr.map( (x,i) => `${i}. ${x}`).join(', ') }`
  : "The line is currently empty."
}