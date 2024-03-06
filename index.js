let input = document.getElementById('input')

let content = document.getElementById('content')



function convert () {
   let count = input.value;
   let tips = (parseInt(count) * (0.35/100));
   content.style.color ='white'
   content.style.fontSize = '3.5em'
   content.style.fontWeight = 'bold'
   content.style.backgroundColor = 'black'
   content.textContent = tips.toFixed(0) + " на"
   return input.value = ''
}