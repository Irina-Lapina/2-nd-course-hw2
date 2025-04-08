// function game2() {
//     const operators = ["+", "-", "*", "/"];
//     const operator = operators[Math.floor(Math.random() * operators.length)];
//     let a, b, result;  
//     let userAnswer;

//     a = Math.floor(Math.random() * 10) + 1;
//     b = Math.floor(Math.random() * 10) + 1;
//     switch(operator) {
//             case '+':
//             userAnswer = +prompt(`Сложите ${a} и ${b}`);
//             result = a + b;
//             break;

//             case '-':
//             userAnswer = +prompt(`Вычтите ${b} от ${a}`);
//             result = a - b;
//             break;

//             case '*':
//             userAnswer = +prompt(`Умножьте ${a} на ${b}`);
//             result = a * b;
//             break;

//             case '/':
//             userAnswer = +prompt(`Разделите ${b} на ${a}`);
//             result = a / b;
//             break;
//     }

//         if (userAnswer === result) {
//             alert('Верно');
//         }
//         else {
//             alert('Неверно');
//         }
// }

// // Задание 1
// const numbers = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 0) break;
//     console.log(numbers[i]);
// };

// //  Задание 2
// const numbs = [1, 5, 4, 10, 0, 3];
// numbs.forEach((el, index) => {
//     console.log(`${index}: ${el}`);
//  });

// //  Задание 3
// const number = [1, 3, 5, 10, 20];
// let joinedText = number.join(' ');
// console.log(joinedText);

// // Задание 4
// const arr = [];
// for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {
//         arr.push(1);
//     }  
// }

// console.log(arr);

// // Задание 5
// const one = [1, 1, 1];
// one.push(2, 2, 2.);
// console.log(one);

// // Задание 6
// const a = [9, 8, 7, 'a', 6, 5];
// a.sort();
// console.log(a);
// console.log(a.pop());
// console.log(a);

// // Задание 7
// const num = [9, 8, 7, 6, 5];
// let guess = +prompt('Введите число');
// if (num.includes(guess)) {
//     alert('Угадал');
// } else {
//     alert('Не угадал');
// }

// // Задание 8
// let str = 'abcdef';
// str = str.split('');
// console.log(str);
// str.reverse();
// str = str.join('');
// console.log(str);

// // Задание 9
// const array = [[1, 2, 3],[4, 5, 6]];
// const newArray = [];

// for (let i = 0; i < array.length; i++) {
//     newArray.push(...array[i]);
// }

// console.log(newArray);

// // Задание 10
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i + 1]) {
//         console.log(arr2[i] + arr2[i + 1]);
//     }
// }

// // Задание 11
// function square(arr) {
//     return arr.map(item => item ** 2);
// }

// console.log(square([1, 2, 3]));

// // Задание 12
// function getLength(arr) {
//     return arr.map(item => item.length);
// }
// console.log(getLength(['hello', 'world']));


// // Задание 13
// function negativNumbers(array) {
//     return array.filter(item => item < 0);
// }
// console.log(negativNumbers([1, 2, 3, -4, 5, -6, 7, 8, 9, 10]));


// // Задание 14
// function randomNumber() {
//     return Math.floor(Math.random() * 10);
// };

// const arr3 = [];

// for (let i = 0; i < 10; i++) {
//     arr.push(randomNumber());
// }

// console.log(arr3);

// const evenArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     }
// }

// console.log(evenArr);


// // Задание 15
// function arrSix() {
//     return Math.floor(Math.random() * 10);
// };

// const arr4 = [];

// for (let i = 0; i < 3; i++) {
//     arr4.push(arrSix());
// };

// console.log(arr4);
// console.log(arr4.reduce((a, b) => a + b) / arr4.length);