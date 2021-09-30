/*Tu te reveille un doux matin de printemps, le soleil illumine doucement ta chambre avec de beaux faissauts lumineux. */
const firstchapter = {
  subtitle: "La pandémie annoncée",
  text: "En descandant pour dejeuner tu apprends une grave nouvelle: UNE PANDÉMIE MONDIALE VIENT D'ÊTRE ANNONCÉ TU DOIS TOUT FAIRE EN TON POUVOIR POUR TE PROTEGER TOI ET TA FAMILLE",
  img: "pandemie.jpg",
  options: [
    (maison = {
      text: "Sécher les cours par protection",
      action: "goToChapter('journee_a_maison')",
    }),
    (ecole = {
      text: "Aller à l'école quand même",
      action: "goToChapter('arivee_ecole')",
    }),
  ],
};

const journeMaison = {
  subtitle: "Ta journée à la maison",
  text: "Maintenant que tu ne va plus a l'école, tu dois trouver quelque chose a manger. Tu va regarder dans ton frigo...OH MALHEUR!!! I ne reste plus rine à manger dans ta maison!!!! QUe va tu faire!?",
  img: "frigo.jpg",

  options: [
    (commender = {
      text: "commender de la nourriture",
      action: "goToChapter('you_die')",
    }),
    (epicerie = {
      text: "Aller à l'épicerie",
      action: "goToChapter('aventure_epicerie')",
    }),
  ],
};

const choix_bouffe = {
  subtitle: "Aventure à l'épicerie",
  text: "Tu viens tout juste de renter à l'épicerie, malheureusement du a la pandémie, la majorité des items ont déja été venduent!! De plus tu réalise que tu as oublié ton porte-feuille à la maison.... Tu dois donc te limiter a un items et choisir dans l'inventaire très renstraint:",
  img: "epicerie.jpg",

  options: [
    (bananes = {
      text: "banane",
      action: "goToChapter('you_die')",
    }),
    (pain = {
      text: "Pain brun",
      action: "goToChapter('retour_maison')",
    }),
  ],
};

const arivéeÉcole = {
  subtitle: "Arrivée à l'école",
  text: "Tu viens d'arriver à l'école, de manière a faire attention a la pandémie tu dois choisir ton occupation judicieusement; tu peux aller dans ta petite classe fermer pour assister a ton cours, tu peux aller vers la cafétéria ou tu pourra travailler sur tes devoirs et avoir plus d'espace ou encore aller dehors...",
  img: "ecole.jpg",

  options: [
    (classe = {
      text: "aller en classe",
      action: "goToChapter('you_die')",
    }),
    (cafet = {
      text: "Aller a la cafétéria",
      action: "goToChapter('offre_vaccinale')",
    }),
    (dehors = {
      text: "Pain brun",
      action: "goToChapter('you_die')",
    }),
  ],
};

const vaccin = {
  subtitle: "Offre vaccinale",
  text: "En arrivant à la cafétéria, tu croise un clinique de vaccination qui t'offre un vaccin sur place. Le vaccin semble légérement louche, l'accepte tu malgré ta phobie des aiguilles??",
  img: "vaccin.jpg",

  options: [
    (classe = {
      text: "aller en classe",
      action: "goToChapter('retour_maison')",
    }),
    (cafet = {
      text: "Aller a la cafétéria",
      action: "goToChapter('offre_vaccinale')",
    }),
    (dehors = {
      text: "Aller dehors",
      action: "goToChapter('you_die')",
    }),
  ],
};

const vaccin = {
  subtitle: "Offre vaccinale",
  text: "En arrivant à la cafétéria, tu croise un clinique de vaccination qui t'offre un vaccin sur place. Le vaccin semble légérement louche, l'accepte tu malgré ta phobie des aiguilles??",
  img: "vaccin.jpg",
};

const mort = {
  subtitle: "VOUS ETES MORT",
  text: "Vous avez atttrapé la maladie, après de long jour à l'hopital à vous accrocher à la vie entouré de votre famille cher, la pandemie a eu raion de vous, reposer en paix.",
  img: "rip.jpg",
};

const chapterObj = {
  arivee_ecole: arivéeÉcole,
  journee_a_maison: journeMaison,
  aventure_epicerie: choix_bouffe,
  offre_vaccinale: vaccin,
  annonce_pandemie: firstchapter,
  you_die: mort,
};

function goToChapter(chapterName) {
  const chapitre = chapterObj.chapterName;
  console.log(chapitre.subtitle);
  console.log(chapitre.text);
}
