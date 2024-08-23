let newClassBtn = document.getElementById("new-class");
let clasesContainer = document.getElementById("clases-container");
newClassBtn.addEventListener("click", addClass);

function addClass() {
  applyBlur(true);

  let newClassHtml = `
    <button class="exit-new-channel-btn" id="exit-new-class-btn"><i class="fa-solid fa-xmark exit-icon"></i></button>
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
    <button class="create-channel" id="create-channel" type="submit">Crear clase</button>
  `;

  let newClassMenu = createForm(newClassHtml);
  let imagePreviewClass = submitImage();

  newClassMenu.addEventListener("submit", function (event) {
    event.preventDefault();

    let className = document.getElementById("input-channel-name").value.trim();
    let classAdmin = document.getElementById("input-channel-key").value.trim();
    let classImage = imagePreviewClass.src;

    if (!validateChannelForm(className, classAdmin, classImage)) return;

    let newClass = document.createElement("div");
    newClass.classList.add("class-group", "group");
    newClass.innerHTML = `
      <img src="${classImage}" alt="" class="img-group" />
      <div class="title-subtitle-container">
        <h5 class="h5-group">${className}</h5>
        <h6 class="h6-group">${classAdmin}</h6>
      </div>
    `;
    clasesContainer.append(newClass);

    newClassMenu.reset();
    imagePreviewClass.src = defaultFileImg;
    newClassMenu.remove();
    applyBlur(false);
  });

  let exitNewClassBtn = document.getElementById("exit-new-class-btn");
  exitNewClassBtn.addEventListener("click", function() {
    newClassMenu.remove();
    applyBlur(false);
  });
}
