import { useState } from "react";
import { PokeHead } from "./Components/PokeHead/index.js";
import { PokedexContent } from "./Components/PokedexContent";
import pokemonData from "./Data/pokemon.json";

function App() {
  // console.log(pokemonData);
  const [firstTeam, setFirstTeam] = useState([]);
  const [secondTeam, setSecondTeam] = useState([]);
  // console.log(firstTeam);

  const handleStart = () => {
    console.log("Say Hello!");

    let newFirstTeam = [...pokemonData];
    let newSecondTeam = [];

    while (newFirstTeam > newSecondTeam) {
      const randomElement = Math.floor(Math.random() * newFirstTeam.length);
      const removeEl = newFirstTeam.splice(randomElement, 1);
      newSecondTeam.push(removeEl[0]);
      // console.log(removeEl);
    }
    // console.log(newFirstTeam);
    // console.log(newSecondTeam);
    setFirstTeam(newFirstTeam);
    setSecondTeam(newSecondTeam);
  };

  return (
    <>
      <PokeHead
        sayHello={handleStart}
        buttonTitle={secondTeam.length ? "Check" : "Start"}
      />
      {secondTeam.length && (
        <>
          <PokedexContent isWinner={true} power={200} pokemons={firstTeam} />
          <PokedexContent isWinner={true} power={200} pokemons={secondTeam} />
        </>
      )}
    </>
  );
}

export default App;
