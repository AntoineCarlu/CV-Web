////////////////////////////////////////
//  Copy function on important infos  //

const adress = document.querySelector("#adress")
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

adress.addEventListener('click', function() {
  const adressText = "62360 Hesdin L'Abbé, France";
  navigator.clipboard.writeText(adressText);
  alert("Adresse copiée !");
});

email.addEventListener('click', function() {
  const emailP = email.querySelector("p");
  const emailText = emailP.innerText;
  navigator.clipboard.writeText(emailText);
  alert("Adresse e-Mail copiée !");
});

phone.addEventListener('click', function() {
  const phoneP = phone.querySelector("p");
  const phoneText = phoneP.innerText;
  navigator.clipboard.writeText(phoneText);
  alert("Numéro de téléphone copié !");
});

//                                    //
////////////////////////////////////////


////////////////////////////////////////////////
//  Script to display leftside bar on mobile  //

const leftside = document.getElementById("leftDesign");
const button = document.querySelector(".button");
const formationPosition = document.querySelectorAll(".fBlock");
const formationLine = document.querySelectorAll(".line");
//Event when click on the top-left button to display the leftside bar
button.addEventListener('click', function() {

  if (leftside.style.display === "none") {
    leftside.style.display = "block";
    button.setAttribute('class', 'button fa-solid fa-xmark');
    button.classList.remove('button');
    button.classList.add('buttonx');
    formationPosition.forEach(element => {
      element.style.position = "static";
    });
    formationLine.forEach(element => {
      element.style.display = "none";
    });
  } else {
        leftside.style.display = "none";
        button.setAttribute('class', 'buttonx fa-sharp fa-solid fa-bars');
        button.classList.remove('buttonx');
        button.classList.add('button');
        formationPosition.forEach(element => {
          element.style.position = "relative";
        });
        formationLine.forEach(element => {
          element.style.display = "block";
        });
    }
});



// DISPLAY:NONE THE #LEFTDESIGN IF WIDTH FORMAT UNDER 600PX //
function MediaQuerry(mq) {
  if (mq.matches) {
    leftside.style.display = 'none';
  } else {
    leftside.style.display = 'block';
  }
}
const mq = window.matchMedia('(max-width: 600px)');
MediaQuerry(mq); // check initial viewport width
mq.addListener(MediaQuerry); // listen for changes in viewport width

//                                            //
////////////////////////////////////////////////


//////////////////////////////////////
//  Buttons to open panel settings  //

const buttonSettings = document.querySelector(".settingsButton");
const panel = document.querySelector(".settings");

buttonSettings.addEventListener('click', function() {
  if (panel.style.display === "none") {
    panel.style.display = "block";
    panel.classList.add('animation');
    buttonSettings.classList.add('animation');
  } else {
    buttonSettings.classList.remove('animation');
    panel.classList.remove('animation');
    panel.style.display = "none";
  }
});

//                                  //
//////////////////////////////////////


//////////////////////////////////////////////////
//  Buttons to change colors in settings panel  //

const leftcolor = document.querySelector("#leftDesign");
const gradientcolor = document.querySelector("#headerTop");
const profil = document.querySelector("#profil");
const formation = document.querySelector("#formation");
const experience = document.querySelector("#experience");

const graybutton = document.getElementById("gray");
graybutton.addEventListener('click', function() {
  gradientcolor.style.background = `linear-gradient(0deg, white, rgba(17, 17, 17, 0.1) 5%, rgba(17, 17, 17, 0.2) 25%, rgba(17, 17, 17, 0.4))`;
  leftcolor.style.background = `rgba(40, 40, 40, 0.97)`;
  profil.style.boxShadow = `0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.2)`;
  formation.style.boxShadow = `0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.2)`;
  experience.style.boxShadow = `0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.2)`;
});

