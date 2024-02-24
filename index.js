let input = document.getElementById('input')
let button = document.getElementById('button')
let content = document.getElementById('content')

button.onclick = () => {
   let count = input.value;
   let tips = Math.round(parseInt(count) * (0.35/100));
   content.textContent = tips + " uah"
   return input.value = ''
   
}