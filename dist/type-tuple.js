"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user;
user = [1, 'luixaviles'];
console.log('user : ', user);
console.log('username : ', user[1]);
console.log('username.length : ', user[1].length);
console.log('id : ', user[0]);
let userInfo;
userInfo = [2, 'paparazzi', true];
console.log('userInfo : ', userInfo);
let array = [];
array.push([1, 'luixaviles']);
array.push([2, 'paparazzi']);
array.push([3, 'lensQueen']);
console.log('array : ', array);
array[2][1] = array[2][1].concat('001');
console.log('array : ', array);