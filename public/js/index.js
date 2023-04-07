
const contentContainerEL = document.getElementById('content-container')
const saveBtnEl = document.getElementById('saveBtn')

const  renderImage = (url, title, synopsis ) => {
 contentContainerEL.innerHTML = `
 <img alt="Art"
 src="${url}"
 class="h-64 w-full object-cover sm:h-80 lg:h-96" />
<h3 class="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
${title}
</h3>
<p class="mt-2 max-w-sm text-lg text-gray-700">
 ${synopsis}
</p>
</a>
 ` 
}


const buildHTML = () => {
  
}


saveBtnEl.addEventListener('click', getRandomAnime)
