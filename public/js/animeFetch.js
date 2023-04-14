
async function postRandomAnime() {
  fetch(randomAnimeURL)
    .then((response) => response.json())
    .then((data) => {
      const animeTitle = data.data.titles[0].title;
      const animeSynopsis = data.data.synopsis;
      const imageURL = data.data.images.jpg.large_image_url;

      console.log('Extracted anime title:', animeTitle);
      console.log('Extracted anime synopsis:', animeSynopsis);
      console.log('Extracted image URL:', imageURL);

      fetch('http://localhost:3001/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: animeTitle,
          description: animeSynopsis,
          img_url: imageURL,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log('Anime saved to favorites:', data));
      getRandomAnime().catch((error) =>
        console.error('Error saving anime to favorites:', error)
      );
    })
    .catch((error) => console.error('Error fetching anime:', error));
}
