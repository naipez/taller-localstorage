const guardar = document.getElementById("buttonText");

guardar.addEventListener("click", () => {
   const texto = document.getElementById("inputText").value.trim();
    localStorage.setItem("dato", texto);
});