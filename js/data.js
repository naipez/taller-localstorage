document.addEventListener("DOMContentLoaded", function () {
    const texto = localStorage.getItem("dato");
    if (texto) {
        document.getElementById("data").textContent = texto;
    }
})

