import { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);
  return (
    <div>
      <NavPage setPage={setPage} page={page} />
      <div className="container">
        <section className="grid-container">
          {loading ? (
            <h2>Cargando......</h2>
          ) : (
            characters.map((character) => (
              <Character key={character.id} character={character} />
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default CharacterList;
