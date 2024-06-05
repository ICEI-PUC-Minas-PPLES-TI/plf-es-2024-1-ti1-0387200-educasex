const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesList = document.getElementById('messages');

let professorMessages = [];

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        professorMessages.push(message);
        messageInput.value = '';
        renderMessages();
    }
});

// Enviar mensagem ao apertar Enter
messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendButton.click();
    }
});

function renderMessages() {
    // Limpar a lista de mensagens
    messagesList.innerHTML = '';
    
    professorMessages.forEach((message) => {
        const li = document.createElement('li');
        li.className = 'aluno';
        
        const p = document.createElement('p');
        p.textContent = message;
        
        li.appendChild(p);
        messagesList.appendChild(li);
    });
}
