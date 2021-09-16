import { useState } from "react";
import "./style.css";
export const SearchArea = ({ setApiResult }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [error, setError] = useState(false);
  const [menssage, setMenssage] = useState("");

  const dataApi = (data) => {
    const apiFilted = {
      fullname: data.full_name,
      avatarUrl: data.owner.avatar_url,
      htmlUrl: data.html_url,
      description: data.description,
      homepage: data.homepage,
    };
    setError(false);
    return apiFilted;
  };

  const searchInApi = () => {
    if (inputSearch === "") {
      setError(true);
      setMenssage("Campo de pesquisa vazio");
    } else {
      fetch(` https://api.github.com/repos/${inputSearch}`)
        .then((response) => response.json())
        .then((response) => dataApi(response))
        .then((response) => setApiResult(response))
        .catch(() => {
          setError(true);
          setMenssage("Repositório não encontrado ou fora do ar");
        });
    }
  };
  return (
    <div className="container-search">
      <label htmlFor="inputSearch">Digite o nome do repositório</label>
      <input
        id="inputSearch"
        type="text"
        value={inputSearch}
        onChange={(event) => setInputSearch(event.target.value)}
        className={error ? "inputError" : ""}
        placeholder="Digite o nome do repositório"
        required
      />
      {error && <div>{menssage}</div>}
      <button onClick={searchInApi}>Pesquisar</button>
    </div>
  );
};
