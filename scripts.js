document.getElementById('Randomizer').onclick = function ButtonClick() {
let RNG = Math.round(Math.random() *100);
let pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
let randomPokemonPage = pokeAPI + RNG;

fetch(randomPokemonPage)
    .then(response => response.json())
    .then(Pokemon => {
        console.log(randomPokemonPage);
    document.getElementById("PokemonName").innerHTML = Pokemon.name.toUpperCase();
    document.getElementById("PokemonHP").innerHTML = Pokemon.stats[0].base_stat;
    document.getElementById("PokemonSprite").src = Pokemon.sprites.front_default;

    document.getElementById("Move1Header").innerHTML = Pokemon.moves[0].move.name.toUpperCase();
        fetch(Pokemon.moves[0].move.url)
        .then(response => response.json())
        .then(move1 => {
            console.log(move1);
        document.getElementById("Move1FlavorText").innerHTML = move1.flavor_text_entries[0].flavor_text
        })

        document.getElementById("Move2Header").innerHTML = Pokemon.moves[1].move.name.toUpperCase();
        fetch(Pokemon.moves[1].move.url)
        .then(response => response.json())
        .then(move2 => {
            console.log(move2);
        document.getElementById("Move2FlavorText").innerHTML = move2.flavor_text_entries[1].flavor_text
        })


    document.getElementById("Move3").innerHTML = Pokemon.moves[2].move.name.toUpperCase();

   
    let test = document.getElementById("lmao");
    test.classList.add(Pokemon.types[0].type.name);

        // removes last added class as well as removes DefaultCard
    setTimeout(() => {
        test.classList.remove(test.classList.item(1));
        
    }, 800);
    

    })

}






// Pulls in sprite from JSON file and replaces src in html
function getSprite() {

let Sprite = "/images/pokeball-png-photos.png";
document.getElementById("PokemonSprite").src = Sprite;
}
// getSprite()

