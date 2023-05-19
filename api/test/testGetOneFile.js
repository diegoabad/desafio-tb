const { expect } = require('chai');
const mocha = require('mocha');
const { getOneFile } = require('../src/utils/files');

describe('Prueba de getOneFile', () => {
  it('debería retornar un array si se le pasa un fileName válido', async () => {
    const fileName = 'test2.csv';
    const result = await getOneFile(fileName);
    expect(result).to.be.an('array');
  });

  it('debería retornar undefined si se le pasa un fileName inválido', async () => {
    const fileName = 'prueba1';
    const result = await getOneFile(fileName);
    expect(result).to.be.undefined;
  });
});
