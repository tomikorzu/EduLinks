let newChannelButton = document.getElementById('new-channel')
newChannelButton.addEventListener('click', function(){
        addChannelInfo()
})


let body = document.querySelector('body')

function addChannelInfo(){
        console.log('funciona')
        let newChannelMenu = document.createElement('form')
        let defaultFileImg = '../../img/user-regular.svg'
        newChannelMenu.classList.add('new-channel-menu')
        newChannelMenu.innerHTML = `<h2 class="h2-new-channel-menu">Nuevo canal</h2><figure class="figure-new-channel"><input type="file" class="input-image-receive" id="imageUpload"><img src="${defaultFileImg}" alt="Image Channel" class="img-preview" id="img-preview"></figure><label for="imageUpload" class="change-img">Cambiar foto</label><div class="inputs-channel" id="inputs-channel"><input type="text" placeholder="Nombre del canal" class="input-channel-name" id="input-channel-name"><input type="text" placeholder="Clave del canal" class="input-channel-key" id="input-channel-key"></div><button class="create-channel" id="create-channel" type="submit">Crear canal</button>`
        body.append(newChannelMenu)
        let fileInput = document.getElementById('imageUpload')
        let imagePreview = document.getElementById('img-preview')
        let changeImgBtn = document.getElementById('change-img')
        let inputChanelContainer = document.getElementById('inputs-channel')
        let inputName = document.getElementById('input-channel-name')
        let inputKey = document.getElementById('input-channel-key')
        let createChannelBtn = document.getElementById('create-channel')
        let imageChannelSelected
        fileInput.addEventListener('change', function(event){
                if(event.target.files[0]){
                        let reader = new FileReader() 
                        reader.onload = function(event){
                                imagePreview.src = event.target.result
                        }
                        reader.readAsDataURL(event.target.files[0])
                        imageChannelSelected = event.target.files[0] 
                } else{
                        imagePreview.src = defaultFileImg
                }
        })
}