const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6'
const container = document.querySelector('.container')
const overlay = document.getElementById('overlay')

axios.get(endpoint)
.then(res => {
  container.innerHTML=''
  res.data.forEach(album => printCard(album));
  addClickEvents(res.data);
})      

.catch(e=>{
  console.log(e);
})

function printCard(album){
  const {url , id,  title} = album;
  container.innerHTML += `
  <div class="card">
  <div class="pin-container"><img class="pin" src="img/pin.svg" alt="pin"></div>
  <div class="justify-content-center d-flex">
  <img src="${url}" alt="${id}">
  </div>
  <div class="mx-3 my-3">
  <p class="card-text">${title}</p>
  </div>
  </div> 
  `
}

function printOverlay(album){
  const {url , id} = album
  overlay.innerHTML = `
  <button class="btn btn-secondary my-5">Chiudi</button>
  <img src="${url}" alt="${id}">
  `
}

function addClickEvents (album){
  const cards = document.querySelectorAll('.card')
  cards.forEach((card, index) => {
    card.addEventListener('click', ()=>{
      printOverlay(album[index])
      overlay.classList.remove('d-none')

      const btn = document.querySelector('.btn')
      btn.addEventListener('click',() => {
        overlay.classList.add('d-none')
    })
   })
  })
}
