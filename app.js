const digits = document.querySelectorAll('.digit')
const op = document.querySelectorAll('.op')
const display = document.querySelector('.display-area')
const sDelete = document.querySelector('.del')
const clear = document.querySelector('.ac')
const dot = document.querySelector('.num-dot')
// const add = document.querySelector('.num-add')
// const sub = document.querySelector('.num-sub')
// const div = document.querySelector('.num-div')
// const mul = document.querySelector('.num-mul')
const eq = document.querySelector('.num-eq')

let result = 0
let bufferStr = ''
let operand1 = 0
let operand2 = 0
let operator = ''
let displayData = ''

const clearDisplay = () => {
  display.innerText = ''
  result = 0
  bufferStr = ''
  operand1 = 0
  operand2 = 0
  operator = ''
  displayData = ''
}

const concatDisplay = () => {
  display.innerText = displayData
}

clear.addEventListener('click', clearDisplay)

digits.forEach( digit => {
  digit.addEventListener('click', (e) => {
    concatDisplay(e.target.value)
    putIntoBuffer(e.target.value)
    displayData += e.target.value
    concatDisplay()
  })  
})

op.forEach( operator => {
  operator.addEventListener('click', (e) => {
    operand = e.target.value
    if(operand1 === 0)
      operand1 = Number(bufferStr)
    bufferStr = ''
    displayData += e.target.value
    concatDisplay()
  })
})

eq.addEventListener('click', doOperation)

function doOperation(){
  operand2 = Number(bufferStr)
  bufferStr = ''
  switch (operator) {
    case '+':
      result = Number(operand1) + Number(operand2)
      break
    case '-':
      result = Number(operand1) - Number(operand2)
      break
    case '*':
      result = Number(operand1) * Number(operand2)
      break
    case '/':
      result = Number(operand1) / Number(operand2)
      break
    default:
      console.log('Invalid operation symbol.')
      clearDisplay()
  }

  display.innerText = result
  operand1 = result
  operand2 = 0
  result = 0
}

function putIntoBuffer(param){
  console.log(param)
  bufferStr += param
}

sDelete.addEventListener('click', handlePop)

function handlePop(){
  bufferStr = bufferStr.slice(0, -1)
  displayData = displayData.slice(0, -1)
  concatDisplay()
  console.log(bufferStr)
  console.log(displayData)
}