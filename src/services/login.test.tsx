import { login } from "./login";


describe('login', () => {
   
    const mockEmail = 'teste@gmail.com';
    const mockSenha = '123456';
    it('Deve exibir um alert com boas vindas, caso o email seja válido', async() => {
       const response = await login(mockEmail,mockSenha);
       expect(response).toBeTruthy();
      
    })

    it('Deve exibir um error caso o email seja inválido', async () => {
        const response = await login('invalido@gmail.com','senhainvalida');
        expect(response).toBeFalsy()
    });
});