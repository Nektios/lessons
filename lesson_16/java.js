document.querySelectorAll('.shipping-adress__choice input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function(event) {
        // Отменяем событие прокрутки при выборе радиокнопки
        event.preventDefault();
        document.body.style.overflow = 'auto';
    });
});