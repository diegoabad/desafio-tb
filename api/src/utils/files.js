 const axios = require('axios');
 const resolucion = (respuestaTexto, nombreArchivo) => {
    const lineas = respuestaTexto.trim().split('\n');
  
    const lineasJSON = [];
  
   
    for (let i = 1; i < lineas.length; i++) {
      const campos = lineas[i].split(',');
  
 
      const [file, text, number, hex] = campos;
      if (file && text &&  !isNaN(number) &&
      !isNaN(number) &&
      Number.isInteger(Number(number)) &&
      Number(number) <= Number.MAX_SAFE_INTEGER &&  /^[0-9a-fA-F]{32}$/.test(hex)) {
        const linea = {
          text: text,
          number: parseInt(number, 10),
          hex: hex
        };
        lineasJSON.push(linea);
      }
    }
  
    const resultado = {
      file: nombreArchivo,
      lines: lineasJSON
    };
  
    return resultado;
  };

  const callApi = (url) =>{
    return axios.get(url, {
      headers: {
        'Authorization': 'Bearer aSuperSecretKey'
      }
    })
  }
  
  const getFiles = (fileName) => {
    return callApi("https://echo-serv.tbxnet.com/v1/secret/files")
      .then(response => {
        const data = response.data;    
        const files = data.files;
        const filePromises = files.map(file => {
          const url = `https://echo-serv.tbxnet.com/v1/secret/file/${file}`
          return callApi(url)
            .then(response => {
    
              if (response.status === 200) {
                return response.data;
              }

              return undefined;
            })
            .then(text => {
      
              if (text) {
                const resultado = resolucion(text,file);
                if (resultado.lines.length > 0) {
                  return resultado;
                }
              }
            })
            .catch(error => {
              error
            });
        });
  
       
        return Promise.allSettled(filePromises);
      })
      .then(results => {
  
        const successfulPromises = results.filter(result => result.status === 'fulfilled' && result.value !== undefined);
  
      
        const successfulResponses = successfulPromises.map(result => result.value);
  
    
        const jsonArray = successfulResponses;
  
        return jsonArray;
      })
      .catch(error => {
        error
      });
  };
  
  module.exports = { getFiles,callApi };
  