const buttonLoadMore = document.getElementById('loadMoreButton');

let limit = 10;
let offset = 0;
let URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

async function getPokemonList() {
    await fetch(URL)
        .then((response) => response.json())
        .then((pokemonList) => pokemonList.results)
        .then((pokemons) => {
            for (let i = 0; i < pokemons.length; i++) {
                pokemonsUrlOrder(pokemons[i].url);
            }
        })
        .catch((error) => console.error(error));
}

function pokemonsUrlOrder(URLPokemonDetail) {
    fetch(URLPokemonDetail)
        .then((response) => response.json())
        .then((pokemonJson) => pokemonToHtml(pokemonJson));
}

function pokemonToHtml(pokemon) {
    const pokemonsTable = document.getElementById("pokemonList");
    pokemonsTable.innerHTML +=
        `
    <li onclick="loadDetail(${pokemon.id})" class="pokemon ${pokemon.name} ${pokemon.types[0].type.name}">
        <span class="number" > #${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
            ${pokemon.types.map(type => `<li>${type.type.name}</li>`).join('')}
            </ol>

            <img src="${pokemon.sprites.front_default}"
                 alt="">
        </div>
    </li >
        `;
}

// function loadMore() {
//     limit += 0; // Incrementa o limite em 10
//     offset += 10; // Atualiza o URL com o novo limite
//     URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
//     getPokemonList()
// }

// function loadDetail(el) {
//     sessionStorage.setItem('buttonIndex', el);
//     window.location.href = '/detailPage.html'
// }

// buttonLoadMore.addEventListener("click", () => {
//     loadMore();
// });

async function main() {

    await getPokemonList();

};

main();