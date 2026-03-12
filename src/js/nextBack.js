const next = document.getElementById("next");
const prev = document.getElementById("voltar");

next.addEventListener("click", () => {
        container.scrollLeft += 380;
});

prev.addEventListener("click", () => {
        container.scrollLeft -= 380;
});


const next2 = document.getElementById("next-terror");
const prev2 = document.getElementById("prev-terror");

next2.addEventListener("click", () => {
        container2.scrollLeft += 380;
});

prev2.addEventListener("click", () => {
        container2.scrollLeft -= 380;
});


const next3 = document.getElementById("next-animacao");
const prev3 = document.getElementById("prev-animacao");

next3.addEventListener("click", () => {
        container3.scrollLeft += 380;
});

prev3.addEventListener("click", () => {
        container3.scrollLeft -= 380;
});