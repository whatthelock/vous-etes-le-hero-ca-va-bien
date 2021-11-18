/*Tu te reveille un doux matin de printemps, le soleil illumine doucement ta chambre avec de beaux faissauts lumineux. */

let vaccineFounded = ""

//console.log(vaccineFounded);

function findingVaccine() {
  vaccineFounded = true;
  localStorage.setItem("vaccine", vaccineFounded);
  console.log(localStorage.getItem("vaccine"));
  goToChapter('retour_maison');
}

function losingVaccine() {
  vaccineFounded = false;
  localStorage.setItem("vaccine", vaccineFounded);
  console.log("thefuck");
  goToChapter('le_reveil');
}

function passeportVaccinal(){
  console.log(vaccineFounded);
  if (vaccineFounded == true){
    console.log("go");
    goToChapter('chapitre_final');
  }
  else if(vaccineFounded == false){
    goToChapter('you_die');
  }
}

if(localStorage.getItem("vaccine") != undefined){
  console.log(localStorage.getItem("vaccine"));
  vaccineFounded = localStorage.getItem("vaccine");
  console.log(vaccineFounded);
}
else {
  vaccineFounded = false;
  console.log(vaccineFounded);
};

const chapterObj = {
  /*Tu te reveille un doux matin de printemps, le soleil illumine doucement ta chambre avec de beaux faissauts lumineux. */
  le_reveil: {
    subtitle: "Le réveil",
    text: "Tu te reveille un doux matin de printemps, le soleil illumine doucement ta chambre avec de beaux faissauts lumineux.",
    img: "chambre",
    video: "reveil",
    options: [
      {
        text: "Descendre pour dejeuner",
        action: "goToChapter('annonce_pandemie')",
      },
    ],
  },

  annonce_pandemie: {
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

  journee_a_maison: {
    subtitle: "Ta journée à la maison",
    text: "Maintenant que tu ne va plus a l'école, tu dois trouver quelque chose a manger. Tu va regarder dans ton frigo...OH MALHEUR!!! I ne reste plus rine à manger dans ta maison!!!! QUe va tu faire!?",
    img: "frigo",
    options: [
      {
        text: "commender de la nourriture",
        action: "goToChapter('livreur_mort')",
      },
      {
        text: "Aller à l'épicerie",
        action: "goToChapter('aventure_epicerie')",
      },
    ],
  },

  livreur_mort: {
    subtitle: "Livraison",
    text: "Après avoir commendé et attendu plusieurs minutes, on sonne chez toi. C'est ta nourriture!! Malheureusement, en prennant ta commande, le livreur te tousse deçu! Dans le doute, tu va passer un test",
    img: "ubereat",
    options: [
      {
        text: "Recevor les résultats",
        action: "goToChapter('you_die')",
      },
    ],
  },

  aventure_epicerie: {
    subtitle: "Aventure à l'épicerie",
    text: "Tu viens tout juste de renter à l'épicerie, malheureusement du a la pandémie, la majorité des items ont déja été venduent!! De plus tu réalise que tu as oublié ton porte-feuille à la maison.... Tu dois donc te limiter a un items et choisir dans l'inventaire très renstraint:",
    img: "epicerie",
    options: [
      {
        text: "banane",
        action: "goToChapter('banane_mort')",
      },
      {
        text: "Pain brun",
        action: "goToChapter('retour_maison')",
      },
    ],
  },

  banane_mort: {
    subtitle: "Banane",
    text: "En arrivant vers la rangée ou se trouve les bananes, un personne qui ne voulait pas suivre les flèches indiiqué au sol vous eurte et vous éternu au visage. Stressé et sur le bors de la panique, tu te rends rapidement à la station de dépistage la plus proche",
    img: "banane",
    video: "banana",
    options: [
      {
        text: "regarder les résultats",
        action: "goToChapter('you_die')",
      },
    ],
  },

  arivee_ecole: {
    subtitle: "Arrivée à l'école",
    text: "Tu viens d'arriver à l'école, de manière à faire attention a la pandémie tu dois choisir ton occupation judicieusement; tu peux aller dans ta petite classe fermer pour assister a ton cours, tu peux aller vers la cafétéria ou tu pourra travailler sur tes devoirs et avoir plus d'espace ou encore aller dehors...",
    img: "ecole",
    options: [
      {
        text: "aller en classe",
        action: "goToChapter('en_classe')",
      },
      {
        text: "Aller a la cafétéria",
        action: "goToChapter('offre_vaccinale')",
      },
      {
        text: "Aller dehors",
        action: "goToChapter('dehors_mort')",
      },
    ],
  },

 dehors_mort: {
    subtitle: "Arrivée à l'école",
    text: "Ahhhh, l'air frais de l'extérieur. Tu te send beaucoup plus en sécurité maintenant que tu es à libre. Soundainement, un grand groupe d'amis viennent vers toi et t'encercle. As ce moment la personne la plus proche de toi avoue avoir des symptôme très similaire à la grave maladie qui rode autour de toi. Tu te dépêche donc d'aller te faire dépister.",
    img: "cours",
    options: [
      {
        text: "Voir les résultats",
        action: "goToChapter('you_die')",
      },
    ],
  },

  en_classe: {
    subtitle: "En classe",
    text: "Un fois arrivé en classe, tu es surpris de voir que tout le monde porte un masque et se tiens à distance, ce qui te permet d'apprendre ta nouvelle matière de manière sécutiraire et de continuer ta journée sans tracas. Tu retourne donc chez toi.",
    img: "classe",
    options: [
      {
        text: "aller vers ta maison",
        action: "goToChapter('retour_maison')",
      },
    ],
  },

  offre_vaccinale: {
    subtitle: "Offre vaccinale",
    text: "En arrivant à la cafétéria, tu croise un clinique de vaccination qui t'offre un vaccin sur place. Le vaccin semble légérement louche, l'accepte tu malgré ta phobie des aiguilles??",
    img: "vaccin",
    options: [
      {
        text: "Tu accepte",
        action: "findingVaccine()",
      },
      {
        text: "Tu refuse",
        action: "goToChapter('retour_maison')",
      },
    ],
  },
  
  you_die: {
    subtitle: "VOUS ETES MORT",
    text: "Tu as atttrapé la maladie, après de long jour à l'hopital à t'accrocher à la vie entouré de ta famille cher, la pandemie a eu raion de toi, repose en paix.",
    img: "rip",
    options: [
      {
        text: "recommencer",
        action: "goToChapter('le_reveil')",
      },
    ]
  },

  retour_maison: {
    subtitle: "Retour à la maison",
    text: "De retour a la maison, tu réalise que tu absolument te rendre à la fête de ton meilleur ami ,organisée depuis longtemps, tu n'as vraiment pas le choix, en espérant que tu es vacciné...",
    img: "calendrier",
    options: [
      {
        text: "Y aller",
        action: "passeportVaccinal()",
      },
    ]
    /* Si vacciner tu gagne, autrement tu meurt, aucun choix*/
  },

  chapitre_final: {
    subtitle: "Retour à la maison",
    text: "Youpi! Grace a ton vaccin tu as pu te rendre sans risque à cette fête attendu depuis si longtemps!! Félicitation! Grace à ton comportent exemplaire tu as pu sortir de cette pandémie!",
    img: "fete",
    options: [
      {
        text: "recommener?",
        action: "losingVaccine()",
      },
    ]
  }
};

const audio = new Audio('assets/bip.mp3');



function goToChapter(chapterName) {
  const chapitre = chapterObj[chapterName];

  const title = document.querySelector('.chapterName');
  title.innerHTML = chapitre.subtitle;

  const desc = document.querySelector('.description');
  desc.innerHTML = chapitre.text;

  const imgHtml = document.querySelector('.holder-img');
  imgHtml.innerHTML = `<img src="assets/${chapitre.img}.jpg" alt="${chapitre.img}" class="contain-image">`;

  const optArr = chapitre.options;
  
  let optionBout = "";

  for (let index = 0; index < optArr.length; index++){
    const opt = optArr[index];
    optionBout += `<input class="button" type="submit" value="${opt.text}" onclick="${opt.action}">`;
  }
  let optionBar= document.querySelector('.option-bar')
  optionBar.innerHTML = optionBout;
  
  if(chapitre.video != undefined){
    imgHtml.innerHTML = `<video src="assets/${chapitre.video}.mp4" loop muted autoplay class="contain-image">></video>`;
  }

  audio.play();
  audio.currentTime = 0;

  localStorage.setItem("chaptName", chapterName);
  
}

if(localStorage.getItem("chaptName") != undefined){
  const chaptName = localStorage.getItem("chaptName");
  goToChapter(chaptName);
}
else{
  goToChapter('le_reveil');
};