const redbutton = document.getElementById("red");
redbutton.addEventListener('click', function() {
  gradientcolor.style.background = `linear-gradient(0deg, white, rgba(255, 0, 0, 0.1) 5%, rgba(255, 0, 0, 0.2) 25%, rgba(255, 0, 0, 0.4))`;
  leftcolor.style.background = `rgba(139, 0, 0, 0.97)`;
  profil.style.boxShadow = `0 2px 8px 0 rgba(200, 0, 0, 0.2), 0 4px 10px 0 rgba(200, 0, 0, 0.2)`;
  formation.style.boxShadow = `0 2px 8px 0 rgba(200, 0, 0, 0.2), 0 4px 10px 0 rgba(200, 0, 0, 0.2)`;
  experience.style.boxShadow = `0 2px 8px 0 rgba(200, 0, 0, 0.2), 0 4px 10px 0 rgba(200, 0, 0, 0.2)`;
});

const bluebutton = document.getElementById("blue");
bluebutton.addEventListener('click', function() {
  gradientcolor.style.background = `linear-gradient(0deg, white, rgba(0, 0, 255, 0.1) 5%, rgba(0, 0, 255, 0.2) 25%, rgba(0, 0, 255, 0.4))`;
  leftcolor.style.background = `rgba(0, 0, 120, 0.97)`;
  profil.style.boxShadow = `0 2px 8px 0 rgba(0, 0, 200, 0.2), 0 4px 10px 0 rgba(0, 0, 200, 0.2)`;
  formation.style.boxShadow = `0 2px 8px 0 rgba(0, 0, 200, 0.2), 0 4px 10px 0 rgba(0, 0, 200, 0.2)`;
  experience.style.boxShadow = `0 2px 8px 0 rgba(0, 0, 200, 0.2), 0 4px 10px 0 rgba(0, 0, 200, 0.2)`;
});

const beigebutton = document.getElementById("beige");
beigebutton.addEventListener('click', function() {
  gradientcolor.style.background = `linear-gradient(0deg, white, rgb(198, 181, 168, 0.2) 5%, rgb(198, 181, 168, 0.4) 25%, rgb(198, 181, 168, 0.6))`;
  leftcolor.style.background = `rgb(169, 149, 133, 0.97)`;
  profil.style.boxShadow = `0 2px 8px 0 rgba(198, 181, 168, 0.5), 0 4px 10px 0 rgba(198, 181, 168, 0.5)`;
  formation.style.boxShadow = `0 2px 8px 0 rgba(198, 181, 168, 0.5), 0 4px 10px 0 rgba(198, 181, 168, 0.5)`;
  experience.style.boxShadow = `0 2px 8px 0 rgba(198, 181, 168, 0.5), 0 4px 10px 0 rgba(198, 181, 168, 0.5)`;
});

const orangebutton = document.getElementById("orange"); 
orangebutton.addEventListener('click', function() {
  gradientcolor.style.background = `linear-gradient(0deg, white, rgb(210, 80, 0, 0.1) 5%, rgb(210, 80, 0,0.2) 25%, rgb(210, 80, 0, 0.4))`;
  leftcolor.style.background = `rgb(210, 80, 0, 0.97)`;
  profil.style.boxShadow = `0 2px 8px 0 rgba(210, 80, 0, 0.2), 0 4px 10px 0 rgba(210, 80, 0, 0.2)`;
  formation.style.boxShadow = `0 2px 8px 0 rgba(210, 80, 0, 0.2), 0 4px 10px 0 rgba(210, 80, 0, 0.2)`;
  experience.style.boxShadow = `0 2px 8px 0 rgba(210, 80, 0, 0.2), 0 4px 10px 0 rgba(210, 80, 0, 0.2)`;
});

const purplebutton = document.getElementById("purple");
purplebutton.addEventListener('click', function() {
  gradientcolor.style.background = `linear-gradient(0deg, white, rgba(138, 43, 226, 0.1) 5%, rgba(138, 43, 226, 0.2) 25%, rgba(138, 43, 226, 0.4))`;
  leftcolor.style.background = `rgba(108, 23, 166, 0.97)`;
  profil.style.boxShadow = `0 2px 8px 0 rgba(108, 23, 166, 0.2), 0 4px 10px 0 rgba(108, 23, 166, 0.2)`;
  formation.style.boxShadow = `0 2px 8px 0 rgba(108, 23, 166, 0.2), 0 4px 10px 0 rgba(108, 23, 166, 0.2)`;
  experience.style.boxShadow = `0 2px 8px 0 rgba(108, 23, 166, 0.2), 0 4px 10px 0 rgba(108, 23, 166, 0.2)`;
});

