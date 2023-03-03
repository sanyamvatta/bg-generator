const colorInput1 = document.querySelector("#colorInput1");
const colorInput2 = document.querySelector("#colorInput2");

const body = document.querySelector('body')

const inputs = document.querySelectorAll('input')

inputs.forEach(input =>{
  input.addEventListener('change',()=>{
  setGradient()
  })
})

const button = document.querySelector('button')

button.addEventListener('click',()=>{
  colorInput1.value = getRandomColor()
  colorInput2.value = getRandomColor()
  setGradient()
})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setGradient(){
  body.style.background = `linear-gradient(to right, ${colorInput1.value} , ${colorInput2.value})`
  const h3 = document.querySelector('h3')
  h3.innerText = body.style.background
}
