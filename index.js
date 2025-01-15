let htmls = "";
pokemons.forEach((pokemon, index) =>{
    htmls += `
            <div class="item">
                <div class="item__id">
                    #${index + 1}
                </div>
                <div class="item__image" style="background-image: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png');">
                    
                </div>
                <div class="item__name">
                    ${pokemon.name}
                </div>
                <div class="he">
                    doc 
                </div>
            </div>
        `
});

const itemPokemon = document.querySelector('.items');
itemPokemon.innerHTML = htmls;