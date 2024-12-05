document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Проверка данных
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Вход успешен!');
        window.location.href = 'index6.html'; // Здесь можно перенаправить на другую страницу
        
    } else {
        alert('Неверное имя пользователя или пароль.');
    }
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы
        const username = document.getElementById('loginUsername').value;
        // Сохраняем имя пользователя в localStorage
        localStorage.setItem('loginUsername', username);
       
    });