document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Сохранение данных в localStorage (для простоты)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Регистрация успешна!');
    window.location.href = 'index2.html'; // Перенаправление на страницу входа
});