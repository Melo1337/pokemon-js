const buttonIndex = sessionStorage.getItem('buttonIndex')
let URL_pokemon = `https://pokeapi.co/api/v2/pokemon/${buttonIndex}/`

console.log(URL_pokemon);

const buttonReturn = document.getElementById('buttonReturn')

function returnIndex() {
      window.location.href = '/index.html'
}