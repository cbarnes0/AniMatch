
const contentContainerEL = document.getElementById('content-container')
const saveBtnEl = document.getElementById('saveBtn')
const passBtnEl = document.getElementById('passBtn')

const renderImage = (url, title, synopsis ) => {
 contentContainerEL.innerHTML = `
 <img alt="Art"
 src="${url}"
 class="h-64 w-full object-cover sm:h-80 lg:h-96" />
<h3 class="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl text-center">
${title}
</h3>
<p class="mt-2 max-w-sm text-lg text-gray-700 text-center">
 ${synopsis}
</p>
</a>
 ` 
}

const postAnime = async () => {
  const response = await fetch(randomAnimeURL);
  const data = await response.json()
  

  saveBtnEl.addEventListener('click', async ()=>{
    // need code to save to database
    console.log('Anime data saved', data);
  })
  renderImage(data.data.images.jpg.large_image_url, data.data.titles[0].title, data.data.synopsis)
}



saveBtnEl.addEventListener('click', postAnime)
passBtnEl.addEventListener('click', getRandomAnime)
