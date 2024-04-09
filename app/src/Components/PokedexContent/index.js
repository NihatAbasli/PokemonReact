import { PokeCard } from "../PokeCard";
import styles from "./PokedexContent.module.css";

export const PokedexContent = (props) => {
  // console.log(props);
  return (
    <div>
      <p
        className={styles.title_winner}
        style={{ color: props.isWinner ? "green" : "red" }}
      >
        {props.isWinner ? "Winner" : "Lose"}
      </p>
      <p className={styles.title_power}>{props.power}</p>
      <div className={styles.container}>
        {props.pokemons?.map((pokemon) => (
          <PokeCard key={"pokecard" + pokemon.id} {...pokemon} />
        ))}
      </div>
    </div>
  );
};

// {props.pokemons?.map((pokemon)=>(<PokeCard key={"pokecard"+pokemon.id} type={pokemon.type} name={pokemon.name} />)}
