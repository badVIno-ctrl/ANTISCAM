document.addEventListener('DOMContentLoaded', () => {
    const closeCheckbox = document.querySelector('.container.close-modal input');
    const aboutUsModal = document.getElementById('aboutUsModal');
    const aboutSiteModal = document.getElementById('aboutSiteModal');
    const closeButtons = document.querySelectorAll('.close-modal');

    const aboutUsButton = document.querySelector('.nav-item:nth-child(2)'); // Кнопка "О нас"
    const aboutSiteButton = document.querySelector('.nav-item:nth-child(3)'); // Кнопка "О сайте"

    aboutUsButton.addEventListener('click', () => {
        aboutUsModal.style.display = 'flex';
    });
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    window.addEventListener('click', (event) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    aboutSiteButton.addEventListener('click', () => {
        aboutSiteModal.style.display = 'flex';
    });
    closeCheckbox.addEventListener('change', () => {
        if (closeCheckbox.checked) {
            aboutSiteModal.style.display = 'none';
            closeCheckbox.checked = false; 
        }
    });
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            aboutUsModal.style.display = 'none';
            aboutSiteModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === aboutUsModal) {
            aboutUsModal.style.display = 'none';
        }
        if (event.target === aboutSiteModal) {
            aboutSiteModal.style.display = 'none';
        }
    });
});
