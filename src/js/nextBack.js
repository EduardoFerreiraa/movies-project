const next = document.getElementById("next");
const prev = document.getElementById("voltar");

next.addEventListener("click", () => {
        container.scrollLeft += 380;
});

prev.addEventListener("click", () => {
        container.scrollLeft -= 380;
});