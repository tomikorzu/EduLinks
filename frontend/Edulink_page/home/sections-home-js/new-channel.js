let newChannelButton = document.getElementById("new-channel");
newChannelButton.addEventListener("click", addChannelInfo);
let createClassContainer = document.getElementById('create-class')

let body = document.querySelector("body");
body.style.overflow = "hidden";
let header = document.querySelector("header");
let aside = document.querySelector("aside");
let sections = document.querySelectorAll("section");
let groupsContainer = document.getElementById("chanel-container");
let defaultFileImg = "../../../img/defaultChannelImage.png";
let newChannelHtml = `
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

function addChannelInfo() {
  applyBlur(true);
  
  let newChannelMenu = createForm(newChannelHtml);
  requestAnimationFrame(function () {
    newChannelMenu.classList.toggle("form-show");
  });
  let imagePreviewChannel = submitImage();
  
  newChannelMenu.addEventListener("submit", function sendForm(event) {
    createClassContainer.style.display = 'flex'
    event.preventDefault();

    let channelName = document
      .getElementById("input-channel-name")
      .value.trim();
    let channelKey = document.getElementById("input-channel-key").value.trim();
    let channelImage = imagePreviewChannel.src;

    if (!validateChannelForm(channelName, channelKey, channelImage)) return;

    createChannelElement(channelName, channelImage, groupsContainer);

    newChannelMenu.reset();
    imagePreviewChannel.src = defaultFileImg;
    newChannelMenu.classList.remove("form-show");
    newChannelMenu.addEventListener("transitionend", function handleTransitionEnd() {
      newChannelMenu.removeEventListener("transitionend", handleTransitionEnd);
      newChannelMenu.remove();
    });
    applyBlur(false);
  });

  let exitNewChannelBtn;
  exitMenu(exitNewChannelBtn, "exit-new-channel-btn", newChannelMenu);
}
