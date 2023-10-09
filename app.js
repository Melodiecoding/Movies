let sortOrder = 1;
window.onload = function () {
    sortItems();
}

var btnSort = document.getElementById("btnSort");
var values = ["A > Z", "Z > A"];
var currentValue = 1;
let page = 1;

function sortItems() {
    fetch("movies.json")
        .then(res => res.json())
        .then(films => {
            films.sort((a, b) => (a.title > b.title) ? sortOrder : -sortOrder);
            sortOrder *= -1;
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for (let film of films) {
                out += `
                <td class="td-list"> 
                <img class="image" src='${film.img_url}'> 
                <li class="list">${film.title}</li> 
                <li class="list">${'Réalisateur : ' + film.real}</li> 
                <li class="list">${'Durée :' + film.time}</li> 
                <li class="list">${'Année de production : ' + film.year}</li> 
                <li class="list">${'Acteurs : ' + film.actor}</li> 
                </td>
                `
            }
            placeholder.innerHTML = out;
            page++;
        });
    currentValue = (currentValue + 1) % values.length;
    btnSort.innerHTML = values[currentValue];
}


window.addEventListener("scroll", function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        sortItems();
    }
});

function searchPage() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('td-list', 'tBody');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";
        }
    }
}


let submitButton = document.querySelector('.button');
let input = document.querySelector('.form');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    let inputValue = input.value;
    console.log(inputValue);
});