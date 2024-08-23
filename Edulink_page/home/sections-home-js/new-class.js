let newClassBtn = document.getElementById("new-class");
let clasesContainer = document.getElementById("classes-container");
newClassBtn.addEventListener("click", addClass);

function addClass() {
  applyBlur(true);
  alertError('Hola', 'chau')
  let newClassMenu = document.createElement("form");
  newClassMenu.classList.add("new-channel-menu");
  newClassMenu.innerHTML = `<button class="exit-new-channel-btn" id="exit-new-channel-btn"><i class="fa-solid fa-xmark exit-icon"></i></button>
    <h2 class="h2-new-channel-menu">Nueva clase</h2>
        <figure class="figure-new-channel">
        <input type="file" class="input-image-receive" id="imageUpload" accept="image/*">
        <img src="${defaultFileImg}" alt="Image class" class="img-preview" id="img-preview">
        </figure>
        <label for="imageUpload" class="change-img">Cambiar foto</label>
        <div class="inputs-channel" id="inputs-channel">
        <input type="text" placeholder="Nombre de la clase" class="input-channel-name" id="input-channel-name">
        <input type="text" placeholder="Profesor / administrador" class="input-channel-key" id="input-channel-key">
        </div>
        <button class="create-channel" id="create-channel" type="submit">Crear clase</button>`
  body.append(newClassMenu);

  let exitNewClassBtn
  exitMenu(exitNewClassBtn, 'exit-new-channel-btn', newClassMenu);
}
