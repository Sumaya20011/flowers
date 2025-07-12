const hearts=document.querySelectorAll('.heart');
hearts.forEach(heart =>{
heart.addEventListener('click',() =>{
    heart.classList.toggle('red');
});
})

// Получаем элементы
const buttons = document.querySelectorAll('.button');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const productInput = document.getElementById('product');
const form = document.getElementById('orderForm');

// Обработчик клика на кнопку "Заказать"
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Получаем название товара из карточки
        const productName = button.closest('.card1').querySelector('.name').innerText;
        productInput.value = productName;

        // Показываем модальное окно
        modal.style.display = 'block';
    });
});

// Закрытие по крестику
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие при клике вне формы
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработка отправки формы
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Ваш заказ оформлен!');
    modal.style.display = 'none';
    form.reset();
});