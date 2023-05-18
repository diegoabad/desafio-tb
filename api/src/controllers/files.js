const {getFiles,callApi} = require('../utils/files');

const getAllFiles =  (req, res) => {
  try{
    const {fileName} = req.query
    getFiles(fileName).then(files=> res.send(files))
  }catch(err){console.log(err)}
};

const getFilesList =  (req, res) => {
  try{
    callApi("https://echo-serv.tbxnet.com/v1/secret/files").then(files=> res.send(files.data.files))
  }catch(err){console.log(err)}
};


module.exports = {
  getAllFiles,
  getFilesList
};
