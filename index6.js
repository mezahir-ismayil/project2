     // Данные пользователей
const users = [
    { username: "admin", password: "12345" },
    { username: "user1", password: "password" }
];

// Логика входа
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Успешный вход!");
        window.location.href = "index.html";
    } else {
        alert("Неправильное имя пользователя или пароль");
    }
});

// Логика для создания нового пользователя
document.getElementById("createAccount")?.addEventListener("click", function () {
    const newUsername = prompt("Введите новое имя пользователя:");
    const newPassword = prompt("Введите новый пароль:");

    if (newUsername && newPassword) {
        users.push({ username: newUsername, password: newPassword });
        alert("Пользователь создан!");
    } else {
        alert("Ошибка создания пользователя!");
    }
});

        // Симуляция проверки пользователя
        let users7 = [
            { username: "user1", password: "pass1" },
            { username: "user2", password: "pass2" }
        ];

        function startShopping() {
            window.location.href = "index3.html";
        }

        function goToLogin() {
            window.location.href = "index.html";
        }

        function handleLoginSuccess() {
            document.getElementById('buttonContainer').innerHTML = `
                <button onclick="myComputers()">Мои компьютеры</button>
                <button onclick="logout()">Выход</button>
            `;
        }

        function myComputers() {
            alert("Здесь будут ваши компьютеры.");
        }

        function logout() {
            window.location.reload();
        }

        // Проверка входа
        const loggedIn = sessionStorage.getItem('loggedInUser');
        if (loggedIn) {
            handleLoginSuccess();
        }

        function df() {
            window.location.href = "index7.html";
        }
   // Получаем имя пользователя из localStorage
   const username = localStorage.getItem('loginUsername');
        // Отображаем приветствие
        document.getElementById('greeting').textContent = `İstifadəçi adi: ${username}`;
