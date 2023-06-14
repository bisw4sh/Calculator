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
let bufferArr = []

const clearDisplay = () => {
  display.innerText = ''
  bufferArr = [] 
}

const concatDisplay = (newData) => {
  display.innerText += newData
}

clear.addEventListener('click', clearDisplay)

digits.forEach( digit => {
  digit.addEventListener('click', (e) => {
    concatDisplay(e.target.value)
    result = e.target.value
    console.log(e.target.value)
    console.log(bufferArr)
    bufferArr.push(e.target.value)
  })  
})

op.forEach( operator => {
  operator.addEventListener('click', (e) => {


      console.log('operation of symbol')
      bufferArr.push(`${e.target.value}`)
      console.log(e.target.value)
  })
})

eq.addEventListener('click', doOperation)

function doOperation(){
  console.log(bufferArr)
  switch (bufferArr[1]) {
    case '+':
      result = Number(bufferArr[0]) + Number(bufferArr[2]);
      break;
    case '-':
      result = Number(bufferArr[0]) - Number(bufferArr[2]);
      break;
    case '*':
      result = Number(bufferArr[0]) * Number(bufferArr[2]);
      break;
    case '/':
      result = Number(bufferArr[0]) / Number(bufferArr[2]);
      break;
    default:
      console.log('Invalid operation symbol.');
  }
  console.log(result)
display.innerText = result
}
