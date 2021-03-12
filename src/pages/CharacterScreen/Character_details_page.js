import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { characterDetails } from "../../actions/characters_actions";
import { FaRegCircle } from "react-icons/fa";
import moment from "moment";
const CharacterDetailsScreen = ({ match }) => {
  const dispatch = useDispatch();
  const characterId = match.params.id;
  const { singleCharacter } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(characterDetails(characterId));
  }, [dispatch, characterId]);
  return (
    <>
      {singleCharacter ? (
        <section className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={singleCharacter.image}
                alt=""
              />
            </div>

            <div>
              <h2>{singleCharacter.name}</h2>
              <h3>Status:</h3>
              <div className={styles.text}>
                {singleCharacter.status === "Dead" ? (
                  <FaRegCircle className={styles.dead} />
                ) : null}{" "}
                {singleCharacter.status === "Alive" ? (
                  <FaRegCircle className={styles.alive} />
                ) : null}
                {singleCharacter.status === "unknown" ? (
                  <FaRegCircle className={styles.unknown} />
                ) : null}
                &nbsp; {singleCharacter.status}
              </div>
              <div className={styles.textDivider}>
                <div>
                  <h3>Especie:</h3>
                  <div className={styles.text}>{singleCharacter.species}</div>
                </div>
                <div>
                  <h3>Género:</h3>
                  <div className={styles.text}>{singleCharacter.gender}</div>
                </div>
              </div>
              <div className={styles.textDivider}>
                <div>
                  <h3>Origen:</h3>
                  <div className={styles.text}>
                    {singleCharacter.origin.name}
                  </div>
                </div>
                <div>
                  <h3>Ultima ubicación conocida:</h3>
                  <div className={styles.text}>
                    {singleCharacter.location.name}
                  </div>
                </div>
              </div>
              <div className={styles.centerbtn}>
                <Link to="/1" className={`${styles.button}`}>
                  Ir al menú principal
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default CharacterDetailsScreen;
