//Void

//TIpo explicito
const showInfo = (user: any): void => {
	console.log('User Info', user.id, user.username, user.firstName)
}

showInfo({
	id: 1,
	username: 'luixaviles',
	firstName: 'Luis',
})

//TIpo inferido
function showFormattedInfo(user: any) {
	console.log(
		'userInfo',
		`
		id: ${user.id}
		username: ${user.username}
		firstName: ${user.firstName}
	`,
	)
}

showFormattedInfo({
	id: 1,
	username: 'luixaviles',
	firstName: 'Luis',
})

//tipo void, como tipo de dato en una variable
//NUll solo funciona en compilación no estricta
let unusable: void = undefined
//let unusable2: void = null

//! TIpo NEver
// Representa el tipo de valor que nunca ocurre -> FUnciones que lanzan excepciones -> funciones que nunca retornan valor

function handleError(code: number, message: string): never {
	// Process your code here
	// Generate a message
	throw new Error(`${message}. Code: ${code}`)
}
try {
	let unusable: void = undefined
} catch {}

// function sumNumbers(Limit: number): never {
// 	let sum = 0
// 	while (true) {
// 		sum++
// 	}
// }

// sumNumbers(9)
