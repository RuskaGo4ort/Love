const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const img = document.getElementById("img1");
const h1 = document.getElementById("h1");


function Ahuela() {
    button1.style.width = "2000px";
    button1.style.height = "2000px";
    button1.style.cursor = "pointer";
    button1.style.color = "#ffffff"
    button1.style.backgroundColor = "#E01010FF"
    button1.style.fontWeight = "bold"
    button1.textContent = 'Я СКАЗАЛ "ДА"'
    button1.style.fontSize = "100px";
    button2.remove()
}
function NeAhuela() {
    h1.textContent = "УРАААА";
    h1.style.color = "#09dc09"
    img.src = "Agu.gif";
    button1.remove()
    button2.remove()

}
