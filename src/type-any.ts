// TIpo explicito
let idUser: any = 1
idUser = '1'
console.log('idUser', idUser)

//TIpo Inferido
let otherId
otherId = 1
otherId = '1'
console.log('OtherId', otherId)

let surprise: any = 'hello typescript'
// surprise.sayHello()
//
const res = surprise.substring(6) // Error
console.log('res:', res)
