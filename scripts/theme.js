function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

document.getElementById("changeColorBtn").addEventListener("click", function() {
    document.getElementById("mainBody").classList.remove("bg-gray-100");
    document.getElementById("mainBody").style.backgroundColor = getRandomHexColor();
});