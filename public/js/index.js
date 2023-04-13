let animeData = '';
const randomAnimeURL = 'https://api.jikan.moe/v4/random/anime?sfw';

const getHomePage = () => {
  console.log('i clicked Match');
  document.location.replace('/api/homepageroutes');
}

const getFavsPage = () => {
  console.log('i clicked Favorites');
  document.location.replace('/api/favorite');
}

const getAboutPage = () => {
  console.log('i clicked About');
  document.location.replace('/api/about');
}
async function getRandomAnime() {
  console.log(localStorage);
  user_id = localStorage.getItem('user_id');
  fetch(randomAnimeURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const title = data.data.titles[0].title;
      let description = data.data.synopsis;
      if (!description) {
        description = "Sorry, there is no description found.";
      };
      const img_url = data.data.images.jpg.large_image_url;
      const mal_id = data.data.mal_id;
      const url = data.data.url 
      console.log(data.data.mal_id);
      console.log(data.data.url);
      console.log(user_id);
      animeData = {
        title: data.data.titles[0].title,
        description: data.data.synopsis,
        img_url: data.data.images.jpg.large_image_url,
        user_id: user_id,
      };
      renderImage(title, img_url, description);
    });
}

const renderImage = (title, img_url, description) => {
  contentContainerEL.innerHTML = `
  <div w-full>
  <!-- Add more cards as needed -->
  <div class="mt-10 bg-white rounded-lg shadow-lg overflow-hidden transform duration-500 font-extrabold">
    <!-- anime match image -->
    <img id="match-image" class="w-full max-h-full flex"
      src="${img_url}" alt="anime" cover width="500" height="600">
    <div class="p-4">
      <!-- anime match title -->
      <h3 id="match-title" class="flex justify-center text-lg text- font-medium mb-2">${title}</h3>
    </div>
  </div>
</div>
<div id="description-container" class="flex justify-center m-6 min-w-full">
  <!-- Anime description -->
  <p class="font-medium text-center text-lg mt-6 mb-2 text-black overflow-hidden w-1/2">
   ${description}</p>
</div>
 `;
};

const postAnime = () => {
  axios.post('/api/homepageroutes', animeData)
  .then(res => {
    console.log(animeData);
    console.log(localStorage);
    getRandomAnime()
  })
  .catch(err => {
    console.error(err);
  });
};


const checkClick = (buttonClicked) => {
  // console.log('buttonClicked:', buttonClicked);
  if (buttonClicked === 'Pass') {
    //console.log('i clicked Pass');
    getRandomAnime();
  } else {
    //console.log('i clicked Save');
    postAnime();
  }
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.getElementById('email-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/userroutes/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const responseData = await response.json();
      let userId = responseData.user.id;
      console.log(userId);
      localStorage.setItem('user_id', userId);

      // If successful, redirect the browser to the profile page
      document.location.replace('/api/homepageroutes');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();

console.log(JSON.stringify({ email, password }));
  if (email && password) {
    const response = await fetch('/api/userroutes/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const responseData = await response.json();
      let userId = responseData.user.id;
      localStorage.setItem('user_id', userId);
      document.location.replace('/api/homepageroutes');
    } else {
      alert(response.statusText);
    }
  }
};
