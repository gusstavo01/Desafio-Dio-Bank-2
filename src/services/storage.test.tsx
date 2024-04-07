
import { getAllLocalStorage,createLocalStorage,changeLocalStorage } from "./storage";
const gaBank = {
    login:false,
    email:'',
    password:''
}
const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
describe('Storage', () => {
   
   
it('Deve retornar o objeto no localStorage com a chave GaBank', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith('GaBank');
})
it('Deve criar um objeto no localStorage', () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith('GaBank',JSON.stringify(gaBank));
})
it('Deve alterar o valor do objeto no localStorage', () => {
    changeLocalStorage(gaBank);
    expect(mockSetItem).toHaveBeenCalledWith('GaBank',JSON.stringify(gaBank));

})
});