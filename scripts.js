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
    let test = document.getElementById("lmao");
    test.classList.add(Pokemon.types[0].type.name);

    // Adjust the removal to take away the class added on last click instead of the default card 
    test.classList.remove("DefaultCard");
    

    })




}


// Pulls in sprite from JSON file and replaces src in html
function getSprite() {

let Sprite = "/images/pokeball-png-photos.png";
document.getElementById("PokemonSprite").src = Sprite;
}
// getSprite()



let tester = "test2" 
document.getElementById("MoveOneHeader").innerText = tester;


let promise = new Promise(function(resolve, reject) {
    let dummy = 10; 
    resolve()



  });