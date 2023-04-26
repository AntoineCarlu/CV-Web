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

const graybutton = document.getElementById("gray");
graybutton.addEventListener('click', function() {
  gradientcolor.style.background = `linear-gradient(0deg, white, rgba(17, 17, 17, 0.1) 5%, rgba(17, 17, 17, 0.2) 25%, rgba(17, 17, 17, 0.4))`;
  leftcolor.style.background = `rgba(17, 17, 17, 0.97)`;
});

const redbutton = document.getElementById("red");
redbutton.addEventListener('click', function() {
  gradientcolor.style.background = `linear-gradient(0deg, white, rgba(255, 0, 0, 0.1) 5%, rgba(255, 0, 0, 0.2) 25%, rgba(255, 0, 0, 0.4))`;
  leftcolor.style.background = `rgba(100, 0, 0, 0.97)`;
});

const bluebutton = document.getElementById("blue");
bluebutton.addEventListener('click', function() {
  gradientcolor.style.background = `linear-gradient(0deg, white, rgba(0, 0, 255, 0.1) 5%, rgba(0, 0, 255, 0.2) 25%, rgba(0, 0, 255, 0.4))`;
  leftcolor.style.background = `rgba(0, 0, 100, 0.97)`;
});

const yellowbutton = document.getElementById("yellow");
yellowbutton.addEventListener('click', function() {

});

const greenbutton = document.getElementById("green");
greenbutton.addEventListener('click', function() {

});

const purplebutton = document.getElementById("purple");
purplebutton.addEventListener('click', function() {
  gradientcolor.style.background = `linear-gradient(0deg, white, rgba(155, 0, 155, 0.1) 5%, rgba(155, 0, 155, 0.2) 25%, rgba(155, 0, 155, 0.4))`;
  leftcolor.style.background = `rgba(80, 0, 80, 0.97)`;
});

//                                              //
//////////////////////////////////////////////////