const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6'
const container = document.querySelector('.container')

axios.get(endpoint)
  .then(res => {
    container.innerHTML=''
    res.data.forEach(album => printCard(album))
  })
  .catch(e=>{
    console.log(e);
  })

function printCard(album){
  const {url , id,  title} = album;
  container.innerHTML += `
   <div class="card">
          <div class="justify-content-center d-flex">
            <img src="${url}" alt="${id}">
          </div>
          <div class="mx-3 my-3">
            <p class="card-text">${title}</p>
          </div>
        </div> 
  `
}