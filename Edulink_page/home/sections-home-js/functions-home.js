function exitMenu(btn, idExitBtn, menu) {
  btn = document.getElementById(`${idExitBtn}`);
  btn.addEventListener("click", function (e) {
    menu.remove();
    applyBlur(false);
  });
}

function createForm(formHtml) {
  let newChannelMenu = document.createElement("form");
  newChannelMenu.classList.add("new-channel-menu");
  newChannelMenu.innerHTML = formHtml;
  body.append(newChannelMenu);
  return newChannelMenu;
}

function alertError(title, message) {
  let alertForm = document.createElement("form");
  alertForm.classList.add("alert-form");
  alertForm.innerHTML = `
          <h2 class="h2-alert">${title}</h2>
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

function submitImage() {
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
  return imagePreview;
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
