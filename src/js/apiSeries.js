const apiKey = "1e71f59a5867b3d504b226aad0f74388";

const container = document.getElementById("series-populares");

fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR`)

.then(res => res.json()) 
.then(data => {

    const series = data.results;

    series.forEach(serie => {

        const div = document.createElement("div");

        const imagem =
        "https://image.tmdb.org/t/p/w500" + serie.poster_path;

        div.innerHTML = `
            <img src="${imagem}" width="200">
            <p>${serie.name}</p>
        `;

        container.appendChild(div);
    });

});

// BEM AVALIADOS 
const container2 = document.getElementById("series-populares");

fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=pt-BR&page=1`)

.then(res => res.json()) 
.then(data => {

    const series = data.results;

    series.forEach(serie => {

        const div = document.createElement("div");

        const imagem =
        "https://image.tmdb.org/t/p/w500" + serie.poster_path;

        div.innerHTML = `
            <img src="${imagem}" width="200">
            <p>${serie.name}</p>
        `;

        container2.appendChild(div);
    });

});

const container3 = document.getElementById("series-populares");

fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=pt-BR&page=1`)

.then(res => res.json()) 
.then(data => {

    const series = data.results;

    series.forEach(serie => {

        const div = document.createElement("div");

        const imagem =
        "https://image.tmdb.org/t/p/w500" + serie.poster_path;

        div.innerHTML = `
            <img src="${imagem}" width="200">
            <p>${serie.name}</p>
        `;

        container3.appendChild(div);
    });

});