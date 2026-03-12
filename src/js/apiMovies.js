const apiKey = "1e71f59a5867b3d504b226aad0f74388";
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



