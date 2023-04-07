// fetch random anime
//const fetch = require('isomorphic-fetch');


const randomAnimeURL = 'https://api.jikan.moe/v4/random/anime'
//animeFetch()
async function getRandomAnime() {
  fetch(randomAnimeURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderImage(data.data.images.jpg.large_image_url, data.data.titles[0].title, data.data.synopsis )

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
      const imageURL = data.data.images.jpg.large_image_url;
      console.log('This is the extracted image URL:');
      console.log(imageURL);
      //extract genre
      // const genre = data.data.images.jpg.large_image_url;
      // console.log('This is the extracted genre:');
      // console.log(genre);
    });
}


// This function will use axios library and the favorite model defined
// to make a post request to your server endpoint that handles saving the favorite 
// anime to the database.

// This example makes those changes and changes the title to postRandomAnime.

// Carson : my thinking is that this function can be called whenever 
// something is favorited and then that should solve it.

async function postRandomAnime() {
  fetch(randomAnimeURL)
    .then(response => response.json())
    .then(data => {
      const animeTitle =  data.data.titles[0].title;
      const animeSynopsis =  data.data.synopsis;
      const imageURL = data.data.images.jpg.large_image_url;

      console.log('Extracted anime title:', animeTitle);
      console.log('Extracted anime synopsis:', animeSynopsis);
      console.log('Extracted image URL:', imageURL);

      fetch('http://localhost:3001/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: animeTitle,
          description: animeSynopsis,
          img_url: imageURL,
          // user_id: currentUserID 
          // You would need to set this to the user ID of the currently
          // logged in user when they authenticate with the application.
          // this could be done using a cookie or a session token. 
        })
      })
      .then(response => response.json())
      .then(data => console.log('Anime saved to favorites:', data))
      .catch(error => console.error('Error saving anime to favorites:', error));
    })
    .catch(error => console.error('Error fetching anime:', error));
};
