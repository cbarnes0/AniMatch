// const contentContainerEL = document.getElementById('content-container');
// const btnContainerEl = document.getElementById('btn-container');
// const navSaveEl = document.getElementById('nav-save');

let animeData = '';
const randomAnimeURL = 'https://api.jikan.moe/v4/random/anime?sfw';
// let user_id = ''

const getHomePage = () => {
  console.log('i clicked Match');
  document.location.replace('/api/homepageroutes');
}

const getFavsPage = () => {
  console.log('i clicked Favorites');
  document.location.replace('/api/favorite');
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
      console.log(data);
      console.log(user_id);
      animeData = {
        title: data.data.titles[0].title,
        description: data.data.synopsis,
        img_url: data.data.images.jpg.large_image_url,
        //need to get this checked to be replaced with the user
        user_id: user_id,
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
    console.log(response);

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
  console.log('i was clicked');

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
      document.location.replace('/api/homepageroutes');
    } else {
      alert(response.statusText);
    }
  }
};
// btnContainerEl.addEventListener('click', (e) => {
//   // run the next function to check what was clicked
//   next(e.target.textContent.trim());
// });

// navSaveEl.addEventListener('click', getSaved)

// window.onload = getRandomAnime