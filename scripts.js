document.getElementById('Randomizer').onclick = function ButtonClick() {
let RNG = Math.round(Math.random() *100);
let pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
let randomPokemonPage = pokeAPI + RNG;

fetch(randomPokemonPage);
console.log(randomPokemonPage['abilities']);



}


// Pulls in sprite from JSON file and replaces src in html
function getSprite() {

let Sprite = "/images/pokeball-png-photos.png";
document.getElementById("PokemonSprite").src = Sprite;
}
getSprite()



let tester = "test2" 
document.getElementById("MoveOneHeader").innerText = tester;


let promise = new Promise(function(resolve, reject) {
    let dummy = 10; 
    resolve()



  });