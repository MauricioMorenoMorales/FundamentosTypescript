// Corchetes []
//Tipo Explicito
let users: string[]
users = ['luixaviles', 'paprazzi', 'lensqueen', 'wea']
//? Para que funcion esto puedes declarar tipo any users = [1, true, 'test']

//TIpo Inferido
let otherUsers = ['luixaviles', 'paparrazzi', 'lensqueen']
//? se infiere el tipo string otherUsers = [1, true, 'test']

//Array <tipo>
let pictureTitles: Array<string>
pictureTitles = ['Favorite Sunset', 'Vacation time ', 'LandScape']
// pictureTItles = [true, 1, [1,2]]

//Accediendo a los valores en un array

console.log('first user', users[0])
console.log('first title', pictureTitles[0])

//Propiedades y metodos en un Array
console.log('users length: ', users.length)
users.push('platzi user')
console.log('users', users)
