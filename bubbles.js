
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

});
