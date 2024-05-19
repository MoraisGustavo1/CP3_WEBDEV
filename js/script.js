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
