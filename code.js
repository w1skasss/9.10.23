// // 274-278
// // 1
// function printArray(arr, index = 0) {
//   if (index < arr.length) {
//     console.log(arr[index]);
//     printArray(arr, index + 1);
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// printArray(arr);

// 2
// function sumOfSquares(arr, index = 0, sum = 0) {
//   if (index < arr.length) {
//     sum += arr[index] * arr[index];
//     return sumOfSquares(arr, index + 1, sum);
//   } else {
//     return sum;
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// let result = sumOfSquares(arr);
// console.log(result);

// 3
// function printPrimitives(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       printPrimitives(obj[key]);
//     } else {
//       console.log(obj[key]);
//     }
//   }
// }

// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
// printPrimitives(obj);

// 4
// function flattenArray(arr) {
//   let flattened = [];
  
//   function flatten(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         flatten(arr[i]);
//       } else {
//         flattened.push(arr[i]);
//       }
//     }
//   }
  
//   flatten(arr);
  
//   return flattened;
// }

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// let flattenedArr = flattenArray(arr);
// console.log(flattenedArr);

// 5
// function sumObject(obj) {
//   let sum = 0;
  
//   function sumValues(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] === 'object') {
//         sumValues(obj[key]);
//       } else {
//         sum += obj[key];
//       }
//     }
//   }
  
//   sumValues(obj);
  
//   return sum;
// }

// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
// let totalSum = sumObject(obj);
// console.log(totalSum);

// 6
// function flattenArray(arr) {
//   let result = '';
  
//   function flatten(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         flatten(arr[i]);
//       } else {
//         result += arr[i];
//       }
//     }
//   }
  
//   flatten(arr);
  
//   return result;
// }

// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// let flattenedString = flattenArray(arr);
// console.log(flattenedString);
