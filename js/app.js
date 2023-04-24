////////////////////////////////////////////////
//  Script to display leftside bar on mobile  //

const leftside = document.getElementById("leftdesign");
const button = document.querySelector(".button");
button.addEventListener('click', function() {

    if (leftside.style.display === "none") {
        leftside.style.display = "block"
    } else {
            leftside.style.display = "none"
        }
    button.setAttribute('class', 'button fa-sharp fa-solid fa-bars');

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