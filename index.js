let daysOfWeek = [
   570, 300, 300, 300, 350, 430, 570
]
let date = new Date()
let today = date.getDay()

let container = document.getElementById('container')

function count() {
container.innerHTML = ''
    const howMuch = document.getElementById('howMuch')
    const resultOfCalc = document.getElementById('resultNum')
    let total = daysOfWeek[today] / howMuch.value

   resultOfCalc.textContent = total.toFixed(2)
container.innerHTML += `
    <img src="IMG_20250120_191925_134.jpg" width="250" alt="">
   `
}


/////----Конвертер ----////////

const objects = [
  { name: 'Смерть Русні', procent: 5 / 100, link: 'https://send.monobank.ua/jar/83kMwShVbB' },
  { name: 'Бар/Касса', procent: 5 / 100, 
link: 'https://send.monobank.ua/9qLk4HnKWM' },
  { name: 'Кухня/Кондитери', procent: 5 / 100, link: 'https://send.monobank.ua/jar/9bBSCWEDDA' },
  { name: 'Ранер', procent: 2.6 / 100, 
link: 'https://send.monobank.ua/6J3vq8Gun5'},
  { name: 'Хостес', procent: 0.8 / 100, 
link: 'https://send.monobank.ua/3XyV5gTj4f' }
]


const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("listLinks");

function calc(object) {
  return Number((object.procent * input.value).toFixed(2));
}

function renderList(idsToInclude) {
  list.innerHTML = '';
  const array = [];
  
  idsToInclude.forEach(id => {
    const object = objects[id];
    const template = `
      <div class="link">
        <div class="link-anchor">
          <a href="${object.link}" target="_blank">${object.name}</a>
        </div>
        <div class="link-total">
          ${calc(object)}
        </div>
      </div>
    `;
    list.innerHTML += template;
    array.push(calc(object));
  });

  const sum = array.reduce((acc, value) => acc + value, 0);
  list.innerHTML += `
    <div class="next-button">
      <button onclick="renderList([0, 1, 2, 3])">+ Ранер</button>
      <button onclick="renderList([0, 1, 2, 4])">+ Хостес</button>
      <button onclick="renderList([0, 1, 2, 3, 4])">Разом</button>
    </div>
    <div class="total">
      <p>Сума: ${sum.toFixed(2)}</p>
    </div>
  `;
}

button.addEventListener('click', () => renderList([0, 1, 2]));

/*
console.log('123')
let daysOfWeek = [
   570, 300, 300, 300, 350, 430, 570
]
let date = new Date()
let today = date.getDay()


function count() {
    const howMuch = document.getElementById('howMuch')
    const resultOfCalc = document.getElementById('resultNum')
    let total = daysOfWeek[today] / howMuch.value

   resultOfCalc.textContent = total.toFixed(2)
}
*/
/*
function count() {
    const howMuchMinus = document.getElementById('howMuchMinus')
    

   resultOfCalc.textContent = total.toFixed(2)
}
*/


/****************CONVERTOR */
/*
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
*/

/*
if(today == 0 || today == 6) {
    ofDay.style.display = "block"
    workDay.style.display = "none"
} else {
    ofDay.style.display = "none"
    workDay.style.display = "block"
}
*/

/*
function convert() {
   let tipsforZ = input.value * (5/100);
   convertorResultZ.textContent = tipsforZ.toFixed(2);
   let tipsforF = input.value * (5/100);
   convertorResultK.textContent = tipsforF.toFixed(2);
   let tipsforB = input.value * (5 / 100);
   convertorResultB.textContent = tipsforB.toFixed(2);
   let tipsforR = input.value * (2.6 / 100);
   convertorResultR.textContent = tipsforR.toFixed(2);
   let tipsforH = input.value * (0.8 / 100);
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
    
    deathBlock.textContent = "✅ВІДПРАВЛЕНО на смерть русні (перевір у транзакціях свого банку)"
    
    ))
    
kitchenAnchor.addEventListener('click', event => (
    
    kitchenBlock.textContent = "✅ВІДПРАВЛЕНО КУХНЯ/КОНДИТЕРИ (перевір у транзакціях свого банку)"
    
    ))
    
barAnchor.addEventListener('click', event => (

    barBlock.textContent = "✅ВІДПРАВЛЕНО БАР/КАССА (перевір у транзакціях свого банку)"

))
*/

    