const contentContainerEL = document.getElementById('content-container');
const btnContainerEl = document.getElementById('btn-container');
//window.onload = getRandomAnime

let animeData = ''
const randomAnimeURL = 'https://api.jikan.moe/v4/random/anime?sfw';

async function getRandomAnime() {
  fetch(randomAnimeURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const title = data.data.titles[0].title;
      const description = data.data.synopsis;
      const img_url = data.data.images.jpg.large_image_url;
     // const user_id = 1;
       animeData = {
        title: data.data.titles[0].title,
        description: data.data.synopsis,
        img_url: data.data.images.jpg.large_image_url,
        user_id: 2,
      };
      renderImage(title, description, img_url);
    });
}
const renderImage = (title, synopsis, url) => {
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
 `;
};

const postAnime = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(animeData);
      console.log(JSON.stringify(animeData));
      
      const postData = { message: "hello world" };
      const response = await fetch('/api/homepage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      const result = await response.text();
      console.log(result);
      console.log('Anime data saved', result);
      getRandomAnime();
      resolve(result);
    } catch (error) {
      console.error('Error:', error);
      reject(error);
    }
  });
};

const next = (buttonClicked) => {
 // console.log('buttonClicked:', buttonClicked);
  if (buttonClicked === 'Pass') {
    //console.log('i clicked Pass');
    getRandomAnime()
  } else {
    //console.log('i clicked Save');
    postAnime()
  }
};

btnContainerEl.addEventListener('click', (e) => {
 // console.log('clicked button textContent:', e.target.textContent);
  next(e.target.textContent.trim());
});