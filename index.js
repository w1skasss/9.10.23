//264-272 шленова лепилова

// 1
// !

// 2
// ошибка

// 3
// !

// 4
// присвоенную функцию и символы

// 5
// !

// 6
// 3

// 7
// !

// 8
// !

// 9
// присвоенную функцию и символы

// 10
// !

// 11
// 3

// 12
// (function() {
// return function() {
//     return function() {
//         console.log('!');
// };
// };
// })()()();

// 13
// (function() {
// let sum = 0;
// return function(num) {
//     sum += num;
//         console.log('Сумма: ' + sum);
//     }
// })(1)(2);

// 14
// (function() {
//     let sum = 0;
//     return function(num) {
//         sum += num;
//         console.log('Сумма: ' + sum);
//         return arguments.callee;
//     }
// })()(1)(2)(3);

// 15
// 1

// 16
// ошибка