document.addEventListener('DOMContentLoaded', () => {
    const closeCheckbox = document.querySelector('.container.close-modal input');
    const aboutUsModal = document.getElementById('aboutUsModal');
    const aboutSiteModal = document.getElementById('aboutSiteModal');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Кнопки для открытия модальных окон
    const aboutUsButton = document.querySelector('.nav-item:nth-child(2)'); // Кнопка "О нас"
    const aboutSiteButton = document.querySelector('.nav-item:nth-child(3)'); // Кнопка "О сайте"

    // Открытие модального окна "О нас"
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

    // Закрытие модальных окон при клике вне их области
    window.addEventListener('click', (event) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Открытие модального окна "О сайте"
    aboutSiteButton.addEventListener('click', () => {
        aboutSiteModal.style.display = 'flex';
    });
    closeCheckbox.addEventListener('change', () => {
        if (closeCheckbox.checked) {
            aboutSiteModal.style.display = 'none';
            closeCheckbox.checked = false; // Сброс состояния чекбокса
        }
    });
    // Закрытие модальных окон
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            aboutUsModal.style.display = 'none';
            aboutSiteModal.style.display = 'none';
        });
    });

    // Закрытие модальных окон при клике вне их области
    window.addEventListener('click', (event) => {
        if (event.target === aboutUsModal) {
            aboutUsModal.style.display = 'none';
        }
        if (event.target === aboutSiteModal) {
            aboutSiteModal.style.display = 'none';
        }
    });
});