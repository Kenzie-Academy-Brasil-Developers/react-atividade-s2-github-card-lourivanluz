import { useState } from "react";

export const SearchArea = ({ setApiResult }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [errorApi, setErrorApi] = useState(false);

  const dataApi = (data) => {
    const apiFilted = {
      fullname: data.full_name,
      avatarUrl: data.owner.avatar_url,
      htmlUrl: data.html_url,
      description: data.description,
      homepage: data.homepage,
    };
    return apiFilted;
  };

  const nome = () => {
    if (inputSearch === "") {
      console.log("erro procurando vazio");
    } else {
      fetch(` https://api.github.com/repos/${inputSearch}`)
        .then((response) => response.json())
        .then((response) => dataApi(response))
        .then((response) => setApiResult(response))
        .catch((err) => {
          console.error(`Erro na Api${err}`);
          setErrorApi(true);
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
      />
      <button onClick={nome}>Pesquisar</button>
    </div>
  );
};
