const fetchAPI = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

let numberOfRender = 36;
let offset = 0;
let Allpokemons = [];
let filteredPokemons = [];
let htmlPokemon = "";

async function getPokemon() {
    const data = await fetchAPI('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=240');
    console.log(data);
    Allpokemons = data.results;
    filteredPokemons = pokemons;
    renderPokemons();
}

function getIDPokemon(url) {
    const parts = url.split('/'); 
    return parseInt(parts[parts.length - 2], 10);
}

// Hiển thị danh sách Pokémon
async function renderPokemons() {
    let htmlType = "";

    for (let index = offset; index < numberOfRender + offset && index < filteredPokemons.length; index++) {
        const pokemon = filteredPokemons[index];
        const typeData = await fetchAPI(pokemon.url);

        const ID = getIDPokemon(pokemon.url);
        htmlType = "";
        typeData.types.forEach(element => {
            htmlType += `
                <div class="types__item ${element.type.name}">${element.type.name}</div>
            `;
        });

        htmlPokemon += `
            <div class="item">
                <div class="item__id">
                    #${ID}
                </div>
                <div class="item__image" style="background-image: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png');">
                </div>
                <div class="item__name">
                    ${pokemon.name}
                </div>
                <div class="types">
                    ${htmlType}
                </div>
            </div>
        `;
    }

    const itemPokemon = document.querySelector('.items');
    itemPokemon.innerHTML = htmlPokemon;
    setupLoadMore();
}

function setupLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more');
    if (offset + numberOfRender < filteredPokemons.length) {
        loadMoreBtn.style.display = 'block';
        loadMoreBtn.onclick = () => {
            offset += numberOfRender;
            renderPokemons();
        };
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

function searchPokemon(query) {
    htmlPokemon = "";
    offset = 0;
    if(query === '') {
        numberOfRender = 36;
        filteredPokemons = Allpokemons;
        renderPokemons();
    }
    else{
        filteredPokemons = Allpokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(query.toLowerCase())
        );

        numberOfRender = filteredPokemons.length;
        console.log(filteredPokemons)
        renderPokemons();
    }

}
const searchInput = document.querySelector('.title__input');
console.log(searchInput)
searchInput.addEventListener('input', (event) => {
    const query = event.target.value;
    searchPokemon(query); 
});


getPokemon();