//                                              //
//////////////////////////////////////////////////



////////////////////////////////////////////
//  Buttons to change language of the CV  //

const fr = document.getElementById("fr");
fr.addEventListener('click', function() {
  document.getElementById("headerP").innerHTML = `Développeur Web`;
  document.getElementById("headerI").innerHTML = `Permis B`;

  document.querySelector("#profil h2").innerHTML = `Mon Profil`;
  document.querySelector("#profil p").innerHTML = `Passionné par la réalisation de projets web, j'ai choisi la voie du développement web et de la programmation depuis le collège. Ma curiosité et mon désir d'en apprendre toujours plus, m'a fait découvrir de nombreux langages de programmation en formations professionnelles, ou découvertes personnelles.`;
  
  document.querySelector("#formation h2").innerHTML = `Éducation & Formations`;
  document.querySelector("#f1h3").innerHTML = `Collège Le Trion`;
  document.querySelector("#f1p1").innerHTML = `<em>62830 Samer </em>|<em> 2015 - 2019</em>`;
  document.querySelector("#f1p2").innerHTML = `Diplôme : Brevet des Collèges`;
  document.querySelector("#f2h3").innerHTML = `Lycée Edouard Branly`;
  document.querySelector("#f2p1").innerHTML = `<em>62200 Boulogne-Sur-Mer </em>|<em> 2019 - 2021</em>`;
  document.querySelector("#f2p2").innerHTML = `Voie Générale`;
  document.querySelector("#f2h3").innerHTML = `Lycée Edouard Branly`;
  document.querySelector("#f2p1").innerHTML = `<em>62200 Boulogne-Sur-Mer </em>|<em> 2019 - 2021</em>`;
  document.querySelector("#f2p2").innerHTML = `Voie Générale`;
  document.querySelector("#f3h3").innerHTML = `SAS Arduino`;
  document.querySelector("#f3p1").innerHTML = `<strong>Chez Criac</strong>`;
  document.querySelector("#f3p2").innerHTML = `<em>62230 Outreau </em>|<em> Octobre 2022 (2 semaines)</em>`;
  document.querySelector("#f3p3").innerHTML = `Formation non diplômante en <br>développement Front-End et Arduino`;
  document.querySelector("#f4h3").innerHTML = `Développeur Intégrateur Web`;
  document.querySelector("#f4p1").innerHTML = `<strong>Chez Simplon.co</strong>`;
  document.querySelector("#f4p2").innerHTML = `<em>62200 Boulogne-Sur-Mer </em>|<em> Mars 2023 (6 semaines)</em>`;
  document.querySelector("#f4p3").innerHTML = `Formation non diplômante en <br>développement d'Intégration Web`;
  document.querySelector("#f5h3").innerHTML = `Développeur Fullstack`;
  document.querySelector("#f5p1").innerHTML = `<strong>Chez Simplon.co</strong>`;
  document.querySelector("#f5p2").innerHTML = `<em>62200 Boulogne-Sur-Mer </em>|<em> Avril 2023 - Janvier 2024 (9 mois)</em>`;
  document.querySelector("#f5p3").innerHTML = `Formation diplômante en <br>développement Web Fullstack`;

  document.querySelector("#experience h2").innerHTML = `Expériences Professionnelles`;
  document.querySelector("#e1h3").innerHTML = `Stage en Développement web`;
  document.querySelector("#e1p1").innerHTML = `<strong>Chez Gavicy Conseil</strong>`;
  document.querySelector("#e1p2").innerHTML = `<em>En distanciel </em>|<em> 01 Septembre 2023 - 27 Novembre 2023 (3 mois)</em>`;
  document.querySelector("#e1p3").innerHTML = `Développement d'un Portail d'applications de l'entreprise Gavicy Conseil, statique, dynamique et adaptable, avec la conception d'une maquette, tout cela en répondant aux demandes du client <br>Framework utilisé : Angular 15`;

  document.querySelector("#hardskills h2").innerHTML = `Compétences <br>Techniques`;
  document.querySelector("#hardskills ul").innerHTML = `<li>Utilisation de langages <br>de développement Web (HTML5 / CSS3 / JS / JSX)</li><li>Utilisation de frameworks <br>de développement Web (React / Next.js / Angular)</li><li>Développement et intégration de base de données (MongoDB / MySQL)</li><li>Développement Fullstack de site web Statique ou Dynamique, et Adaptable</li><li>Intégration Web en Front-End</li><li>Maquettage (Figma)</li>`;
  document.querySelector("#softskills h2").innerHTML = `Compétences <br>Transversales`;
  document.querySelector("#softskills ul").innerHTML = `<li>Capacité d'adaptation et autonomie</li><li>Créativité et minutie</li><li>Esprit logique et analytique</li><li>Recherches Web et <br>mise à niveau de ses connaissances</li><li>Ouvert d'esprit et à l'écoute</li>`;
  
  document.querySelector("#languages h2").innerHTML = `Langues`;
  document.querySelector("#lfr").innerHTML = `Français`;
  document.querySelector("#frp").innerHTML = `Langue native`;
  document.querySelector("#len").innerHTML = `Anglais`;
  document.querySelector("#enp").innerHTML = `Niveau avancé`;

  document.querySelector("#passions h2").innerHTML = `Passions`;
  document.querySelector("#passion1").innerHTML = `Espace`;
  document.querySelector("#passion2").innerHTML = `Voyage`;
  document.querySelector("#passion3").innerHTML = `Lecture`;
  document.querySelector("#passion4").innerHTML = `Écriture`;

  document.querySelector("#personnalLinks h2").innerHTML = `Liens Personnels`;
});

