const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const img = document.getElementById("img1");
const h1 = document.getElementById("h1");
const audio = document.getElementById("sound");
const heart = document.getElementById("heart");

function Ahuela() {
    button1.style.width = "100%";
    button1.style.height = "100%";
    button1.style.cursor = "pointer";
    button1.style.color = "#ffffff"
    button1.style.backgroundColor = "#E01010FF"
    button1.style.fontWeight = "bold"
    button1.textContent = 'Я СКАЗАЛ "ДА"'
    button1.style.fontSize = "100px";
    button2.remove();
    audio.play(); // Добавляем звук при клике
    img.src = "esli-muzhchina-zamahivaetsya-na-zhenshhinu.png"
}

function NeAhuela() {
    h1.textContent = "УРАААА";
    h1.style.color = "#09dc09"
    img.src = "Agu.gif";
    button1.remove();
    button2.remove();
    audio.play(); // Добавляем звук при клике
}

document.addEventListener("DOMContentLoaded", function() {
    audio.volume = 0.3;
});

