let inputMessage = document.getElementById('chat-input-message')
let chat = document.getElementById('chat-messages')
let listOfMessages = []

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
                listOfMessages.push(message.textContent)
                console.log(listOfMessages)
                containerMessage.append(message)
                inputMessage.value = ''
                chat.append(containerMessage)
            }
        }

    })    
}

newMessage()