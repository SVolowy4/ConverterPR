let input = document.getElementById('input')

let content = document.getElementById('content')



function convert () {
   let count = input.value;
   let tips = (parseInt(count) * (0.35/100));
   content.style.color ='white'
   content.style.fontSize = '3.5em'
   content.style.fontWeight = 'bold'
   content.style.backgroundColor = 'black'
   content.textContent = tips.toFixed(0)
   content.insertAdjacentHTML('afterend', `
   <p class="insert">Затисни цю суму до появи "Копіювати"</br></br>За твоїм бажанням вона може бути скинута по реквізитам за посиланнями нижче</p>
   <h2>Банки:</h2>
   <div class="jars">
   <div class="link">
      <a href="https://send.monobank.ua/jar/83kMwShVbB">Смерть русні</a>
   </div>
   <div class="link">
      <a href="https://send.monobank.ua/jar/A16UrC2X5w">Кухню/кондитерку</a>
   </div>
 </div>
   <h2>Карти:</h2>
     <div class="cards">
      <div class="link">
      <a href="https://send.monobank.ua/44tm2c3wn">Бар/Кассу</a>
      </div>
      <div class="link">
      <a href="https://send.monobank.ua/6UpwM2ETT4">Ранер</a>
      </div>
</div>
   `)
}