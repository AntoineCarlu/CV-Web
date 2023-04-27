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
//Event when click on the top-left button to display the leftside bar
button.addEventListener('click', function() {

  if (leftside.style.display === "none") {
    leftside.style.display = "block";
    button.setAttribute('class', 'button fa-solid fa-xmark');
    button.classList.remove('button');
    button.classList.add('buttonx');
  } else {
        leftside.style.display = "none";
        button.setAttribute('class', 'buttonx fa-sharp fa-solid fa-bars');
        button.classList.remove('buttonx');
        button.classList.add('button');
    }
});



// DISPLAY:NONE THE #LEFTDESIGN IF WIDTH FORMAT UNDER 500PX //
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
  document.querySelector("#profil p").innerHTML = `Passionné par la réalisation de projets web, j'ai choisi la voie du développement web et de la programmation depuis l'âge du collège. Ma curiosité et mon désir d'en apprendre toujours plus, m'a fait découvrir de nombreux langages de programmation en formations professionnelles, ou découvertes personnelles.`;
  document.querySelector("#formation h2").innerHTML = `Éducation & Formations`;
  document.querySelector("#formation p").innerHTML = `XXX`;
  document.querySelector("#experience h2").innerHTML = `Expériences Professionnelles`;
  document.querySelector("#experience p").innerHTML = `XXX`;
  document.querySelector("#hardskills h2").innerHTML = `Compétences Techniques`;
  document.querySelector("#hardskills ul").innerHTML = `<li>Maîtrise de Langages <br>de Développement Web (HTML5/CSS3/JS)</li><li>Développement Front-End de site web Statique ou Dynamique, et Adaptable</li><li>Intégration Web en Front-End</li><li>Maquettage (Figma)</li>`;
  document.querySelector("#softskills h2").innerHTML = `Compétences Transversales`;
  document.querySelector("#softskills ul").innerHTML = `<li>Capacité d'Adaptation et Autonomie</li><li>Créativité et Minutie</li><li>Esprit Logique et Analytique</li><li>Recherches Web et <br>Mise à Niveau de ses Connaissances</li><li>Ouvert d'esprit et à l'écoute</li>`;
  document.querySelector("#languages h2").innerHTML = `Langues`;
  document.querySelector("#lfr").innerHTML = `Français`;
  document.querySelector("#frp").innerHTML = `Langue natif`;
  document.querySelector("#len").innerHTML = `Anglais`;
  document.querySelector("#enp").innerHTML = `Niveau avancé`;
  document.querySelector("#passions h2").innerHTML = `Passions`;
  document.querySelector("#personnalLinks h2").innerHTML = `Liens Personnels`;
});

const en = document.getElementById("en");
en.addEventListener('click', function() {
  document.getElementById("headerP").innerHTML = `Web Developer`;
  document.getElementById("headerI").innerHTML = `B Permit`;
  document.querySelector("#profil h2").innerHTML = `My Profil`;
  document.querySelector("#profil p").innerHTML = `blablablablablabla`;
  document.querySelector("#formation h2").innerHTML = `Education & Trainings`;
  document.querySelector("#formation p").innerHTML = `XXX`;
  document.querySelector("#experience h2").innerHTML = `Professional Experiences`;
  document.querySelector("#experience p").innerHTML = `XXX`;
  document.querySelector("#hardskills h2").innerHTML = `Hard Skills`;
  document.querySelector("#hardskills ul").innerHTML = `<li>Web development Languages<br>(HTML5/CSS3/JS)</li><li>Front-End development in Static or Dynamic, and Responsive Websites</li><li>Web Integration (Front-End)</li><li>Prototyping (Figma)</li>`;
  document.querySelector("#softskills h2").innerHTML = `Soft Skills`;
  document.querySelector("#softskills ul").innerHTML = `<li>Adaptability and Autonomy</li><li>Creativity and Thoroughness</li><li>Logical and Analytical Thinking</li><li>Web researches and <br>Knowledge updating</li><li>Open-minded and Listening to others</li>`;
  document.querySelector("#languages h2").innerHTML = `Languages`;
  document.querySelector("#lfr").innerHTML = `French`;
  document.querySelector("#frp").innerHTML = `Native language`;
  document.querySelector("#len").innerHTML = `English`;
  document.querySelector("#enp").innerHTML = `Advanced level`;
  document.querySelector("#passions h2").innerHTML = `Passions`;
  document.querySelector("#personnalLinks h2").innerHTML = `Personnals Links`;
});

//                                        //
////////////////////////////////////////////