const en = document.getElementById("en");
en.addEventListener('click', function() {
  document.getElementById("headerP").innerHTML = `Web Developer`;
  document.getElementById("headerI").innerHTML = `B Permit`;
  
  document.querySelector("#profil h2").innerHTML = `My Profil`;
  document.querySelector("#profil p").innerHTML = `Passionate about web projects, I have chosen the path of web development and programming since the college. My curiosity and my desire to learn more and more, made me discover many programming languages in professional formation, or personal discoveries.`;
  
  document.querySelector("#formation h2").innerHTML = `Education & Formations`;
  document.querySelector("#f1h3").innerHTML = `College Le Trion`;
  document.querySelector("#f1p1").innerHTML = `<em>62830 Samer </em>|<em> 2015 - 2019</em>`;
  document.querySelector("#f1p2").innerHTML = `Graduation : DNB (Equivalent of the GCSE)`;
  document.querySelector("#f2h3").innerHTML = `High School Edouard Branly`;
  document.querySelector("#f2p1").innerHTML = `<em>62200 Boulogne-Sur-Mer </em>|<em> 2019 - 2021</em>`;
  document.querySelector("#f2p2").innerHTML = `General Education`;
  document.querySelector("#f3h3").innerHTML = `SAS Arduino`;
  document.querySelector("#f3p1").innerHTML = `<strong>At Criac</strong>`;
  document.querySelector("#f3p2").innerHTML = `<em>62230 Outreau </em>|<em> October 2022 (2 weeks)</em>`;
  document.querySelector("#f3p3").innerHTML = `Non-degree formation in <br>Front-End and Arduino development`;
  document.querySelector("#f4h3").innerHTML = `Web Integrator Developer`;
  document.querySelector("#f4p1").innerHTML = `<strong>At Simplon.co</strong>`;
  document.querySelector("#f4p2").innerHTML = `<em>62200 Boulogne-Sur-Mer </em>|<em> March 2023 (6 weeks)</em>`;
  document.querySelector("#f4p3").innerHTML = `Non-degree formation in <br>Web Integration development`;
  document.querySelector("#f5h3").innerHTML = `Fullstack Developer`;
  document.querySelector("#f5p1").innerHTML = `<strong>At Simplon.co</strong>`;
  document.querySelector("#f5p2").innerHTML = `<em>62200 Boulogne-Sur-Mer </em>|<em> April 2023 - January 2024 (9 months)</em>`;
  document.querySelector("#f5p3").innerHTML = `Degree formation in <br>Fullstack Web development`;

  document.querySelector("#experience h2").innerHTML = `Professional Experiences`;
  document.querySelector("#e1h3").innerHTML = `Internship in Web Development`;
  document.querySelector("#e1p1").innerHTML = `<strong>At Gavicy Conseil</strong>`;
  document.querySelector("#e1p2").innerHTML = `<em>In remote </em>|<em> September 01, 2023 - November 27, 2023 (3 months)</em>`;
  document.querySelector("#e1p3").innerHTML = `Development of a static, dynamic, and adaptable application portal for Gavicy Conseil, including the conception of a prototype design <br>Framework used : Angular 15`;

  document.querySelector("#hardskills h2").innerHTML = `Hard Skills`;
  document.querySelector("#hardskills ul").innerHTML = `<li>Web development languages<br>(HTML5 / CSS3 / JS / JSX)</li><li>Utilization of Web development Frameworks (React / Next.js / Angular)</li><li>Database development and integration (MongoDB / MySQL)</li><li>Fullstack development in Static or Dynamic, and Responsive Websites</li><li>Web Integration (Front-End)</li><li>Prototyping (Figma)</li>`;
  document.querySelector("#softskills h2").innerHTML = `Soft Skills`;
  document.querySelector("#softskills ul").innerHTML = `<li>Adaptability and autonomy</li><li>Creativity and thoroughness</li><li>Logical and analytical thinking</li><li>Web researches and <br>knowledge updating</li><li>Open-minded and listening to others</li>`;
  
  document.querySelector("#languages h2").innerHTML = `Languages`;
  document.querySelector("#lfr").innerHTML = `French`;
  document.querySelector("#frp").innerHTML = `Native language`;
  document.querySelector("#len").innerHTML = `English`;
  document.querySelector("#enp").innerHTML = `Advanced level`;

  document.querySelector("#passions h2").innerHTML = `Passions`;
  document.querySelector("#passion1").innerHTML = `Space`;
  document.querySelector("#passion2").innerHTML = `Travel`;
  document.querySelector("#passion3").innerHTML = `Reading`;
  document.querySelector("#passion4").innerHTML = `Writing`;

  document.querySelector("#personnalLinks h2").innerHTML = `Personnals Links`;
});

