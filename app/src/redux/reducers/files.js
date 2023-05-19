import { GET_ALL_FILES,GET_FILE_LIST } from "../actions/files";

const initialState = {
  files: {
    data: [],
    status:""
  },
  list:[]
};

const files = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_FILES}`:

      return {
        ...state,
        files:{...action.payload}
      };
      case `${GET_FILE_LIST}`:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};

export default files;
