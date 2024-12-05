const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementById("closeModal");
const addComputerButton = document.getElementById("addComputer");
const computersTable = document.getElementById("computers-table").querySelector("tbody");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

addComputerButton.onclick = function() {
    const computerName = document.getElementById("computerName").value;
    const computerId = document.getElementById("computerId").value;
    const computerImage = document.getElementById("computerImage").value;
    const computerPrice = document.getElementById("computerPrice").value;

    // Проверка на пустые поля (можно добавить более строгую валидацию)
    if (!computerName || !computerId || !computerImage || !computerPrice) {
        alert("Заполните все поля!");
        return;
    }

    let computers = JSON.parse(localStorage.getItem("computers")) || [];
    computers.push({id: computerId, name: computerName, image: computerImage, price: computerPrice});
    localStorage.setItem("computers", JSON.stringify(computers));
    updateTable();
    modal.style.display = "none";
}


function updateTable() {
    let computers = JSON.parse(localStorage.getItem("computers")) || [];
    computersTable.innerHTML = ''; // Очищаем таблицу перед обновлением

    computers.forEach(computer => {
        let row = computersTable.insertRow();
        let idCell = row.insertCell();
        let nameCell = row.insertCell();
        let imageCell = row.insertCell();
        let priceCell = row.insertCell();
        let actionsCell = row.insertCell();

        idCell.textContent = computer.id;
        nameCell.textContent = computer.name;
        imageCell.innerHTML = `<img src="${computer.image}" alt="${computer.name}" width="50">`; //добавлено отображение картинки
        priceCell.textContent = computer.price;
        actionsCell.innerHTML = `<button  onclick="ccc()">Sil</button>`; // можно добавить функционал удаления
    });
}
updateTable(); // Загрузка данных при загрузке страницы


function ccc() {

localStorage.removeItem('computers');

}
function aaa() {
    window.location.href = "index6.html";
}



// ... existing code ...

    
    // Получаем существующие компьютеры из локального хранилища
    const computers = JSON.parse(localStorage.getItem('computers')) || [];
    computers.push(computer); // Добавляем новый компьютер
    localStorage.setItem('computers', JSON.stringify(computers)); // Сохраняем обратно в локальное хранилище

    // Закрываем модальное окно
    document.getElementById('myModal').style.display = 'none';


// ... existing code ...
  // Открытие модального окна
  document.getElementById('openModal').onclick = function() {
    document.getElementById('myModal').style.display = "block";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
    if (!computerName || !computerId || !computerImage || !computerPrice) {
        alert("Заполните все поля!");
        return;
    }

}