//                                        //
////////////////////////////////////////////



////////////////////////////////////
//  Buttons to change skill list  //

const HardSkills = document.getElementById("hsButton");
const SoftSkills = document.getElementById("ssButton");
const HardList = document.querySelector("#hardskills");
const SoftList = document.querySelector("#softskills");

HardSkills.addEventListener('click', function() {
  if (HardList.style.display === "none") {
    SoftList.style.display = "none";
    HardList.style.display = "block";
    HardSkills.style.background = `rgb(170, 170, 170)`;
    SoftSkills.style.background = `rgb(255, 255, 255)`;
    HardSkills.style.cursor = "default";
    SoftSkills.style.cursor = "pointer";
  }
});

SoftSkills.addEventListener('click', function() {
  if (SoftList.style.display === "none") {
    HardList.style.display = "none";
    SoftList.style.display = "block";
    SoftSkills.style.background = `rgb(170, 170, 170)`;
    HardSkills.style.background = `rgb(255, 255, 255)`;
    SoftSkills.style.cursor = "default";
    HardSkills.style.cursor = "pointer";
  }
});

// DISPLAY:NONE THE #SOFTSKILLS IF WIDTH FORMAT ABOVE 600PX //
function MediaQuerry2(mq2) {
  const SoftList = document.querySelector("#softskills"); 
  if (mq2.matches) {
    SoftList.style.display = 'block';
  } else {
    SoftList.style.display = 'none';
  }
}
const mq2 = window.matchMedia('(max-width: 600px)');
MediaQuerry2(mq2); // check initial viewport width
mq2.addListener(MediaQuerry2); // listen for changes in viewport width

//                                //
////////////////////////////////////
