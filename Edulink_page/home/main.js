let newChannelButton = document.getElementById('new-channel')
newChannelButton.addEventListener('click', function(){
        addChannelInfo()
})


let body = document.querySelector('body')

function addChannelInfo(){
        console.log('funciona')
        let newChannelMenu = document.createElement('form')
        newChannelMenu.classList.add('new-channel-menu')
        newChannelMenu.innerHTML = '<h2 class="h2-new-channel-menu">Nuevo canal</h2><figure class="figure-new-channel"><input type="file" class="input-image-receive" id="imageUpload"><label for="imageUpload" class="icon-label"><i class="fa-solid fa-plus create-channel-icon"></i></label><img src="${Image Channel}" alt="Image Channel" class="img-preview"></figure><button type="submit" class="change-img" id="change-img">Cambiar foto</button><div class="inputs-channel"><input type="text" placeholder="Nombre del canal" class="input-channel-name" id="input-channel-name"><input type="text" placeholder="Clave del canal" class="input-channel-key" id="input-channel-key"></div><button class="create-channel" id="create-channel" type="submit">Crear canal</button>'
        body.append(newChannelMenu)
}