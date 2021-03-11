import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../../actions/characters_actions";
import { PageNumber } from "./home_styles";
import styles from "./styles.module.css";
import CharacterCard from "../../components/CharacterCard/Character_card_component";

function getClickablePages(actualPage) {
  const offsets = [0, 1, 2, 3, 4];
  return offsets.map((number) => parseInt(actualPage, 10) + number);
}

function getNumberPage(direction, actualPage) {
  const nextPage = parseInt(actualPage, 10) + direction;

  return nextPage >= 0 ? nextPage : 1;
}

export const Home = ({ match }) => {
  const dispatch = useDispatch();
  const characterList = useSelector((state) => state.characters);
  //const [characters, setCharacters] = useState([]);
  const { results } = characterList;
  const clickablePages = getClickablePages(Number(match.params.page) || 1);
  const page = Number(match.params.page) || 1;

  useEffect(() => {
    dispatch(getPage(page));
  }, [dispatch, page]);

  return (
    <>
      <div className={styles.wrapper}>
        {results
          ? results.map((character) => {
              return <CharacterCard key={character.id} character={character} />;
            })
          : null}
      </div>

      <ul className={styles.pagination}>
        <Link className={styles.page} to={`/${getNumberPage(-1, page)}`}>
          <li> ant </li>
        </Link>
        {clickablePages.map((pageNumber) => (
          <Link className={styles.page} to={`/${pageNumber}`} key={pageNumber}>
            <PageNumber actualPage={pageNumber === page}>
              {pageNumber}
            </PageNumber>
          </Link>
        ))}
        <Link className={styles.page} to={`/${getNumberPage(1, page)}`}>
          <li> sig </li>
        </Link>
      </ul>
    </>
  );
};

export default Home;
