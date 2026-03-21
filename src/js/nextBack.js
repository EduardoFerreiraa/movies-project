// PARA FILMES EM ALTA
const next = document.getElementById("next");
const prev = document.getElementById("voltar");
next.addEventListener("click", () => {
        container.scrollLeft += 380;
});

prev.addEventListener("click", () => {
        container.scrollLeft -= 380;
});


// PARA FILMES DE TERROR
const next2 = document.getElementById("next-terror");
const prev2 = document.getElementById("prev-terror");

next2.addEventListener("click", () => {
        container2.scrollLeft += 380;
});

prev2.addEventListener("click", () => {
        container2.scrollLeft -= 380;
});


// PARA FILMES DE ANIMACAO
const next3 = document.getElementById("next-animacao");
const prev3 = document.getElementById("prev-animacao");

next3.addEventListener("click", () => {
        container3.scrollLeft += 380;
});

prev3.addEventListener("click", () => {
        container3.scrollLeft -= 380;
});

// PARA FILMES DE ACAO
const next4 = document.getElementById("next-acao");
const prev4 = document.getElementById("prev-acao");

next4.addEventListener("click", () => {
        container4.scrollLeft += 380;
});

prev4.addEventListener("click", () => {
        container4.scrollLeft -= 380;
});