interface IGaBank {
    login: boolean,
    email: string,
    password: string
}

const gaBank = {
    login:false,
    email:'',
    password:''
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('GaBank');
}


export const createLocalStorage = (): void => {
    localStorage.setItem('GaBank',JSON.stringify(gaBank));
}

export const changeLocalStorage = (gaBank: IGaBank): void  => {
    localStorage.setItem('GaBank',JSON.stringify(gaBank)); 
}