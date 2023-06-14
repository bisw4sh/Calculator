const digits = document.querySelectorAll('.digit')
const display = document.querySelector('.display-area')
const sDelete = document.querySelector('.del')
const clear = document.querySelector('.ac')
const dot = document.querySelector('.num-dot')

const clearDisplay = () => {display.innerText = ''}

const concatDisplay = (newData) => {
  display.innerText += newData
}

clear.addEventListener('click', clearDisplay)

digits.forEach( digit => {
  digit.addEventListener('click', (e) => {
    concatDisplay(e.target.value)
    console.log(e.target.value)
  })  
})