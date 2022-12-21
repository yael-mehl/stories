let el = document.getElementsByClassName("voice-card");
  let i;
  for (i = 0; i < el.length; i++) {
    el[i].addEventListener("click", function() {
      let content = this.childNodes[1].nextElementSibling;
      content.classList.toggle("show");
      this.classList.toggle("expanded");
    });
  }