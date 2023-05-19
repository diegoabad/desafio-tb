const {getFiles,callApi,getOneFile} = require('../utils/files');

const getAllFiles = async (req, res) => {
  try {
    const { fileName } = req.query;
    let result;

    if (!fileName || fileName === "undefined") {
      result = await getFiles();
    } else {
      result = await getOneFile(fileName);
    }

    res.status(200).send(result);
  } catch (err) {
    res.status(500).send("Problema en el servidor")
    console.log(err);
  }
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
