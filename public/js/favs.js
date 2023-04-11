const favsContainerEl = document.getElementById('favs-container')
const navMatchEl = document.getElementById('match-button');
const favoritesBtn = document.getElementById('favorites-button')
const hamburgerFavoritesBtn = document.getElementById('favorites-button-hamburger')
const hamburgerMatchBtn = document.getElementById('match-button-hamburger')

//need to run a check on the user id to put in the api route
const getUserFavs = () => {
  console.log(localStorage);
  user_id = localStorage.getItem('user_id');
  console.log(user_id);
  axios.get(`/api/favorite/${user_id}`)
  .then(res => {
    let favsData = res.data
    console.log(favsData);
    createCards(favsData)
  })
  .catch(err => {
    console.log(err);
  })
}

const createCards = (favsData) => {
    // clear the container
    favsContainerEl.innerHTML = '';
        
    // buiild the  thumb nails and links
    for (let index = 0; index < favsData.length; index++) {
      let title = favsData[index].title;
      let description = favsData[index].description;
      let img_url = favsData[index].img_url;
      let url = ''
     
      // replace the html element with the thubmnails
      favsContainerEl.innerHTML += `
      <div id="card" class="mt-6 bg-white rounded-lg shadow-lg overflow-hidden transform duration-500 hover:scale-105 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-lg font-extrabold">
      <!-- this is cut content to be added later to the above div class: bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -->
      <img src="${img_url}" alt="animer cover" class="w-full">
      <div class="p-4">
        <h2 class="flex justify-center text-lg text- font-medium mb-2">${title}</h2>
      </div>
    </div>
     `
    };
  }

  navMatchEl.addEventListener('click', getHomePage)
  favoritesBtn.addEventListener('click', getFavsPage)
  hamburgerMatchBtn.addEventListener('click',getHomePage )
  hamburgerFavoritesBtn.addEventListener('click',getFavsPage )

window.onload = getUserFavs

