// через прототипы
// Базовый класс User
function User(name, age) {
    this.name = name;
    this.age = age;
}

// Геттер и сеттер возраста
User.prototype.getAge = function () {
    return this.age;
};

User.prototype.setAge = function (age) {
    this.age = age;
};

// Геттер и сеттер имени
User.prototype.getJustName = function () {
    return this.name;
};

User.prototype.setName = function (newName) {
    this.name = newName;
};

// Класс наследник Patient
function Patient(name, age, medicalRecord, id, gender) {
    User.call(this, name, age); // конструктор базового класса

    this.medicalRecord = medicalRecord;
    this.id = id;
    this.gender = gender;
}

// Наследование прототипа базового класса
Patient.prototype = Object.create(User.prototype);

// Геттер и сеттер для медицинской книжки
Patient.prototype.getMedicalRecord = function () {
    return this.medicalRecord;
};

Patient.prototype.setMedicalRecord = function (medicalRecord) {
    this.medicalRecord = medicalRecord;
};

// Геттер и сеттер для ID
Patient.prototype.getId = function () {
    return this.id;
};

Patient.prototype.setId = function (id) {
    this.id = id;
};

// Декоратор, который добавляет "Mr." или "Mrs." к имени в зависимости от пола
function genderDecorator(target) {
    const originalGetName = target.getName;

    target.getName = function () {
        let name = originalGetName.call(this);
        if (this.gender === 'male') {
            name = 'Mr. ' + name;
        } else if (this.gender === 'female') {
            name = 'Mrs. ' + name;
        }
        return name;
    };
}

// Метод, который возвращает имя пациента
Patient.prototype.getName = function () {
    return this.name;
};

// Метод, который поздравляет с днем рождения
Patient.prototype.happyBirthday = function () {
    this.age++;
    return `Happy Birthday, ${this.getName()}! Now you are ${this.getAge()} years old.`;
};

// Метод для записи пациента на прием
Patient.prototype.scheduleAppointment = function (date) {
    return `Patient ${this.getName()} has scheduled an appointment for ${date}.`;
};

// Создаем объект пациента
const john = new Patient('John', 30, '12345', 'P123', 'male');

// Применяем декоратор
genderDecorator(john);

document.addEventListener('DOMContentLoaded', function () {
    const getAgeButton = document.getElementById('getAgeButton');
    const getJustNameButton = document.getElementById('getJustNameButton');
    const getMedicalRecordButton = document.getElementById('getMedicalRecordButton');
    const getIdButton = document.getElementById('getIdButton');
    const getNameButton = document.getElementById('getNameButton');
    const happyBirthdayButton = document.getElementById('happyBirthdayButton');
    const scheduleAppointmentButton = document.getElementById('scheduleAppointmentButton');

    // Форма для ввода даты
    const appointmentDateInput = document.getElementById('appointmentDate');

    // Обработчики событий
    getAgeButton.addEventListener('click', function () {
        alert(`Age: ${john.getAge()}`);
    });

    getJustNameButton.addEventListener('click', function () {
        alert(`Name: ${john.getJustName()}`);
    });

    getMedicalRecordButton.addEventListener('click', function () {
        alert(`Medical record: ${john.getMedicalRecord()}`);
    });

    getIdButton.addEventListener('click', function () {
        alert(`ID: ${john.getId()}`);
    });

    getNameButton.addEventListener('click', function () {
        alert(`Decorated name: ${john.getName()}`);
    });

    happyBirthdayButton.addEventListener('click', function () {
        alert(john.happyBirthday());
    });

    scheduleAppointmentButton.addEventListener('click', function () {
        const date = appointmentDateInput.value;
        if (date) {
            alert(john.scheduleAppointment(date));
        } else {
            alert('Please, enter the date.');
        }
    });
});
