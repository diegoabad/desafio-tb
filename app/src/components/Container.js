import { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFiles,getFileList } from "../redux/actions/files";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFiles());
    dispatch(getFileList())
  }, []);

  const data = useSelector((state) => state.files.files);
  const list = useSelector((state) => state.files.list);
  const headerTitle = "React Test App";

  const handleReset=()=>{
    setSearchValue("");
    dispatch(getAllFiles());
  }

  const handleSearch=()=>{
    dispatch(getAllFiles(searchValue));
  }

  return (
    <div>
      <Header title={headerTitle} list={list}  />
      <Search reset={handleReset} searchValue={searchValue} setSearchValue={setSearchValue} search={handleSearch}/>
      <TableData files={data} />
    </div>
  );
}

export default App;
