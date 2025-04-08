function game3() {
    let question = String(prompt('Введите любой текст или слово')).split('');
    reverseText = question.reverse().join("");
    let result = reverseText;

    alert(result);
};

function game4() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let num = 0;

    for (let i = 0; i < quiz.length; i++) {
        let quizQuest = +prompt(`Выберите правильный ответ? \n${quiz[i].question} \n${quiz[i].options.join('\n')}`);
        if (quizQuest === quiz[i].correctAnswer) {
            num++
        };
        alert(`Вы ответили верно на ${num} вопросов`);
    }
};

// // Задание 1
// const text = "js";
// const toUppercaseText = text.toUpperCase();
// console.log(toUppercaseText);

// // Задание 2
// function filter(arr, str) {
//     const lowerStr = str.toLowerCase();
//     return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
// }
// console.log(filter(['JavaScript', 'Java', 'Python'], 'ja'));

// // Задание 3
// let num = 32.58884;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// // Задание 4
// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));

// // Задание 5
// function Number() {
//     return Math.floor(Math.random() * 10) + 1;
// }
// console.log(Number());

// // Задание 6
// function randomNumber(num) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(Math.floor(Math.random() * num))
//     }
//     return arr;
// }
// console.log(randomNumber(10));

// // Задание 7
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(1, 10));

// // Задание 8
// let currentDateNow = new Date();
// console.log(currentDate);

// // Задание 9
// const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);

// console.log(currentDate);

// // Задание 10

// function formatDate(date) {
//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
//  "Пятница", "Суббота"];
//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//     const year = date.getFullYear();
//     const day = date.getDate();
//     const month = date.getMonth();
//     const dayOfWeek = days[date.getDay()];
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();

//     return `
//     Дата: ${day} ${months[month]} ${year} - это ${dayOfWeek}.
//     Время: ${hours}:${minutes}:${seconds}`;
// }

// console.log(formatDate(new Date()));
