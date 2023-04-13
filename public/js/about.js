const favsContainerEl = document.getElementById('favs-container')
const navMatchEl = document.getElementById('match-button');
const favoritesBtn = document.getElementById('favorites-button')
const hamburgerFavoritesBtn = document.getElementById('favorites-button-hamburger')
const hamburgerMatchBtn = document.getElementById('match-button-hamburger')
const aboutBtn = document.getElementById('about-button')
const hamburgerAboutBtn = document.getElementById('about-button-hamburger')

navMatchEl.addEventListener('click', getHomePage)
favoritesBtn.addEventListener('click', getFavsPage)
hamburgerMatchBtn.addEventListener('click',getHomePage )
hamburgerFavoritesBtn.addEventListener('click',getFavsPage )
aboutBtn.addEventListener('click', getAboutPage )
hamburgerAboutBtn.addEventListener('click', getAboutPage )