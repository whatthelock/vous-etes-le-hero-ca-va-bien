/*Tu te reveille un doux matin de printemps, le soleil illumine doucement ta chambre avec de beaux faissauts lumineux. */
const firstchapter = {
  subtitle: "La pandémie annoncée",
  text: "En descandant pour dejeuner tu apprends une grave nouvelle: UNE PANDÉMIE MONDIALE VIENT D'ÊTRE ANNONCÉ TU DOIS TOUT FAIRE EN TON POUVOIR POUR TE PROTEGER TOI ET TA FAMILLE",
  img: "",
  options: [
    (ecole = {
      text: "Sécher les cours par protection",
      action: "goToChapter('arivee_ecole')",
    }),
  ],
};

const journeMaison = {
  subtitle: "Ta journée à la maison",
  text: "Maintenant que tu ne va plus a l'école, tu dois trouver quelque chose a manger. Tu va regarder dans ton frigo...OH MALHEUR!!! I ne reste plus rine à manger dans ta maison!!!! QUe va tu faire!?",
  img: "",
};

const choix_bouffe = {
  subtitle: "Aventure à l'épicerie",
  text: "Tu viens tout juste de renter à l'épicerie, malheureusement du a la pandémie, la majorité des items ont déja été venduent!! De plus tu réalise que tu as oublié ton porte-feuille à la maison.... Tu dois donc te limiter a un items et choisir dans l'inventaire très renstraint:",
  img: "",
};

const arivéeÉcole = {
  subtitle:
    "Tu viens d'arriver à l'école, de manière a faire attention a la pandémie tu dois choisir ton occupation judicieusement; tu peux aller dans ta petite classe fermer pour assister a ton cours, tu peux aller vers la cafétéria ou tu pourra travailler sur tes devoirs et avoir plus d'espace ou encore aller dehors...",
  text: "",
  img: "",
};

const vaccin = {
  subtitle: "Offre vaccinale",
  text: "En arrivant à la cafétéria, tu croise un clinique de vaccination qui t'offre un vaccin sur place. Le vaccin semble légérement louche, l'accepte tu malgré ta phobie des aiguilles??",
  img: "",
};

const chapterObj = {
  arivee_ecole: arivéeÉcole,
  journee_a_maison: journeMaison,
  aventure_epicerie: choix_bouffe,
};

function goToChapter(chapterName) {
  const chapitre = chapterObj.chapterName;
  console.log(chapitre.subtitle);
  console.log(chapitre.text);
}
