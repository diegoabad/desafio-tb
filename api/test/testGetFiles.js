const { expect } = require('chai');
const mocha = require('mocha');
const { getFiles } = require('../src/utils/files');

describe('Prueba de getFiles', () => {
  it('debería retornar un array de objetos si la función funciona correctamente', async () => {

    const result = await getFiles();

  
    expect(result).to.be.an('array');
    result.forEach((obj) => {
      expect(obj).to.be.an('object');
    });
  });

  
});
