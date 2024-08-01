let daysOfWeek = [
   700, 300, 300, 300, 350, 430, 700
]
let date = new Date()
let today = date.getDay()


function count() {
    const howMuch = document.getElementById('howMuch')
    const resultOfCalc = document.getElementById('resultNum')
    let total = daysOfWeek[today] / howMuch.value

   resultOfCalc.textContent = total.toFixed(2)
}
/*
function count() {
    const howMuchMinus = document.getElementById('howMuchMinus')
    

   resultOfCalc.textContent = total.toFixed(2)
}
*/

/****************CONVERTOR */

const input = document.getElementById('convertorHowMuch')
const convertorResultZ = document.getElementById('convertorResultZ')
const convertorResultK = document.getElementById('convertorResultK')
const convertorResultB = document.getElementById('convertorResultB')
const convertorResultR = document.getElementById('convertorResultR')
const convertorResultH = document.getElementById('convertorResultH')
const total = document.getElementById('total')
const ofDay = document.getElementById('ofDay')
//const workDay = document.getElementById('workDay')
const deathBlock = document.getElementById('deathBlock')
const deathdeathAnchor = document.getElementById('deathAnchor')
const kitchenBlock = document.getElementById('kitchenBlock')
const kitchenAnchor = document.getElementById('kitchenAnchor')
const barBlock = document.getElementById('barBlock')
const barAnchor = document.getElementById('barAnchor')
const btnShow = document.getElementById('btnShow')
const btnHide = document.getElementById('btnHide')


/*
if(today == 0 || today == 6) {
    ofDay.style.display = "block"
    workDay.style.display = "none"
} else {
    ofDay.style.display = "none"
    workDay.style.display = "block"
}
*/


function convert() {
   let tipsforZ = input.value * (0.25/100);
   convertorResultZ.textContent = tipsforZ.toFixed(2);
   let tipsforF = input.value * (0.2/100);
   convertorResultK.textContent = tipsforF.toFixed(2);
   let tipsforB = input.value * (0.4 / 100);
   convertorResultB.textContent = tipsforB.toFixed(2);
   let tipsforR = input.value * (0.1 / 100);
   convertorResultR.textContent = tipsforR.toFixed(2);
   let tipsforH = input.value * (0.05 / 100);
   convertorResultH.textContent = tipsforH.toFixed(2);
   let sum = tipsforZ+tipsforB+tipsforF+tipsforH+tipsforR;
   let sumOfWorkDay = sum - (tipsforH+tipsforR);
   total.textContent = sumOfWorkDay;
   return [tipsforR, tipsforR, sum, sumOfWorkDay];
}

function showOfDay() {
  ofDay.style.display = "block";
  total.textContent = convert()[2].toFixed(2);
  btnShow.style.display = "none";
  btnHide.style.display = "block";
}

function hideOfDay() {
  ofDay.style.display = "none";
  total.textContent = convert()[3].toFixed(2);
  btnShow.style.display = "block";
  btnHide.style.display = "none";
}

deathAnchor.addEventListener('click', event => (
    
    deathBlock.textContent = "✅СПЛАЧЕНО на смерть русні"
    
    ))
    
kitchenAnchor.addEventListener('click', event => (
    
    kitchenBlock.textContent = "✅СПЛАЧЕНО кондитерам та кухарям "
    
    ))
    
barAnchor.addEventListener('click', event => (

    barBlock.textContent = "✅СПЛАЧЕНО барменам та касиру"

))


    