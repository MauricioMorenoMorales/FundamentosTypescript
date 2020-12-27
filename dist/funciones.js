"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPicture(title, date, size) {
    console.log('create Picture using', title, date, size);
}
createPicture('My Birthday', '2020-03-10', '500x500');
function createPicture2(title, date, size) {
    console.log('create Picture using', title, date, size);
}
let createPic = (title, date, size) => {
    return { title, date, size };
};
const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log(picture);
