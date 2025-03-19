
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
function showSupport() {
    document.querySelector('.panel').style.display = 'block';
}

function hideSupport() {
    document.querySelector('.panel').style.display = 'none';
}

function toggleChat() {
    const chatWindow = document.querySelector('.chat-window');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message.trim() === '') return;

    const chatContent = document.getElementById('chat-content');
    chatContent.innerHTML += `<p><strong>Вы:</strong> ${message}</p>`;

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer DlWJGSjUANbZ5tRjXI3nHhA8AC6S44OX'
        },
        body: JSON.stringify({
            model: 'mistral-large-latest',
            messages: [{ role: 'user', content: message }]
        })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;
    chatContent.innerHTML += `<p><strong>Среда:</strong> ${reply}</p>`;
    chatContent.scrollTop = chatContent.scrollHeight;

    input.value = '';
}

function search() {
    const query = document.getElementById('search').value;
    alert(`Поиск: ${query}`);
}
});
