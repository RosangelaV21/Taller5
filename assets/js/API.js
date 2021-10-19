// URL API - el http que vamos a consumir, guarda URL
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=00";
const btnSearch = document.getElementById("btnSearch");

//Obtener los resultados de la API
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results);
    })
    .catch((error) => {
      console.log("Error in the API", error);
    });
};

const fillData = (data) => {

  let html = "";

  data.forEach((pk) => {
    fetch(pk.url)
      .then((response) => response.json())
      .then((data) => {
        html += '<div class="col">';
        html += '<div class="card h-100" style="width: 12rem;">';
        html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="${data.name}">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pk.name}</h5>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";

        document.getElementById("dataPeople").innerHTML = html;
      })

      .catch((error) => {
        console.log("Error: ", error);
      });
  });
};

btnSearch.onclick = function () {
  getData(API);
};
