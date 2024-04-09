import { Button } from "../Button";
import styles from "./PokeHead.module.css";

export const PokeHead = (props) => {
  // console.log(props);

  return (
    <div className={styles.header}>
      <h1>Pokemon Game</h1>
      <Button
        onClick={props.sayHello}
        color="success"
        size="large"
        title={props.buttonTitle}
      />
    </div>
  );
};
