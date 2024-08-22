let newChannelButton = document.getElementById("new-channel");
newChannelButton.addEventListener("click", addChannelInfo);

let body = document.querySelector("body");
body.style.overflow = "hidden";
let header = document.querySelector("header");
let aside = document.querySelector("aside");
let sections = document.querySelectorAll("section");
let groupsContainer = document.getElementById("chanel-container");
let defaultFileImg = "../../../img/defaultChannelImage.png";

function addChannelInfo() {
  applyBlur(true);
  let newChannelMenu = document.createElement("form");
  newChannelMenu.classList.add("new-channel-menu");
  newChannelMenu.innerHTML = `
    <button class="exit-new-channel-btn" id="exit-new-channel-btn"><i class="fa-solid fa-xmark exit-icon"></i></button>
    <h2 class="h2-new-channel-menu">Nuevo canal</h2>
        <figure class="figure-new-channel">
        <input type="file" class="input-image-receive" id="imageUpload" accept="image/*">
        <img src="${defaultFileImg}" alt="Image Channel" class="img-preview" id="img-preview">
        </figure>
        <label for="imageUpload" class="change-img">Cambiar foto</label>
        <div class="inputs-channel" id="inputs-channel">
        <input type="text" placeholder="Nombre del canal" class="input-channel-name" id="input-channel-name">
        <input type="text" placeholder="Clave del canal" class="input-channel-key" id="input-channel-key">
        </div>
        <button class="create-channel" id="create-channel" type="submit">Crear canal</button>
        `;
  body.append(newChannelMenu);

  let fileInput = document.getElementById("imageUpload");
  let imagePreview = document.getElementById("img-preview");

  fileInput.addEventListener("change", function (event) {
    if (event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        imagePreview.src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      imagePreview.src = defaultFileImg;
    }
  });

  newChannelMenu.addEventListener("submit", function (event) {
    event.preventDefault();

    let inputName = document.getElementById("input-channel-name");
    let inputsChannel = document.getElementById("inputs-channel");
    let channelName = document
      .getElementById("input-channel-name")
      .value.trim();
    let channelKey = document.getElementById("input-channel-key").value.trim();
    let channelImage = imagePreview.src;

    if (channelName.length === 0 && channelKey.length < 4) {
      alertError(
        "Ingrese el nombre del canal y una clave con más de 4 caracteres"
      );
      return;
    } else if (channelKey.length < 4) {
      alertError("Ingrese una clave con más de 4 caracteres");
      return;
    } else if (channelName.length === 0) {
      alertError("Ingrese el nombre del canal");
      return;
    }

    if (channelKey.length < 4) {
      alertError("Ingrese el nombre del canal");
      return;
    }

    let newChannel = document.createElement("div");
    newChannel.classList.add("group-notes");
    newChannel.innerHTML = `
            <div class="group no-hover">
            <img src="${channelImage}" alt="" class="img-group">
            <h5 class="h5-group">${channelName}</h5>
            </div>
            <div class="notes">
            <a href="" class="link-notes"><i class="fa-solid fa-graduation-cap channel-notes-icons"></i></a>
            <a href="" class="link-notes"><i class="fa-regular fa-calendar-check channel-notes-icons"></i></a>
            </div>
            `;
    groupsContainer.append(newChannel);

    newChannelMenu.reset();
    imagePreview.src = defaultFileImg;
    newChannelMenu.remove();
    applyBlur(false);
  });
  let exitNewChannelBtn
  exitMenu(exitNewChannelBtn, 'exit-new-channel-btn', newChannelMenu);
}

function exitMenu(btn, idExitBtn, menu){
    btn = document.getElementById(`${idExitBtn}`)
    btn.addEventListener('click', function(e){
        menu.remove()
        applyBlur(false)
    })
}

function alertError(message) {
  let alertForm = document.createElement("form");
  alertForm.classList.add("alert-form");
  alertForm.innerHTML = `
        <h2 class="h2-alert">alerta</h2>
        <p class="p-alert">${message}</p>
        `;
  body.append(alertForm);

  requestAnimationFrame(function () {
    alertForm.classList.add("show");
  });

  setTimeout(function () {
    alertForm.classList.remove("show");
    setTimeout(() => {
      alertForm.remove();
    }, 400);
  }, 4000);
}

function applyBlur(apply) {
  let value = apply ? "blur(5px)" : "blur(0px)";
  header.style.filter = value;
  aside.style.filter = value;
  sections.forEach((section) => {
    section.style.transition = "all .4s";
    section.style.filter = value;
  });
}
