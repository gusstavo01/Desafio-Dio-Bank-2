const conta = {
    email: 'teste@gmail.com',
    password: '123456',
    name:'Gustavo Parente',
    balance: 9000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})