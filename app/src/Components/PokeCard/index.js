import styles from "./PokeCard.module.css";

export const PokeCard = (props) => {
  

  const pokemonImg = (id) => {
    const newId = id.toString(); //String formasi
    let resultId = id; //Birde ozu ile muqayise

    if (newId.length === 1) {
      resultId = "00" + id;
    } else if (newId.length === 2) {
      resultId = "0" + id;
    }
    return resultId;
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.name}</p>
      <img
        width={120}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonImg(
          props.id
        )}.png`}
        alt="pokemon"
      />
      <p>Type:{props.type}</p>
      <p>EXP:{props.base_experience}</p>
    </div>
  );
};
