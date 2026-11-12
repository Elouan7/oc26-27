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


const heure = new Date().getHours();
const salutation = document.querySelector("#salutation");

if (heure < 12) {
  salutation.textContent = "Bonjour, bonne lecture !";
} else if (heure < 18) {
  salutation.textContent = "Bon après-midi, bonne lecture !";
} else {
  salutation.textContent = "Bonsoir, bonne lecture !";
}


const POIDS_PAGE_MO = 2;
const champ = document.querySelector("#pages-par-jour");
const resultat = document.querySelector("#resultat");

document.querySelector("#bouton-calculer").addEventListener("click", function () {
  const pages = Number(champ.value);
  const goParAn = Math.round((pages * POIDS_PAGE_MO * 365) / 1000);

  let message = "Environ " + goParAn + " Go par an. ";

  if (goParAn < 15) {
    message = message + "C'est une navigation très sobre !";
  } else if (goParAn < 50) {
    message = message + "Et ce ne sont que des pages : les vidéos pèsent beaucoup plus.";
  } else {
    message = message + "C'est beaucoup : pensez à limiter les pages lourdes.";
  }

  resultat.textContent = message;
});


let score = 0;
const reponses = document.querySelectorAll(".reponse");

for (const bouton of reponses) {
  bouton.addEventListener("click", function () {
    if (bouton.classList.contains("juste")) {
      bouton.classList.add("vert");
      score = score + 1;
      document.querySelector("#score").textContent = "Score : " + score;
    } else {
      bouton.classList.add("rouge");
    }
    bouton.disabled = true;
  });
}