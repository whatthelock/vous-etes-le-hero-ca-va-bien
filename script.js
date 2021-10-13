/*Tu te reveille un doux matin de printemps, le soleil illumine doucement ta chambre avec de beaux faissauts lumineux. */
const chapterObj = {
  /*Tu te reveille un doux matin de printemps, le soleil illumine doucement ta chambre avec de beaux faissauts lumineux. */
  annonce_pandemie: firstchapter = {
    subtitle: "La pandémie annoncée",
    text: "En descandant pour dejeuner tu apprends une grave nouvelle: UNE PANDÉMIE MONDIALE VIENT D'ÊTRE ANNONCÉ TU DOIS TOUT FAIRE EN TON POUVOIR POUR TE PROTEGER TOI ET TA FAMILLE",
    img: "pandemie",
    options: [
      {
        text: "Sécher les cours par protection",
        action: "goToChapter('journee_a_maison')",
      },
      {
        text: "Aller à l'école quand même",
        action: "goToChapter('arivee_ecole')",
      },
    ],
  },

  journee_a_maison: journeMaison = {
    subtitle: "Ta journée à la maison",
    text: "Maintenant que tu ne va plus a l'école, tu dois trouver quelque chose a manger. Tu va regarder dans ton frigo...OH MALHEUR!!! I ne reste plus rine à manger dans ta maison!!!! QUe va tu faire!?",
    img: "frigo",
    options: [
      {
        text: "commender de la nourriture",
        action: "goToChapter('you_die')",
      },
      {
        text: "Aller à l'épicerie",
        action: "goToChapter('aventure_epicerie')",
      },
    ],
  },

  aventure_epicerie: choix_bouffe = {
    subtitle: "Aventure à l'épicerie",
    text: "Tu viens tout juste de renter à l'épicerie, malheureusement du a la pandémie, la majorité des items ont déja été venduent!! De plus tu réalise que tu as oublié ton porte-feuille à la maison.... Tu dois donc te limiter a un items et choisir dans l'inventaire très renstraint:",
    img: "epicerie",
    options: [
      {
        text: "banane",
        action: "goToChapter('you_die')",
      },
      {
        text: "Pain brun",
        action: "goToChapter('retour_maison')",
      },
    ],
  },

  arivee_ecole: arivéeÉcole = {
    subtitle: "Arrivée à l'école",
    text: "Tu viens d'arriver à l'école, de manière a faire attention a la pandémie tu dois choisir ton occupation judicieusement; tu peux aller dans ta petite classe fermer pour assister a ton cours, tu peux aller vers la cafétéria ou tu pourra travailler sur tes devoirs et avoir plus d'espace ou encore aller dehors...",
    img: "ecole",
    options: [
      {
        text: "aller en classe",
        action: "goToChapter('you_die')",
      },
      {
        text: "Aller a la cafétéria",
        action: "goToChapter('offre_vaccinale')",
      },
      {
        text: "Pain brun",
        action: "goToChapter('you_die')",
      },
    ],
  },

  offre_vaccinale: vaccin = {
    subtitle: "Offre vaccinale",
    text: "En arrivant à la cafétéria, tu croise un clinique de vaccination qui t'offre un vaccin sur place. Le vaccin semble légérement louche, l'accepte tu malgré ta phobie des aiguilles??",
    img: "vaccin",
    options: [
      {
        text: "aller en classe",
        action: "goToChapter('retour_maison')",
      },
      {
        text: "Aller a la cafétéria",
        action: "goToChapter('offre_vaccinale')",
      },
      {
        text: "Aller dehors",
        action: "goToChapter('you_die')",
      },
    ],
  },
  
  you_die: mort = {
    subtitle: "VOUS ETES MORT",
    text: "Tu as atttrapé la maladie, après de long jour à l'hopital à t'accrocher à la vie entouré de ta famille cher, la pandemie a eu raion de toi, repose en paix.",
    img: "rip",
  },

  retour_maison: retour = {
    subtitle: "Retour à la maison",
    text: "De retour a la maison, tu réalise que tu absolument te rendre à la fête de ton meilleur ami organisée depuis longtemps",
    img: "fete",
    /* Si vacciner tu gagne, autrement tu meurt, aucun choix*/
  },
};

function goToChapter(chapterName) {
  const chapitre = chapterObj[chapterName];

  console.log(chapitre.subtitle);
  console.log(chapitre.options);

  const title = document.querySelector('.chapterName');
  title.innerHTML = chapitre.subtitle;

  const desc = document.querySelector('.description');
  desc.innerHTML = chapitre.text;

  const imgHtml = document.querySelector('.holder-img');
  imgHtml.innerHTML = `<img src="assets/${chapitre.img}.jpg" alt="covid">`;

  const optArr = chapitre.options;
  const optionBar = document.querySelector('.option-bar');

  for (let index = 0; index < optArr.length; index++){
    const opt = optArr[index];

    optionBar.insertAdjacentHTML('beforeend', `<input class="button" type="submit" value="${opt.text}" onclick="${opt.action}">`);
  }
}

