const hiddenNumber = Math.floor(Math.random() * 100) + 1;
let guess;

function game1 () {

    while (true) {
        const input = prompt('Попробуй угадать число от 1 до 100');
        guess = Number(input);

        if (input === null) {
            alert('Попробуй вновь!');
            return;
        }

        if (guess === hiddenNumber) {
            alert(`Вы угадали число ${hiddenNumber}`);
            break;
        } else if (guess < hiddenNumber) {
            alert('Число должно быть больше!');
        } else {
            alert('Число должно быть меньше!');
        }
    }
}

// // Задание 1
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log (min(8, 4));
// console.log (min(6, 6));

// // Задание 2
// function isEven(n) {
//     if (n % 2 === 0) {
//         return 'Число чётное';
//     } else {
//         return 'Число нечётное';
//     }
// }

// console.log(isEven(6));
// console.log(isEven(5));

// // Задание 3
// function square(number) {
//     return number ** 2;
// }

// const up = (n) => n ** 2;

// console.log(square(5));
// console.log(up(5));

// // Задание 4
// function age() {
//     let age = +prompt('Сколько тебе лет?');

//     if (age < 0) {
//         alert('Вы ввели неверное число');
//     } else if (age >= 0 && age <= 12) {
//         alert('Привет, друг!');
//     } else if (age >= 13) {
//         alert('Добро пожаловать!');
//     } else {
//         alert('Вы ввели неправильное значение');
//     }
// }

// age();


// // Задание 5
// function calc(a, b) {
//     console.log(isNaN(a));
//     console.log(isNaN(b));
//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return a * b;
//     }
// }

// console.log(calc(4, 5));

// // Задание 6
// function getNumber(params) {
//     let number = prompt('Введите число');
//     if (isNaN(number)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `${number} в кубе равняется ${number ** 3}`;
//     }
// }

// console.log(getNumber());

// // Задание 7
// function getArea() {
//     return Math.PI * this.radius ** 2;
// }

// function getPerimeter() {
//     return 2 * Math.PI * this.radius;
// }

// const circle1 = {
//     radius: 10,
//     methodGetArea: getArea,
//     methodGetPerimeter: getPerimeter,
// }

// const circle2 = {
//     radius: 20,
//     methodGetArea: getArea,
//     methodGetPerimeter: getPerimeter,
// }

// console.log(circle1.methodGetArea());
// console.log(circle2.methodGetArea());