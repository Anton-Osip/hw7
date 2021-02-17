/*Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
почта), проверка введенной информации, например: проверить возраст – должен быть
целым неотрицательным числом бол*/


let container = document.querySelector('.container');

const Contact = function(name, age, phone, address, gender, email) {
    this.name = name;
    this.age = age;
    this.phone = [phone, ];
    this.address = address;
    this.gender = gender;
    this.email = email;
    let photo;

    if (gender == 'мужской') {
        photo = "./img/man.png";
    } else {
        photo = "./img/woman.png";
    };

    this.addPhone = function() {
        this.phone.push(prompt('Введите номер телефона'))
    };
    this.removePhone = function() {
        this.phone.pop(confirm('Удалить последний номер телефона?'))
    };
    this.changeAdress = function() {
        this.address = (prompt('Введите новый адрес'))
    };
    this.printCard = function() {
        container.innerHTML = `
     <div class="card">
            <img src=${photo} alt="user" class="img">
            <p class="name">${name}</p>
            <p class="age">${age} года</p>
            <p class="gender">${gender} пол</p>
            <p class="phone">${phone}</p>
            <p class="email">${email}</p>
            <p class="address">${address}</p>
        </div>
     `;
    };
};

let ContactVova = new Contact('Vova', 25, '+375445554499', 'г. Минск', 'мужской', 'mail@mail.com');
let ContactVika = new Contact('Vika', 25, '+375445554499', 'г. Минск', 'женский', 'mail@mail.com');


ContactVova.printCard();
// ContactVika.printCard();