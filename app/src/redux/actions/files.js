import axios from "axios";
export const GET_ALL_FILES = "GET_ALL_FILES";
export const GET_FILE_LIST = "GET_FILE_LIST";


export const getAllFiles = (fileName) => {
  return (dispatch) => {
    try {
      axios
        .get(`http://localhost:8080/files/data?fileName=${fileName}`)
        .then((response) => {
          
            dispatch({
              type: GET_ALL_FILES,
              payload: {...response.data},
            });
         
        })
        .catch((error) => {
          Promise.reject(error);
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getFileList = () => {
  return (dispatch) => {
    try {
      axios
        .get(`http://localhost:8080/files/list`)
        .then((response) => {
      
          dispatch({
            type: GET_FILE_LIST,
            payload: response.data,
          });
        })
        .catch((error) => {
          Promise.reject(error);
        });
    } catch (err) {
      console.log(err);
    }
  };
};
