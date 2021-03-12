import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPage, characterSearchList } from "../../actions/characters_actions";
import { PageNumber } from "./home_styles";
import styles from "./styles.module.css";
import CharacterCard from "../../components/CharacterCard/Character_card_component";
import { FaSearch } from "react-icons/fa";

function getClickablePages(actualPage) {
  const offsets = [0, 1, 2];
  return offsets.map((number) => parseInt(actualPage, 10) + number);
}

function getNumberPage(direction, actualPage) {
  const nextPage = parseInt(actualPage, 10) + direction;

  return nextPage >= 0 ? nextPage : 1;
}

export const Home = ({ match }) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const characterList = useSelector((state) => state.characters);
  //const [characters, setCharacters] = useState([]);
  const { error, characters } = characterList;
  const clickablePages = getClickablePages(Number(match.params.page) || 1);
  const page = Number(match.params.page) || 1;

  useEffect(() => {
    dispatch(getPage(page));
  }, [dispatch, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true);
    dispatch(characterSearchList(1, searchValue));
  };

  const cleanSearch = (e) => {
    e.preventDefault();
    setIsSearching(false);
    dispatch(getPage(page));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.search__container}>
          <p className={styles.search__title}>Buscas algún personaje ?</p>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchTerm}
              placeholder=" Escribe su nombre"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className={styles.searchButton}>
              <FaSearch />
            </button>
          </div>
          {isSearching === true ? (
            <button onClick={cleanSearch} className={styles.btnClean}>
              Limpiar Búsqueda
            </button>
          ) : null}
        </div>
      </form>

      <div className={styles.wrapper}>
        {error ? (
          <div className={styles.errorText}>No se encontraron resultados</div>
        ) : characters ? (
          characters.results.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })
        ) : (
          <p>cargando</p>
        )}
      </div>
      {isSearching === false ? (
        <ul className={styles.pagination}>
          <Link className={styles.page} to={`/${getNumberPage(-1, page)}`}>
            <li> ant </li>
          </Link>
          {clickablePages.map((pageNumber) => (
            <Link
              className={styles.page}
              to={`/${pageNumber}`}
              key={pageNumber}
            >
              <PageNumber actualPage={pageNumber === page}>
                {pageNumber}
              </PageNumber>
            </Link>
          ))}
          <Link className={styles.page} to={`/${getNumberPage(1, page)}`}>
            <li> sig </li>
          </Link>
        </ul>
      ) : null}
    </>
  );
};

export default Home;
