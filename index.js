const daysOfWeek = [
   680, 270, 270, 270, 330, 450, 680
]
const date = new Date()
const today = date.getDay()

const howMuch = document.getElementById('howMuch')
const resultOfCalc = document.getElementById('resultNum')

function count() {
   let total = daysOfWeek[today] / howMuch.value

   resultOfCalc.textContent = total.toFixed(2)
}

/****************CONVERTOR */

const input = document.getElementById('convertorHowMuch')
const total = document.getElementById('total')
const convertorResultZ = document.getElementById('convertorResultZ')
const convertorResultK = document.getElementById('convertorResultK')
const convertorResultB = document.getElementById('convertorResultB')
const convertorResultR = document.getElementById('convertorResultR')
const convertorResultH = document.getElementById('convertorResultH')
const ofDay = document.getElementById('ofDay')
const workDay = document.getElementById('workDay')
const deathBlock = document.getElementById('Death')
const deathdeathAnchor = document.getElementById('deathAnchor')
const kitchenBlock = document.getElementById('Kitchen')
const kitchenAnchor = document.getElementById('kitchenAnchor')
const barBlock = document.getElementById('Bar')
const barAnchor = document.getElementById('barAnchor')

if(today == 0 || today == 6) {
  ofDay.style.display = "block"
  workDay.style.display = "none"
} else {
  ofDay.style.display = "none"
  workDay.style.display = "block"
}


function convert() {
   let tipsforZ = input.value * (0.25/100);
   convertorResultZ.textContent = tipsforZ.toFixed(2);
   let tipsforF = input.value * (0.25/100);
   convertorResultK.textContent = tipsforF.toFixed(2);
   let tipsforB = input.value * (0.5 / 100);
   convertorResultB.textContent = tipsforB.toFixed(2);
   let tipsforR = input.value * (0.1 / 100);
   convertorResultR.textContent = tipsforR.toFixed(2);
   let tipsforH = input.value * (0.05 / 100);
   convertorResultH.textContent = tipsforH.toFixed(2);
let sum = tipsforZ+tipsforB+tipsforF+tipsforH+tipsforR;
   total.textContent = sum.toFixed(2)
let sumOfWorkDay = sum - (tipsforH+tipsforR);
   if (today == 0 || today ==6) {
       total.textContent = sum.toFixed(2)
   } else {
       total.textContent = sumOfWorkDay.toFixed(2)
   }
}

deathAnchor.addEventListener('click', event => (
    
    deathBlock.textContent = "Хай загинуть наші вороженьки"
    
    ))
    
kitchenAnchor.addEventListener('click', event => (
    
    kitchenBlock.textContent = "Щоб ручки не боліли в наших поварів та кондитерів"
    
    ))
    
barAnchor.addEventListener('click', event => (

    barBlock.textContent = "Стресостійкості касиру та натхнення барменам"

))

