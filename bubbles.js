let isAnimating = false;
let blocksMovedToChat = false;

document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    const speed = 0.5;
    const movement = 1.5; 

    bubbles.forEach(bubble => {
        bubble.dx = (Math.random() * 2 - 1) * movement;
        bubble.dy = (Math.random() * 2 - 1) * movement;
        
        bubble.offsetX = Math.random() * 20;
        bubble.offsetY = Math.random() * 20;
        bubble.angle = Math.random() * Math.PI * 2;
    });

    function animate() {
        bubbles.forEach(bubble => {
            bubble.angle += speed * 0.02;
            
            const newX = parseFloat(bubble.style.left) + bubble.dx + Math.sin(bubble.angle) * bubble.offsetX;
            const newY = parseFloat(bubble.style.top) + bubble.dy + Math.cos(bubble.angle) * bubble.offsetY;
            
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            
            const bubbleWidth = bubble.offsetWidth;
            const bubbleHeight = bubble.offsetHeight;
            
            if (newX <= -bubbleWidth || newX >= windowWidth) bubble.dx *= -1;
            if (newY <= -bubbleHeight || newY >= windowHeight) bubble.dy *= -1;
            
            bubble.style.left = `${newX}px`;
            bubble.style.top = `${newY}px`;
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        bubbles.forEach(bubble => {
            bubble.style.left = `${Math.random() * window.innerWidth}px`;
            bubble.style.top = `${Math.random() * window.innerHeight}px`;
        });
    });
    document.getElementById('send-button').addEventListener('click', function() {
    sendMessage();
    moveBlocksToChat();
});

document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
        moveBlocksToChat();
    }
});

let chatHistory = [];

function sendMessage() {
    const userInput = document.getElementById('chat-input').value;
    if (userInput.trim() === '') return;

    if (userInput.toLowerCase().includes('сайты 2604')) {
        addMessageToChat('assistant', "amashumi amabili nesithupha oh izinkulungwane ezine amashumi ayisishiyagalombili nesithupha");
        return;
    }

    if (userInput.toLowerCase().includes('приложения 2604')) {
        addMessageToChat('assistant', "amashumi amabili nesithupha oh izinkulungwane ezine amashumi ayisishiyagalombili nesithupha Armenian ake sihambe ake sihambe amashumi ayisishiyagalolunye nesishiyagalolunye");
        return;
    }

    if (userInput.toLowerCase().includes('презентация')) {
        const link = 'https://gamma.app/docs/-v9gy89ndkb5fzcc';
        addMessageToChat('assistant', `Вот ссылка на презентацию: <a href="${link}" target="_blank">${link}</a>`);
        return;
    }

    addMessageToChat('user', userInput);
    document.getElementById('chat-input').value = '';

    if (userInput.toLowerCase() === 'сбрось контекст') {
        chatHistory = [];
        localStorage.removeItem('chatHistory'); // Очистка localStorage
        addMessageToChat('assistant', 'Контекст сброшен.');
    } else {
        sendMessageToMistral(userInput);
    }
}

function addMessageToChat(sender, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.innerHTML = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Сохранение истории чата в localStorage
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.push({ sender, message });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

async function sendMessageToMistral(message) {
    const apiUrl = 'https://api.mistral.ai/v1/chat/completions';
    const apiKey = 'DlWJGSjUANbZ5tRjXI3nHhA8AC6S44OX';

    const context = chatHistory.slice(-2).join('\n') + '\n' + message;

    const requestBody = {
        model: 'mistral-large-latest',
        messages: [
            {
                role: 'user',
                content: context
            }
        ]
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok) {
            const data = await response.json();
            const assistantResponse = data.choices[0].message.content;
            addMessageToChat('assistant', assistantResponse);
            chatHistory.push({ sender: 'user', message }, { sender: 'assistant', message: assistantResponse });
        } else {
            console.error('Ошибка ответа сервера:', response.status);
            addMessageToChat('assistant', 'Ошибка ответа сервера. Пожалуйста, попробуйте позже.');
        }
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        addMessageToChat('assistant', 'Ошибка при отправке запроса. Пожалуйста, попробуйте позже.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.forEach(({ sender, message }) => {
        addMessageToChat(sender, message);
    });
    
});
