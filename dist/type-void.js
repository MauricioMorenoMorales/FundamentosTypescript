"use strict";
const showInfo = (user) => {
    console.log('User Info', user.id, user.username, user.firstName);
};
showInfo({
    id: 1,
    username: 'luixaviles',
    firstName: 'Luis',
});
function showFormattedInfo(user) {
    console.log('userInfo', `
		id: ${user.id}
		username: ${user.username}
		firstName: ${user.firstName}
	`);
}
showFormattedInfo({
    id: 1,
    username: 'luixaviles',
    firstName: 'Luis',
});
let unusable = undefined;
function handleError(code, message) {
    throw new Error(`${message}. Code: ${code}`);
}
try {
    let unusable = undefined;
}
catch { }
