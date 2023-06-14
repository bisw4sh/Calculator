const digits = document.querySelectorAll('.digit')

digits.forEach( digit => {
  digit.addEventListener('click', (e) => {
    console.log(e)
  })  
})