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


let temperature = 50;
let tachesRestantes = 6;

const zoneJeu = document.querySelector("#zone-jeu");
const affichageTemp = document.querySelector("#temperature");
const messageJeu = document.querySelector("#message-jeu");
const boutonsServeur = document.querySelectorAll(".action-serveur");

function jouerAction(changement, bouton) {
  temperature = temperature + changement;
  tachesRestantes = tachesRestantes - 1;
  affichageTemp.textContent = temperature;
  bouton.disabled = true;

  if (temperature >= 100) {
    messageJeu.textContent = "Surchauffe ! Le datacenter a planté à " + temperature + " °C.";
    zoneJeu.classList.add("surchauffe");
    for (const b of boutonsServeur) {
      b.disabled = true;
    }
  } else if (tachesRestantes === 0) {
    messageJeu.textContent = "Bravo ! Toutes les tâches sont finies à " + temperature + " °C.";
    zoneJeu.classList.add("victoire");
  } else {
    messageJeu.textContent = "Il reste " + tachesRestantes + " tâche(s) à exécuter.";
  }
}

document.querySelector("#tache-1").addEventListener("click", function () {
  jouerAction(30, document.querySelector("#tache-1"));
});

document.querySelector("#tache-2").addEventListener("click", function () {
  jouerAction(25, document.querySelector("#tache-2"));
});

document.querySelector("#tache-3").addEventListener("click", function () {
  jouerAction(20, document.querySelector("#tache-3"));
});

document.querySelector("#tache-4").addEventListener("click", function () {
  jouerAction(-20, document.querySelector("#tache-4"));
});

document.querySelector("#tache-5").addEventListener("click", function () {
  jouerAction(-15, document.querySelector("#tache-5"));
});

document.querySelector("#tache-6").addEventListener("click", function () {
  jouerAction(-10, document.querySelector("#tache-6"));
});

document.querySelector("#bouton-rejouer").addEventListener("click", function () {
  temperature = 50;
  tachesRestantes = 6;
  affichageTemp.textContent = temperature;
  messageJeu.textContent = "Choisis une première action.";
  zoneJeu.classList.remove("surchauffe");
  zoneJeu.classList.remove("victoire");

  for (const b of boutonsServeur) {
    b.disabled = false;
  }
});