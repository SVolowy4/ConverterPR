const daysOfWeek = [
   560, 270, 270, 270, 300, 350, 560
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
const result = document.getElementById('convertorResultNum')

function convert() {
   let tips = Math.round(parseInt(input.value) * (0.35/100));
   result.textContent = tips.toFixed(2)
}