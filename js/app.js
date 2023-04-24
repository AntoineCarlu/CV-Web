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
const mq = window.matchMedia('(max-width: 500px)');
MediaQuerry(mq); // check initial viewport width
mq.addListener(MediaQuerry); // listen for changes in viewport width

//                                            //
////////////////////////////////////////////////