// Функция для открытия модального окна
function openModal() {
    const modal = document.createElement("div");
    modal.id = "myModal";
    modal.className = "modal";

    modal.innerHTML = `
        <style>
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1;
        }

        .modal-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
        }
        </style>
        <div class="modal-content">
            <span class="close" id="closeModal">&times;</span>
            <h1>Please, enter your birthdate:</h1>
            <input type="date" id="birthdate">
            <button id="calculateAge">Count age</button>
            <p id="ageResult"></p>
            <p id="dayOfWeek"></p>
            <p id="permission"></p>
        </div>
    `;

    document.body.appendChild(modal);

    // Обработчик закрытия модального окна
    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Обработчик для расчета возраста
    const calculateAgeButton = document.getElementById("calculateAge");
    calculateAgeButton.addEventListener("click", calculateAge);
}

// Функция для расчета возраста и отображения сообщений
function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();

    // Рассчитываем возраст
    const age = today.getFullYear() - birthdate.getFullYear();

    // Проверяем, если день рождения в этом году еще предстоит, уменьшаем возраст на 1
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
        age--;
    }

    // Выводим возраст
    document.getElementById("ageResult").textContent = "Your age: " + age + " years.";

    // Проверяем совершеннолетие
    if (age < 18) {
        document.getElementById("permission").textContent = "You need your parents' permission to use this webpage.";
    } else {
        // Получаем день недели
        const dayOfWeek = birthdate.toLocaleDateString('en-EN', { weekday: 'long' });;

        // Выводим день недели
        document.getElementById("dayOfWeek").textContent = "You were born on " + dayOfWeek + ".";
        document.getElementById("permission").textContent = "You are an adult. You can use this webpage freely.";
    }
}

// Открываем модальное окно при загрузке страницы
openModal();