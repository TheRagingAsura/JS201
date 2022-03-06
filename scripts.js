document.getElementById('Randomizer').onclick = function ButtonClick() {
let RNG = Math.round(Math.random() *100);
let pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
let randomPokemonPage = pokeAPI + RNG;

fetch(randomPokemonPage)
    .then(response => response.json())
    .then(Pokemon => {
        console.log(randomPokemonPage);
    document.getElementById("PokemonName").innerHTML = Pokemon.name;
    document.getElementById("PokemonHP").innerHTML = Pokemon.stats[0].base_stat;
    document.getElementById("PokemonSprite").src = Pokemon.sprites.front_default;
    let test = document.getElementById("lmao");
    test.classList.add(Pokemon.types[0].type.name);

        // removes last added class as well as removes DefaultCard
    test.classList.remove(test.classList.item(1));
    

    })

}


// Pulls in sprite from JSON file and replaces src in html
function getSprite() {

let Sprite = "/images/pokeball-png-photos.png";
document.getElementById("PokemonSprite").src = Sprite;
}
// getSprite()

