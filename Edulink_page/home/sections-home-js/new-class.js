let newClassBtn = document.getElementById("new-class");
let clasesContainer = document.getElementById("classes-container");
newClassBtn.addEventListener("click", addClass);

function addClass() {
  applyBlur(true);
  let newClassMenu = document.createElement("form");
  newClassMenu.classList.add("new-class-menu");
  newClassMenu.innerHTML = '<button class="exit-new-class-btn" id="exit-new-class-btn"><i class="fa-solid fa-xmark exit-icon"></i></button><h2 class="h2-new-class-menu">Hola</h2>'
  body.append(newClassMenu);

  let exitNewClassBtn
  exitMenu(exitNewClassBtn, 'exit-new-class-btn', newClassMenu);
}
