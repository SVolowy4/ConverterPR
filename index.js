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
const convertorResultZ = document.getElementById('convertorResultZ')
const convertorResultK = document.getElementById('convertorResultK')
const convertorResultB = document.getElementById('convertorResultB')
const convertorResultR = document.getElementById('convertorResultR')
const convertorResultH = document.getElementById('convertorResultH')
const ofDay = document.getElementById('ofDay')

if(today !== 0 || today !== 6) {
  ofDay.style.display = "none"
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
}