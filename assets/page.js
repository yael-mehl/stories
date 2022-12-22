let voiceCards = document.getElementsByClassName("voice-card"); // selects all voiceCard elements
let i; // loop counter
for (i = 0; i < voiceCards.length; i++) { // loops through the array
  voiceCards[i].addEventListener("click", function() { // attaches the click handler to an anonymous function
    let tog = this.childNodes[1].classList.toggle("opened"); // adds .opened to h4s to change :after element
    let content = this.childNodes[1].nextElementSibling; // selects voiceCard content elements
    content.classList.toggle("show"); // toggles .show on voiceCard contents
    this.classList.toggle("expanded"); // toggles .expanded on entire voiceCard
  });
}