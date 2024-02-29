let input = document.getElementById('input')
let content = document.getElementById('content')



function convert () {
   let count = input.value;
   let tips = Math.round(parseInt(count) * (0.35/100));
   content.textContent = tips + " uah"
   return input.value = ''
}