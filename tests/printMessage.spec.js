const { info, printMessage } = require('../src/printMessage');

describe('2 - Implemente o caso de teste para a função `printMessage`', () => {
  it ('Testa a propriedade personagem no objeto.', () => {
    expect(info).toHaveProperty('personagem');
  });
});

describe('3 - Ainda sobre a função `printMessage`, adicione os casos de teste a seguir`', () => {
  it ('Testa a informação de boas vindas.', () => {
    const result = printMessage(info);
    expect(result).toMatch('Boas vindas, Margarida');
  });
  
  it ('Testa a informação referente ao nome da personagem.', () => {
    const result = printMessage(info);
    expect(result).toMatch('Margarida');
  });
});

describe('4 - Crie um fluxo de exceção para a função `printMessage`', () => {
  it ('Testa o fluxo de exceção da função printMessage.', () => {
/*     const invalidParameter = 'Não é um objeto válido'; */
    expect(() => printMessage()).toThrowError('objeto inválido');
  });
});