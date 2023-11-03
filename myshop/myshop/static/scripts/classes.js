// через классы
// Базовый класс User
class UserC {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getJustName() {
        return this.name;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }
}

// Класс наследник Patient
class PatientC extends UserC {
    constructor(name, age, medicalRecord, id, gender) {
        super(name, age); // Вызываем конструктор базового класса

        this.medicalRecord = medicalRecord;
        this.id = id;
        this.gender = gender;
    }

    getMedicalRecord() {
        return this.medicalRecord;
    }

    setMedicalRecord(medicalRecord) {
        this.medicalRecord = medicalRecord;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    // Метод, который поздравляет с днем рождения
    happyBirthday() {
        this.age++;
        return `Happy Birthday, ${this.getName()}! Now you are ${this.getAge()} years old.`;
    }

    // Метод для записи пациента на прием
    scheduleAppointment(date) {
        return `Patient ${this.getName()} has scheduled an appointment for ${date}.`;
    }
}

// Декоратор, который добавляет "Mr." или "Mrs." к имени в зависимости от пола
function genderDecorator(patient) {
    const originalGetName = patient.getName.bind(patient);

    patient.getName = function () {
        let name = originalGetName();
        if (this.gender === 'male') {
            name = 'Mr. ' + name;
        } else if (this.gender === 'female') {
            name = 'Mrs. ' + name;
        }
        return name;
    };

    return patient;
}

// Создаем объект пациента
const dasha = new PatientC('Darya', 19, '29724', 'P666', 'female');
genderDecorator(dasha);

document.addEventListener('DOMContentLoaded', function () {
    const getAgeButtonC = document.getElementById('getClassAgeButton');
    const getJustNameButtonC = document.getElementById('getClassJustNameButton');
    const getMedicalRecordButtonC = document.getElementById('getClassMedicalRecordButton');
    const getIdButtonC = document.getElementById('getClassIdButton');
    const getNameButtonC = document.getElementById('getClassNameButton');
    const happyBirthdayButtonC = document.getElementById('happyBirthdayClassButton');
    const scheduleAppointmentButtonC = document.getElementById('scheduleAppointmentClassButton');

    // Форма для ввода даты
    const appointmentDateInputC = document.getElementById('appointmentDateClass');

    // Обработчики событий
    getAgeButtonC.addEventListener('click', function () {
        alert(`Age: ${dasha.getAge()}`);
    });

    getJustNameButtonC.addEventListener('click', function () {
        alert(`Name: ${dasha.getJustName()}`);
    });

    getMedicalRecordButtonC.addEventListener('click', function () {
        alert(`Medical record: ${dasha.getMedicalRecord()}`);
    });

    getIdButtonC.addEventListener('click', function () {
        alert(`ID: ${dasha.getId()}`);
    });

    getNameButtonC.addEventListener('click', function () {
        alert(`Decorated name: ${dasha.getName()}`);
    });

    happyBirthdayButtonC.addEventListener('click', function () {
        alert(dasha.happyBirthday());
    });

    scheduleAppointmentButtonC.addEventListener('click', function () {
        const date = appointmentDateInputC.value;
        if (date) {
            alert(dasha.scheduleAppointment(date));
        } else {
            alert('Please, enter the date.');
        }
    });
});