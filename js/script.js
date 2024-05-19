function welcomeAlert() {
    alert("Seja bem-vindo");
}

let currentSlide = 0;

function showSlide() {
    const slides = document.querySelectorAll("#slideshow img");
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
}
setInterval(showSlide, 2000);

function validateForm() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    if (nome === "" || telefone === "" || email === "") {
        alert("Todos os campos são obrigatórios.");
        return false;
    }
    return true;
}