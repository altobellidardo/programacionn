var pokenumber = 1;
var state = 1;
const img = document.getElementsByClassName("image")[0];
const namespace = document.getElementById("number");
const charspace = document.getElementsByClassName("info-box")[0];
const switchshiny = document.getElementsByClassName("shiny")[0];

function cargar() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokenumber}/`)
    .then((response) => response.json())
    .then((pokemon) => {
      console.log(pokemon)
      let nombre = pokemon.name;
      var image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokenumber}.png`;
      img.setAttribute("src", image);
      state = 0;
      showShiny();
      nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
      namespace.innerHTML = "#" + pokemon.id + " - " + nombre;
      let tipo1 = pokemon.types[0].type.name;
      let height = pokemon.height / 10;
      let weight = pokemon.weight / 10;
      let gen = 1;
      charspace.innerHTML = `
        <li>Type: ${tipo1}</li>
        <li>Generation: ${gen}</li>
        <li>Height: ${height}m</li>
        <li>Weight: ${weight}kg</li>
      `;
      if (pokemon.types.length > 1) {
        let tipo2 = pokemon.types[1].type.name;
        charspace.innerHTML = `
        <li>Type1: ${tipo1}</li>
        <li>Type2: ${tipo2}</li>
        <li>Generation: ${gen}</li>
        <li>Height: ${height}m</li>
        <li>Weight: ${weight}kg</li>
        `;
      }
    });
}

function showShiny() {
  if (state) {
    image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokenumber}.png`;
    switchshiny.innerHTML = "Get normal";
  } else {
    image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokenumber}.png`;
    switchshiny.innerHTML = "Get shiny";
  }
  img.setAttribute("src", image);
  state = !state;
}

function next() {
  if (pokenumber < 905) pokenumber += 1;
  document.getElementsByTagName("input")[2].value = pokenumber;
  cargar();
}

function back() {
  if (pokenumber > 1) pokenumber -= 1;
  document.getElementsByTagName("input")[2].value = pokenumber;
  cargar();
}

function slide() {
  pokenumber = parseInt(document.getElementsByTagName("input")[2].value, 10);
  cargar();
}

function send() {
  entrada = parseInt(document.getElementsByTagName("input")[0].value, 10);
  if (entrada > 0 && entrada < 905) pokenumber = entrada;
  document.getElementsByTagName("input")[2].value = pokenumber;
  cargar();
}

document.addEventListener("keydown", (event) => {
  if (event.keyCode == 39) next();
  else if (event.keyCode == 37) back();
});

cargar();