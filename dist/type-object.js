"use strict";
let user;
user = {};
user = {
    id: 1,
    username: 'paparazzi',
    firstname: 'Pablo',
    isPro: true,
};
console.log('user', user);
const myObj = {
    id: 1,
    username: 'paparazzi',
    firstname: 'Pablo',
    isPro: true,
};
const isInstance = myObj instanceof Object;
console.log('isInstance : ', isInstance);
console.log('myObj.username : ', myObj.username);
