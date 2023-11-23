let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  if (typeof characterInfo !== 'object' || characterInfo === null || Array.isArray(characterInfo)) {
    throw new Error('objeto inválido');
  }

  if (!('personagem' in characterInfo)) {
    throw new Error('objeto inválido');
  }
  let result = `Boas vindas, ${characterInfo.personagem}`;

  return result;
};

console.log(printMessage(info));

module.exports = { info, printMessage };