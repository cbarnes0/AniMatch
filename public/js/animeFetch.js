// fetch random anime

const randomAnimeURL = 'https://api.jikan.moe/v4/random/anime'
// manga api
// const randomAnimeURL = 'https://api.jikan.moe/v4/random/anime'

function getRandomAnime() {
  fetch(randomAnimeURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('This is the API fetch data:');
      console.dir(data);
      // extract title 
      const animeTitle =  data.data.titles[0].title;
      console.log('This is the extracted title');
      console.log(animeTitle);
      //extract amime description
      // some donot have synopsis'
      const animeSynopsis =  data.data.synopsis;
      console.log('This is the extracted description');
      console.log(animeSynopsis);
      // extract image URL from response JSON
      const image_url = data.data.images.jpg.large_image_url;
      console.log('This is the extracted image URL:');
      console.log(image_url);
    });
}

module.exports = getRandomAnime