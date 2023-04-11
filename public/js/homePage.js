
const contentContainerEL = document.getElementById('content-container');
const btnContainerEl = document.getElementById('btn-container');
const navSaveEl = document.getElementById('nav-save');

btnContainerEl.addEventListener('click', (e) => {
  // run the next function to check what was clicked
  next(e.target.textContent.trim());
});

navSaveEl.addEventListener('click', getSaved)

window.onload = getRandomAnime