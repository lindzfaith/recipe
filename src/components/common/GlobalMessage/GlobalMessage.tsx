import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./GlobalMessage.module.css";

export const GlobalMessage = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchString, setSearchString] = useState("");
  const onSearch = () => {};
  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };
  return (
    <span className={styles.globalMessage}>
      {!showInput && (
        <button onClick={() => setShowInput(true)}>Search for recipes</button>
      )}
      {showInput && (
        <>
          <input
            type="text"
            placeholder={"Enter a recipe name or type"}
            value={searchString}
            onChange={onInput}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => onSearch()}
          />
        </>
      )}
    </span>
  );
};
