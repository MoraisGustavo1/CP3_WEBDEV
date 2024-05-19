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

function validateLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === "admin" && pass == 123) {
        window.open('quiz.html') ;
    } else {
        alert("Usuário ou senha incorretos.");
        return false;
    }
}
function startQuiz() {
    const questions = [
        "1.Qual é o mamífero mais rápido do mundo?",
        "2.Qual animal é conhecido por sua capacidade de mudar de cor para se camuflar?",
        "3.Qual é o maior animal marinho?",
        "4.Qual ave é conhecida por sua habilidade de imitar sons e fala humana?",
        "5.Quantas patas tem uma aranha?",
        "6.Qual é o animal terrestre mais alto do mundo?",
        "7.Qual animal é conhecido por construir represas e alterar o fluxo de rios?",
        "8.Quantas patas tem uma formiga?",
        "9.Qual é o animal mais lento do mundo?",
        "10.Onça é um animal brasileiro?"
    ];
    const correct = [
        "GUEPARDO",
        "CAMALEAO",
        "BALEIA AZUL",
        "PAPAGAIO",
        "8",
        "GIRAFA",
        "CASTOR",
        "6",
        "BICHO PREGUIÇA",
        "SIM"
    ]
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const answer = prompt(questions[i]);
        if (answer.toUpperCase() === correct[i]) {
            score++;
        }
    }
    document.getElementById("quizResult").innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
}