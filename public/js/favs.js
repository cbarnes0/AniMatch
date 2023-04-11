const favsContainerEl = document.getElementById('favs-container')

//need to run a check on the user id to put in the api route
const getUserFavs = () => {
  axios.get('/api/favorite/1')
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
      let url = favsData[index].img_url;
     
       
      // replace the html element with the thubmnails
      favsContainerEl.innerHTML += `
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src=${url} alt="Image 1" class="w-full">
      <div class="p-4">
        <h2 class="text-lg font-medium mb-2">${title}</h2>
      </div>
      </div>
      `;
    };

}
window.onload = getUserFavs
