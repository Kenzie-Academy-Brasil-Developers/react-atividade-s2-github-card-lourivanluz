import { useEffect, useState } from "react";
import "./App.css";
import { ListResult } from "./components/ListResult";
import { SearchArea } from "./components/SeachArea";

function App() {
  const [apiResult, setApiResult] = useState(null);
  const [resultList, setResultList] = useState([]);
  useEffect(() => {
    if (apiResult) {
      setResultList([...resultList, apiResult]);
    }
  }, [apiResult]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchArea setApiResult={setApiResult} />
        {apiResult && <ListResult resultList={resultList} />}
      </header>
    </div>
  );
}

export default App;
