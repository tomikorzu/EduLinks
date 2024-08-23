let inputMessage = document.getElementById('chat-input-message')
let chat = document.getElementById('chat-messages')
function newMessage(){
    inputMessage.addEventListener('keypress', function(event){
        let keycode = event.keycode || event.which
        if (keycode === 13) {
            if (inputMessage.value.length >0){
                let containerMessage = document.createElement('div')
                containerMessage.classList.add('container-message')
                let message = document.createElement('p')
                message.classList.add('message')
                message.textContent = inputMessage.value
                containerMessage.append(message)
                inputMessage.value = ''
                chat.append(containerMessage)
            }
        }

    })    
}

newMessage()