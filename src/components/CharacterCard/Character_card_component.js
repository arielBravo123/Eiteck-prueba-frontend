import React from "react";
import styles from "./styles.module.css";
import { FaRegCircle } from "react-icons/fa";
const CharacterCard = ({ character }) => {
  return (
    <div className={styles.card}>
      <img src={character.image} alt="Person" className={styles.card__image} />
      <p className={styles.card__name}>{character.name}</p>
      <div className={styles.text}>
        {character.status === "Dead" ? (
          <FaRegCircle className={styles.dead} />
        ) : null}{" "}
        {character.status === "Alive" ? (
          <FaRegCircle className={styles.alive} />
        ) : null}
        {character.status === "unknown" ? (
          <FaRegCircle className={styles.unknown} />
        ) : null}
        &nbsp; {character.status} - {character.species}
      </div>

      <button className={`${styles.btn} ${styles.draw__border}`}>
        Ver Detalles
      </button>
    </div>
  );
};

export default CharacterCard;
