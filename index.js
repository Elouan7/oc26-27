console.log("script");

const boutonTheme = document.querySelector("#bouton-theme");

boutonTheme.addEventListener("click", function () {
  // Étape 7 : basculer la classe "sombre" sur le <body>
  document.body.classList.toggle("sombre");

  // Étape 8 : changer le texte du bouton selon l'état de la page
  if (document.body.classList.contains("sombre")) {
    boutonTheme.textContent = "Mode clair";
  } else {
    boutonTheme.textContent = "Mode sombre";
  }
});


const curseur = document.querySelector("#curseur-taille");
const valeurTaille = document.querySelector("#valeur-taille");

curseur.addEventListener("input", function () {
  document.body.style.fontSize = curseur.value + "%";
  valeurTaille.textContent = curseur.value + "%";
});