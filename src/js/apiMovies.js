const apiKey = "1e71f59a5867b3d504b226aad0f74388";

// FILMES EM ALTA
const container = document.getElementById("filmes");
fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=pt-BR`)

.then(res => res.json()) 
.then(data => {

    const filmes = data.results;
    filmes.forEach(movie => {

        const div = document.createElement("div");

        const imagem =
        "https://image.tmdb.org/t/p/w500" + movie.poster_path;

        div.innerHTML = `
            <img src="${imagem}" width="350">
            <p>${movie.title}</p>
        `;

        container.appendChild(div);
    });

});

// FILMES DE TERROR
const container2 = document.getElementById("filmes-terror");

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27&sort_by=popularity.desc&vote_count.gte=200&language=pt-BR`)

.then(res => res.json())
.then(data => {

    const terror = data.results
    terror.forEach(movie => {

        const div = document.createElement("div")
        const imagem = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

        div.innerHTML = `
            <img src="${imagem}" width="350">
            <p>${movie.title}</p>
        `;

        container2.appendChild(div);
    })
})

// FILMES DE ANIMAÇÃO
const container3 = document.getElementById("filmes-animacao");

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&sort_by=popularity.desc&language=pt-BR`)

.then(res => res.json())
.then(data => {

    const animacao = data.results
    animacao.forEach(movie => {

        const div = document.createElement("div")
        const imagem = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

        div.innerHTML = `
            <img src="${imagem}" width="350">
            <p>${movie.title}</p>
        `;

        container3.appendChild(div);
    })
})


// FILMES DE AÇÃO
const container4 = document.getElementById("filmes-acao");

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28&sort_by=popularity.desc&vote_count.gte=200&language=pt-BR`)

.then(res => res.json())
.then(data => {

    const acao = data.results
    acao.forEach(movie => {

        const div = document.createElement("div")
        const imagem = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

        div.innerHTML = `
            <img src="${imagem}" width="350">
            <p>${movie.title}</p>
        `;

        container4.appendChild(div);
    })
})

const container5 = document.getElementById("filmes-geral");
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=popularity.desc&page=1`)

.then(res => res.json()) 
.then(data => {

    const filmes_geral = data.results;
    filmes_geral.forEach(movie => {

        const div = document.createElement("div");

        const imagem =
        "https://image.tmdb.org/t/p/w500" + movie.poster_path;

        div.innerHTML = `
            <img src="${imagem}" width="350">
            <p>${movie.title}</p>
        `;

        container5.appendChild(div);
    });

});

